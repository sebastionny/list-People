import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class LoginService{
    token: string;

    constructor(private router : Router){}

    login(email:string, password:string){
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(
                response =>{
                    firebase.auth().currentUser.getIdToken().then(
                        token =>{
                            this.token = token;
                        }
                    )
                }
            )
            this.router.navigate(['/']);
    }


}