import { Component, OnInit } from '@angular/core';
import { AppChatService } from '../../services/app-chat.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {
  messages: any[] = [];

  constructor(private appChatService:AppChatService) { }

  ngOnInit() {
    this.loadGroupMessages();
  }
  loadGroupMessages() {
    const groupId = 1;
    this.appChatService.getGroupMessages(groupId).subscribe(
      data => {
        if (data && data.length > 0) {
          this.messages = data;
        }
      },
      error => {
        console.error('Error fetching group messages', error);
      }
    );
  }
}
