import { Component, OnInit } from '@angular/core';
//import { FormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthenticationStatus } from '../models/AuthenticationStatus.model';
import { Patient } from '../models/patient';
import { PatientloginService } from '../services/patientlogin.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  authStatus: AuthenticationStatus | undefined;
  constructor(
    private patientloginService: PatientloginService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  message:"hety"
  ngOnInit(): void {  this.patientloginService.setMessage(this.message) }
  patientlogin:Patient=new Patient()
  
 
    onSubmit(name:string,pass:string) {
    
      this.patientlogin={
        p_id:0,   
        p_name:'',
        p_contact_no:0,
        p_gender:'',
        username:name,
        password:pass,
      }

     

    // console.log(form.value.username, form.value.password);
    console.log(name, pass);
    this.patientloginService
    .authenticated(this.patientlogin)
    .subscribe((res) => {
      this.authStatus = res;
      if (this.authStatus.authenticated) {
        alert("Successfully logged in!")
        
        this.router.navigate(['/patienthomepage'], {relativeTo: this.route});
      }
      else {
        alert("Invalid Credentials!")
        this.router.navigate(['/patient'], { relativeTo: this.route});
        // form.reset();
      }
    });

  }
};