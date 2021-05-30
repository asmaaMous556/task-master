# Task
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.
fork this project first

 
## 1
use angular to generate reacive form in the signup component.
 the form should get the folowing information from the user.
 name , nationality , email , password ,password confirmation,ip adress

## 2
 * use the apis in my-apis service to get user ip adress and to put user geo location as a defult value for nationality input
 * test all apis first and make prober interfaces for the data
 * (optinal)you may use Rxjs operators to  merge the ip and geolocation apis together

## 3
validate the form so that 
* user must use English character in name input no special characters allowed
* disable arabic for name input
* nationality should be selected from countries data
* pasword doesnt accept arabic characters and min 8 char
* password confirmation must  = password
* all inputs are requierd

## 4
* after validating the form navigate the user to welcome component 
* user should not have acces to welcome page without signup first
* use user name in the welcome page
## 5
  * use any styeling you like for both bages but it must be responsive
