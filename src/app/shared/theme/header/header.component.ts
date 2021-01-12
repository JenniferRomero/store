import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() mensajeHijo = new EventEmitter<string>();
  searchStringArt: any;

  constructor() { }

  ngOnInit(): void {
  }

  search(event) {
    this.mensajeHijo.emit(this.searchStringArt);
  }

  showMenu() {
    console.log(document.getElementById('nav-menu').classList.contains('nav-open'));
    if (document.getElementById('nav-menu').classList.contains('nav-open')) {
      document.getElementById('nav-menu').classList.replace('nav-open', 'nav-close');
    } else {
      document.getElementById('nav-menu').classList.replace('nav-close', 'nav-open');
    }
  }

}
