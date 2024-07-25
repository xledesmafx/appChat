import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

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

  getGroupMessages(groupId: number): Observable<any[]> {
    const url = `https://www.hostcatedral.com/api/app-chat/public/group-messages-by-group/${groupId}`;
    return this.http.get<any[]>(url);
  }

  postGroupMessages(sender_id: number, group_id: number, content: string): Observable<any> {
    const formData = new FormData();
    formData.append('sender_id', sender_id.toString());
    formData.append('group_id', group_id.toString());
    formData.append('content', content);

    const url = 'https://www.hostcatedral.com/api/app-chat/public/group-messages';
    return this.http.post<any>(url, formData);
  }

}
