import { AuthService } from './../../services/auth.service';
import { geo } from './../../models/geoLocation';
import { MyApisService } from './../../services/my-apis.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
userForm:FormGroup;
passwordGroup:FormArray
countries: any;
country_name:string
ipAddress;
geo:geo;
  dropdownSettings: { singleSelection: boolean; idField: string; textField: string; selectAllText: string; unSelectAllText: string; allowSearchFilter: boolean; };
  constructor(private fb:FormBuilder,
    private myApi:MyApisService,
    private auth:AuthService,
    private router :Router) {}

  ngOnInit(): void {
    this.createForm();
    this.getIpAddress();
    this.getAllCountries(); 
    
  }
  createForm(){
    //^[a-zA-Z]+[ a-zA-Z-_]*$
   // Validators.pattern('^[\w\s]+$')
    this.userForm=this.fb.group({
      name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      password:['',[Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
      Validators.minLength(8)]],
      confirmPassword:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      nationality :['',[Validators.required]],
      ipAddress:['',[Validators.required]],
    })
  }

    getIpAddress(){
    this.myApi.getIpAddress().subscribe(res=>{
      this.ipAddress=res.ip;
      if(this.ipAddress){
        this.userForm.patchValue({
        ipAddress :this.ipAddress
        })
        this.getGeoLocation(this.ipAddress);
       }
      });
    
  }
  getGeoLocation(ip:string){
    this.myApi.getGeoLocation(ip).subscribe(res=>{
      this.geo=res;
     this.country_name= this.geo.country_name 
     if(this.country_name){
      this.userForm.patchValue({
        nationality:this.country_name
      })
     }
     
    
    });
  }
  getAllCountries(){
    this.myApi.getAllCountries().subscribe(countries=>{
      this.countries=countries;
      this.fetchDropDownData();
    });
  }

  fetchDropDownData (){
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'pseudoCountryCode',
      textField: 'countryName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: false
    };

  }
  
  signUp(form){
    if (form){
      this.auth.setToken(form);
      this.router.navigate(['/welcome']);
    } 
  }

}
