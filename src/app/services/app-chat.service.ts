import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppChatService {

  constructor(private http:HttpClient) { }

  login(username:string,password:string){
      var formData = new FormData();
      formData.append('username',username);
      formData.append('password',password);
      var url='https://www.hostcatedral.com/api/app-chat/public/login';
      return this.http.post(url,formData);
  }
}
