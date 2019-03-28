import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    init_plugins();
  }

}
