import { Component, OnInit } from '@angular/core';
import { WebsocketsService } from '../services/socketIO/websockets.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(
    public wsService: WebsocketsService
  ) { }

  ngOnInit() {
  }

}
