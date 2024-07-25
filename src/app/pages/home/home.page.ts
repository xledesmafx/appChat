import { Component } from '@angular/core';
import { AppChatService } from 'src/app/services/app-chat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private appChatService:AppChatService) {
  //this.acceso();
  }

 /* acceso(){
    this.appChatService.login('user1','password1').subscribe(
      data=>{
          console.log(data);
      });
  }
      */
}
