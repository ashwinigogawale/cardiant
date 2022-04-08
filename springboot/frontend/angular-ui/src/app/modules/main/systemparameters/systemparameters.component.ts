import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-systemparameters',
  templateUrl: './systemparameters.component.html',
  styleUrls: ['./systemparameters.component.scss']
})
export class SystemparametersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isOverflowing(el) {
    return (el.offsetWidth < el.scrollWidth);
  }
}
