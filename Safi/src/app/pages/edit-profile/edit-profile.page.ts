import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // 🔹 Importa IonicModule
import { NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],// 🔹 Importa IonicModule aquí
  imports: [IonicModule, FormsModule]  // 🔹 Agrégalo aquí
})
export class EditProfilePage {
  profileImage: string = 'assets/default-avatar.png'; // Imagen de perfil por defecto
  userName: string = '';

  constructor(private navCtrl: NavController) {}

  changeProfilePicture() {
    // Aquí podrías abrir la galería o la cámara
    console.log('Cambiar foto de perfil');
  }

  saveProfile() {
    console.log('Perfil guardado:', this.userName);
    this.navCtrl.navigateForward('/home'); // Redirigir a otra pantalla
  }
}
