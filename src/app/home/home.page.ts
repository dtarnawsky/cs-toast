import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name = environment.name;
  handlerMessage = '';
  roleMessage = '';
  constructor(private toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 3000,
      htmlAttributes: {'aria-label':''},
      buttons: [
        {
          text: 'More Info',
          role: 'info',
          handler: () => { this.handlerMessage = 'More Info clicked'; }
        },
        {
          text: 'Dismiss',
          role: 'cancel',
          handler: () => { this.handlerMessage = 'Dismiss clicked'; }
        }
      ]
    });

    await toast.present();

    const { role } = await toast.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

}
