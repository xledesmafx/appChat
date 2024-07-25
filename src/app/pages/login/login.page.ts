import { Component, OnInit } from '@angular/core';
import { AppChatService } from '../../services/app-chat.service';
import { LoginResponse } from 'src/app/interfaces/LoginResponse';
import { Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
user={username:null,password:null};
  datos_usuario!: LoginResponse;
  constructor(
    private appChatService:AppChatService,
    private router:Router,
    public alertController:AlertController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }








  async Alert(msg:string){
    const alert = await this.alertController.create({
      header: 'Atencion',
      message: msg,
      buttons: ['ACEPTAR']

    });
    await alert.present();

    const{ role } = await alert.onDidDismiss();
  }

  validar() {

        this.loadingCtrl.create({
        message: 'Cargando...'
      });

    if (this.user.username && this.user.password) {
      console.log(this.user);
      this.appChatService.login(this.user.username, this.user.password).subscribe(
        data => {
          this.datos_usuario=data;
          console.log(this.datos_usuario.data.username);

          localStorage.setItem("username",this.datos_usuario.data.username);
          localStorage.setItem("token",this.datos_usuario.data.token);

          //PAGINA A LA CUAL NOS VA LLEVAR EN EL CASO DE HABER HECHO BIEN EL LOGIN ACA DEBE IR LA PARTE DE MAURI
          this.router.navigateByUrl('/home');

        },
        error => {
          this.Alert(error.error.message);
        }
        
      );
    } else {
      console.warn('EL USERNAME NO PUEDE SER NULL');
    }
  }
}

