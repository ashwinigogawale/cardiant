import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/api/order.service';
import { Router } from '@angular/router';
import { NgxChartsModule} from '@swimlane/ngx-charts';
import { mergeMap } from 'rxjs/operators';
import { DemoService } from '../../../services/api/demo.service';
import { invoicesubmenu } from '../../../models/Invoicesubmemnu';

@Component({
  selector: 'app-orderstat',
  templateUrl: './orderstat.component.html',
  styleUrls: ['./orderstat.component.scss']
})
export class OrderstatComponent implements OnInit {
  view: any[] = [460, 180];
  ordersByStatusData : any[] = [];
  ordersByPaymentData: any[] = [];
  ordersByCountryData: any[] = [];
  colorScheme = {
      domain: ['#007cbb', '#61c673', '#ff8e28', '#ef2e2e']
  };
  barColorScheme = {
      domain: ['#007cbb']
  }
  invoiceScheme = {
    domain: ['#007cbb','#ff8e28', '#ef2e2e']
}
  invoicedata: any[]=[];


  constructor(
    private router: Router,
        private orderService: OrderService,
        private mainService: DemoService,
  ) { }

  ngOnInit(): void {
    var me = this;
       // this.getPageData()
  }
  getPageData() {
    var me = this;

    /**
     * This is an Example of sequencing RxJS observable using mergeMap
     * (We are sequencing the API calls as the H2 DB used by the backend is failing to serve multiple request at once)
     */
    me.orderService.getOrderStats("status")
    .pipe(
        mergeMap(function(statusData) {
            me.ordersByStatusData = statusData.items;
            console.log("Received Orders By Status");
            return me.orderService.getOrderStats("paytype");
        }))
        .pipe(
            mergeMap( function(payTypeData) {
                me.ordersByPaymentData = payTypeData.items;
                console.log("Received Orders By Payment Type");
                console.log(me.ordersByPaymentData);
                return me.orderService.getOrderStats("country")
            }))
            .subscribe(function(countryData){
                me.ordersByCountryData = countryData.items;
                console.log(me.ordersByCountryData);
                console.log("Received Orders By Country");

            });
/*      .mergeMap(function(statusData) {
        me.ordersByStatusData = statusData.items;
        console.log("Received Orders By Status");
        return me.orderService.getOrderStats("paytype");
    }).mergeMap( function(payTypeData) {
        me.ordersByPaymentData = payTypeData.items;
        console.log("Received Orders By Payment Type");
        return me.orderService.getOrderStats("country")
    }).subscribe(function(countryData){
        me.ordersByCountryData = countryData.items;
        console.log("Received Orders By Country");
    }); */


    // invoice

    me.mainService.getallinvoicetype()

            .subscribe(function(invoiceData){
                me.invoicedata = invoiceData;
                console.log(me.invoicedata);
                console.log("Received Orders By invoice");
            });

    // this.mainService.getallinvoicetype().subscribe((data)=>{
    //   this.allinvoicesunmenu=data;
    //   console.log(this.allinvoicesunmenu);
    // })
}

}
