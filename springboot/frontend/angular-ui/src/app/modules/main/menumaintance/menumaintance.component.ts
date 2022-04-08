import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menumaintance',
  templateUrl: './menumaintance.component.html',
  styleUrls: ['./menumaintance.component.scss']
})
export class MenumaintanceComponent implements OnInit {
  loading = false;
  modalAdd= false;
  constructor() { }

  ngOnInit(): void {
  }
  goToAdd() {
    this.modalAdd=true;
    }
}
