import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Keyboard } from '@capacitor/keyboard'; // Importa el teclado de Capacitor

@Component({
  selector: 'app-vista-chat',
  templateUrl: './vista-chat.page.html',
  styleUrls: ['./vista-chat.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VistaChatPage {
  @ViewChild(IonContent) content!: IonContent;
  
  messages = [
    { text: 'Hola, ¿cómo estás?', type: 'received', timestamp: '4:20 pm' },
    { text: 'Bien, ¿y tú?', type: 'sent', timestamp: '4:21 pm' }
  ];
  
  newMessage: string = '';

  constructor() {}

  ngOnInit() {
    this.setupKeyboardListeners();
  }

  sendMessage() {
    if (this.newMessage.trim().length === 0) {
      return;
    }
    this.messages.push({
      text: this.newMessage,
      type: 'sent',
      timestamp: new Date().toLocaleTimeString()
    });
    this.newMessage = '';

    setTimeout(() => {
      this.content.scrollToBottom(200);
    }, 300);
  }

  setupKeyboardListeners() {
    Keyboard.addListener('keyboardDidShow', () => {
      setTimeout(() => {
        this.content.scrollToBottom(200);
      }, 300);
    });

    Keyboard.addListener('keyboardDidHide', () => {
      console.log('Teclado cerrado');
    });
  }
}
