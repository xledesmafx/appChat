import { Component, OnInit } from '@angular/core';
import { AppChatService } from '../../services/app-chat.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {
  messages: any[] = [];
  newMessageContent: string = '';

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

  sendMessage() {
    const senderId = 1; // ID del remitente
    const groupId = 1;  // ID del grupo
    const content = this.newMessageContent; // Contenido del mensaje

    this.appChatService.postGroupMessages(senderId, groupId, content).subscribe(
      response => {
        this.loadGroupMessages(); // Recargar los mensajes después de enviar uno nuevo
        this.newMessageContent = ''; // Limpiar el contenido del nuevo mensaje
      },
      error => {
        console.error('Error sending message', error);
      }
    );
  }


}
