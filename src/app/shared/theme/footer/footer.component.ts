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
    console.log(document.getElementById(id).classList.contains('open'));
    if (document.getElementById(id).classList.contains('open')) {
      document.getElementById(id).classList.remove('open');
    } else {
      document.getElementById(id).classList.add('open');
    }
  }

}
