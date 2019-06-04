import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from '../../services/register-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:string;
  email:string;
  street:string;
  city:string;
  pincode:number;

  constructor(private registerUserService:RegisterUserService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){

    const user={
      name:this.name,
      email:this.email,
      street:this.street,
      city:this.city,
      pincode:this.pincode
    }

    this.registerUserService.registerUser(user).subscribe(data=>{
      console.log(data);
      
      if(data.success){
        console.log("user registered successfully");
      }else{
        console.log("something went wrong");
      }
    });
    
  }

}
