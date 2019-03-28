import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public color = [];

  constructor(
  ) {
    swal({
      title: 'Gracias por visitarme <i class="far fa-grin"></i>',
      width: 600,
      background: '#FFFFFF',
      backdrop: `
        rgba(0,0,0,0.4)
        url("/assets/images/fondo2.gif")
        center left
        no-repeat
      `,
      type: 'success',
      confirmButtonText: 'Pulsame'
    });

  }

  ngOnInit() {
  }

  external() {
    window.open('https://github.com/Semllo?tab=repositories', '_blank');
  }
}
