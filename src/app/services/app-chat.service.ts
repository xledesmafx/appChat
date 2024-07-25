import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
<<<<<<< HEAD
<<<<<<< Updated upstream
import { Observable } from 'rxjs';
=======
import { LoginResponse } from '../interfaces/LoginResponse';
>>>>>>> Stashed changes
=======
>>>>>>> parent of de9c525 (Merge pull request #1 from LucasGZ02/lucas)

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

      return this.http.post<LoginResponse>(url,formData);
  }
}
