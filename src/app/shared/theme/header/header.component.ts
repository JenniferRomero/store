import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() mensajeHijo = new EventEmitter<string>();
  searchString: any;

  constructor() { }

  ngOnInit(): void {
  }

  search(event) {
    this.mensajeHijo.emit(this.searchString);
  }

  showMenu() {
    if (document.getElementById('nav-menu').classList.contains('nav-open')) {
      document.getElementById('nav-menu').classList.replace('nav-open', 'nav-close');
    } else {
      document.getElementById('nav-menu').classList.replace('nav-close', 'nav-open');
    }
  }

}
