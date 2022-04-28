import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surebuilder',
  templateUrl: './surebuilder.component.html',
  styleUrls: ['./surebuilder.component.scss']
})
export class SurebuilderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goTproject(){
    // this.router.navigate(["../projectview"], { relativeTo: this.route,  });
     if (document.getElementById('Div1')) {

       if (document.getElementById('Div1').style.display == 'none') {
           document.getElementById('Div1').style.display = 'block';
           document.getElementById('Div2').style.display = 'none';


       }
       else {
           document.getElementById('Div1').style.display = 'none';
           document.getElementById('Div2').style.display = 'block';

       }
   }
   }
   goTorepo(){
     if (document.getElementById('Div2')) {

       if (document.getElementById('Div2').style.display == 'none') {
           document.getElementById('Div2').style.display = 'block';
           document.getElementById('Div1').style.display = 'none';



       }
       else {
           document.getElementById('Div2').style.display = 'none';
           document.getElementById('Div1').style.display = 'block';

       }
   }
   }
}
