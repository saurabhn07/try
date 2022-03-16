import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../models/adminlogin.model';
import { AuthenticationStatus } from '../models/AuthenticationStatus.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin=new Admin();
  msg='';
   constructor(private _service : AdminService, private _router : Router) { }
 
   ngOnInit(){
 
   }
   loginAdmin(){
     this._service.loginAdminFromRemote(this.admin).subscribe(
       data =>{console.log("response recieved");
       alert('loginsuccess');
      this._router.navigate(['/adminmainpage'])
     } ,
       error => {
         console.log("exception occured");
       this.msg="Bad credentials,please enter valid emailid and password";
       }
       )
   }
   gotoregistration(){
     this._router.navigate(['/registration'])
   }
   
   
     }