import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';  
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
  imports: [IonicModule, FormsModule]
})
export class EditProfilePage {
  profileImage: string = 'assets/logo2.svg'; // Imagen de perfil por defecto
  userName: string = '';

  constructor(private navCtrl: NavController) {}

  changeProfilePicture(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImage = reader.result as string; // Convierte la imagen a base64
      };
      reader.readAsDataURL(file);
    }
  }

  openFilePicker() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click(); // Activa el input file oculto
  }

  saveProfile() {
    console.log('Perfil guardado:', this.userName);
    this.navCtrl.navigateForward('/home'); // Redirigir a otra pantalla
  }
}
