import { Observable } from 'rxjs';
import { geo } from './../models/geoLocation';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* use those apis to get user geolocations and nationality all apis accept get request
https://backofficeapi.online-tkt.com/api/GetAllCountriesByLangName?LangCode=en
returns all countries with country codes
*********
https://api.ipify.org/?format=json
returns users ip adress
*********
use ip adress to get user geo location and country
https://ipapi.co/${ip-adress}/json/
*/

@Injectable({
  providedIn: 'root'
})
export class MyApisService {

  constructor(private http :HttpClient) { }

  getAllCountries(){
    const url = environment.countriesUrl;
    return this.http.get(url)
  }

  getIpAddress():any{
    const url = environment.userIpAddress;
   return this.http.get(url);
  }

  getGeoLocation (ip : string ) {
    console.log();
    
   return this.http.get<geo>(`https://ipapi.co/${ip}/json/`);
  }
}
