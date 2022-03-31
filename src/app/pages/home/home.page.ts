import { DataService } from './../../services/data/data.service';
import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private dataServices: DataService) { }

  ngOnInit() {
  }

  createTodo() {
    this.navCtrl.navigateForward('/order-config');
  }

  detail() {
    this.navCtrl.navigateForward('/order-detail');
  }

  async delete() {
    const alert = await this.alertCtrl.create({
      header: 'تأكيد الحذف',
      message: 'هل أنت متأكد من حذف هذا؟',
      mode: 'ios',
      buttons: [
        {
          text: 'لا',
          role: 'cancel'
        },
        {
          text: 'نعم',
          handler: () => {
            console.log('تم');
          }
        }
      ]
    });

    await alert.present();
  }

  edit() {
    this.dataServices.setParams({
      todo: {
        title: 'مهمة',
        desc: 'مهمة جديدة'
      }
    });

    this.navCtrl.navigateForward('/order-config');

  }

}
