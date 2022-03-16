import { Component, OnInit } from '@angular/core';
import { Inv } from '../models/invmodel';
import { InvService } from '../services/inv.service';
import { PatientloginService } from '../services/patientlogin.service';
@Component({
  selector: 'app-patienthomepage',
  templateUrl: './patienthomepage.component.html',
  styleUrls: ['./patienthomepage.component.css']
})
export class PatienthomepageComponent implements OnInit {
  
  public pdata = [] as any;
  message:string;
  amount:number;

  constructor(private eservice: InvService , private pservice: PatientloginService) { }

  ngOnInit(): void {
    
    
  }
  
  getInv(x:number){
    this.eservice.getInv(x)
    .subscribe((data) => (this.pdata = data));

   
  }
  mult(){this.amount=this.pdata.price}
}