import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showItems(id) {
    if (document.getElementById(id).classList.contains('open')) {
      document.getElementById(id).classList.remove('open');
    } else {
      document.getElementById(id).classList.add('open');
    }
  }

}
