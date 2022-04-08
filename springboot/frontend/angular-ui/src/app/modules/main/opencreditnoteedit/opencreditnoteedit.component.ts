import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/services/api/demo.service';

@Component({
  selector: 'app-opencreditnoteedit',
  templateUrl: './opencreditnoteedit.component.html',
  styleUrls: ['./opencreditnoteedit.component.scss']
})
export class OpencreditnoteeditComponent implements OnInit {
  loading = false;
  constructor() { }

  ngOnInit(): void {
  }

}
