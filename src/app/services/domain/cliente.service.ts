import { ImageUtilService } from './../image-util.service';
import { StorageService } from './../storage.service';
import { API_CONFIG } from './../../config/api.config';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteDTO } from 'src/app/models/cliente.dto';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private imageUtilService: ImageUtilService) { }

  findById(id: string) {
    return this.http.get(
      `${API_CONFIG.baseUrl}/clientes/${id}`
    );
  }

  findByEmail(email: string) {
    return this.http.get(
      `${API_CONFIG.baseUrl}/clientes/email?value=${email}`
    );
  }

  getImageFromBucket(id: string): Observable<any> {
    let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`;
    return this.http.get(url, { responseType: 'blob' });
  }

  insert(obj: ClienteDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}/clientes`, obj, {
      observe: 'response',
      responseType: 'text',
    });
  }

  uploadPicture(picture) {
    let pictureBlob = this.imageUtilService.dataUriToBlob(picture);
    let formData: FormData = new FormData();
    formData.set('file', pictureBlob, 'file.jpg');
    return this.http.post(`${API_CONFIG.baseUrl}/clientes/picture`,
      formData,
      {
        observe: 'response',
        responseType: 'text',
      }
    );
  }

}
