import { Cart } from './../models/cart';
import { STORAGE_KEYS } from './../config/storage-keys.config';
import { LocalUser } from './../models/local-user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  getLocalUser(): LocalUser {
    let usr = localStorage.getItem(STORAGE_KEYS.localUser);
    if (usr == null) {
      return null;
    } else {
      return JSON.parse(usr);
    }
  }

  setLocalUser(obj: LocalUser) {
    if (obj == null) {
      localStorage.removeItem(STORAGE_KEYS.localUser);
    } else {
      localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
    }
  }

  getUserCart(): Cart {
    let str = localStorage.getItem(STORAGE_KEYS.userCart);
    if (str != null) {
      return JSON.parse(str);
    } else {
      return null;
    }
  }

  setUserCart(obj: Cart) {
    if (obj != null) {
      localStorage.setItem(STORAGE_KEYS.userCart, JSON.stringify(obj));
    } else {
      localStorage.removeItem(STORAGE_KEYS.userCart);
    }
  }
}
