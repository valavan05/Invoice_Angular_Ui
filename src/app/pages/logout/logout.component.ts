import { Component } from "@angular/core";
import { AuthServive } from "../../services/auth.service";
import { Router } from "@angular/router";
 
@Component({
    selector:'app-login',
    standalone:true,
    imports:[],
    templateUrl:'./logout.component.html',
    styleUrls:['./logout.component.css']
})
export class LogoutComponent{
    constructor(
        private service:AuthServive,
        private router:Router
    ){}
 
    logout(){
        this.service.logout();
        this.router.navigate(['/home']);
    }
}