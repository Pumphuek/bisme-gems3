import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-page-service-transformer-quotation',
  templateUrl: './page-service-transformer-quotation.component.html',
  styleUrls: ['./page-service-transformer-quotation.component.scss']
})
export class PageServiceTransformerQuotationComponent implements OnInit {

  public quotationForm!: FormGroup;
  state: string = 'progressing';
  header: string = 'ขอใบเสนอราคา'
  description: string = 'กรุณากรอกข้อมูลด้านล่างเพื่อให้ BiSME ส่งใบเสนอราคาให้กับคุณ'

  constructor(
    private apiService: ApiService,
    public formService: FormService,
  ) { }

  get items () {
    return this.quotationForm.get('items') as FormArray
  }

  ngOnInit(): void {
    this.quotationForm = this.formService.buildQuotationForm()
  }

  addItem() {
    if(this.items.controls.length >= 3 || this.quotationForm.invalid) {
      return
    }
    this.formService.addQuotationItem(this.quotationForm.get('items') as FormArray)
  }

  deleteItem(index: number) {
    this.formService.deleteQuotationItem(this.quotationForm.get('items') as FormArray, index)
  }

  onCheck() {
    if(this.quotationForm.invalid) {
      return
    }
    this.quotationForm.disable()
    this.header = 'ตรวจสอบข้อมูล'
    this.description = 'กรุณาตรวจสอบข้อมูล หากถูกต้องกด “ยืนยัน” เพื่อส่งข้อมูล หากต้องการแก้ไข กด “แก้ไข”'
    this.state = 'checking'
  }

  onEdit() {
    this.quotationForm.enable()
    this.header = 'ขอใบเสนอราคา'
    this.description = 'กรุณากรอกข้อมูลด้านล่างเพื่อให้ BiSME ส่งใบเสนอราคาให้กับคุณ'
    this.state = 'progressing'
  }

  onConfirm() {
    console.log(this.quotationForm.getRawValue())
  }

  onTest() {
    console.log('Trst')
    this.apiService.flowAccountLogin().subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

  addButtonClass() {
    if(this.quotationForm.valid) {
      return 'text-danger pointer'
    }
    return 'text-muted'
  }

  addButtonStyle() {
    if(this.items.controls.length > 1) {
      return {
        'position': 'relative', 
        'top': '-34px'
      }
    } else {
      return {
        'position': 'relative', 
        'top': '0'
      }
    }
  }

  itemStyle(index: number) {
    if(index > 1 && this.state == 'progressing') {
      return {
        'position': 'relative', 
        'top': '-34px'
      }
    } else {
      return {
        'position': 'relative', 
        'top': '0'
      }
    }
  }
}