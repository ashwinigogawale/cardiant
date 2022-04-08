import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from 'src/app/services/excel.service';
import * as moment from 'moment';
import { InvoiceTypeRuleService } from 'src/app/services/api/invoice-type-rule.service';
@Component({
  selector: 'app-invoice-typerules',
  templateUrl: './invoice-typerules.component.html',
  styleUrls: ['./invoice-typerules.component.scss']
})
export class InvoiceTyperulesComponent implements OnInit {
  loading = false;
  public entryForm: FormGroup;
  rowSelected :any= {};
  givendata;
  modalAdd= false;
  modaledit=false;
  modaldelete=false;
  data1;
  constructor(
    private toastr: ToastrService,
    private excel: ExcelService,
    private _fb: FormBuilder,
    private mainservice:InvoiceTypeRuleService
  ) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.mainservice.getAll().subscribe((data) => {
      console.log(data);
      this.data1 = data;
      this.data1 = data.invoiceentity;

    });
  }
  goToAdd() {
    //this.rowSelected = row;
    this.modalAdd = true;
      }
      onExport() {
        this.excel.exportAsExcelFile(this.data1, 'user_',
          moment().format('YYYYMMDD_HHmmss'))
      }
      goToEdit(row){
        this.rowSelected = row;
            this.modaledit=true;
          }
          onUpdate(id) {
            this.modaledit = false;
            this.mainservice.update(id,this.rowSelected).subscribe(
              (data) => {
                console.log(data);
              },

            );
            if (id) {
              this.toastr.success('Updated successfully');
                    }

        }
        onDelete(row) {
          this.rowSelected = row;
           this.modaldelete=true;
        }

        delete(id)
        {
          this.modaldelete = false;
          console.log("in delete  "+id);
          this.mainservice.delete(id).subscribe(
            (data) => {
              console.log(data);
              this.ngOnInit();

            },
          );
          if (id) {
            this.toastr.success('Deleted successfully');
                }

        }
}
