import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName: string | null = null;

  login(userName: string): void {
    this.userName = userName;
  }
}
