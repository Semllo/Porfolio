import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {

  public socketStatus = false;

  constructor(
    private socket: Socket
  ) {
    this.ckeckStatus();
  }

  ckeckStatus() {

    this.socket.on( 'connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });

    this.socket.on( 'disconnect', () => {
      console.log('Desconectando del servidor');
      this.socketStatus = false;
    });

  }
}
