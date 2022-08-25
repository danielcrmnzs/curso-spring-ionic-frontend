import { API_CONFIG } from './../../config/api.config';
import { ClienteService } from './../../services/domain/cliente.service';
import { ClienteDTO } from './../../models/cliente.dto';
import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  cliente: ClienteDTO;
  picture: string;
  cameraOn: boolean = false;

  constructor(
    public router: Router,
    public storage: StorageService,
    public clienteService: ClienteService
  ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.loadData();
  }

  loadData() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.clienteService.findByEmail(localUser.email).subscribe(
        (response) => {
          this.cliente = response as ClienteDTO;
          this.getImageIfExists();
        },
        (error) => {
          if (error.status == 403) {
            this.router.navigateByUrl('home');
          }
        }
      );
    } else {
      this.router.navigateByUrl('home');
    }
  }

  getImageIfExists() {
    this.clienteService.getImageFromBucket(this.cliente.id).subscribe(
      (response) => {
        this.cliente.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.cliente.id}.jpg`;
      },
      (error) => { }
    );
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.picture = image.dataUrl;
  };

  async getGalleryPicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos
    });

    this.picture = image.dataUrl;
  };


  sendPicture() {
    this.clienteService.uploadPicture(this.picture)
      .subscribe(
        response => {
          this.picture = null;
          this.loadData();
        },
        error => {

        });
  }

  cancel() {
    this.picture = null;
  }


}
