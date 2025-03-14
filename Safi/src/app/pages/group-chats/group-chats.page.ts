import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';





@Component({
  selector: 'app-group-chats',
  templateUrl: './group-chats.page.html',
  styleUrls: ['./group-chats.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle]
})
export class GroupChatsPage implements OnInit {

  groupChats = [
    { name: 'Grupo super duper', time: '4:20', unread: 15, image: 'assets/chat1.jpg' },
    { name: 'Aventuras al límite', time: '5:30', unread: 10, image: 'assets/chat2.jpg' },
    { name: 'Código & Café', time: '6:15', unread: 5, image: 'assets/chat3.jpg' },
    { name: 'Exploradores Nocturnos', time: '7:00', unread: 20, image: 'assets/chat4.jpg' }
  ];

  constructor() { }

  ngOnInit() {
    console.log('Group Chats Page Loaded');
  }
}
