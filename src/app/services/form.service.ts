import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  buildQuotationForm() {
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      businessName: ['', Validators.required],
      businessAddress: ['', Validators.required],
      phoneNumber: ['', [Validators.required, this.phoneNumber]],
      email: ['', [Validators.required, Validators.email]],
      items: this.formBuilder.array([this.createQuotationItem()])
    })
  }

  createQuotationItem() {
    return this.formBuilder.group({
      transformerSize: [null, Validators.required],
      quantity: [null, [Validators.required, this.number, this.notZeroNumber]],
    })
  }

  addQuotationItem(items: FormArray) {
    items.push(this.createQuotationItem())
  }

  deleteQuotationItem(items: FormArray, index: number) {
    items.removeAt(index);
  }

  hasError(FormGroup: FormGroup | AbstractControl, controlName: string, error: string) {
    if(FormGroup.get(controlName)?.errors) {
      let errors: ValidationErrors = FormGroup.get(controlName)?.errors!
      if(errors[error] && (FormGroup.get(controlName)?.dirty || FormGroup.get(controlName)?.touched)) {
        return true
      }
      return false
    }
    return false
  }

  phoneNumber(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^([0-9]{10}|\s*)$/.test(control.value)
    return valid ? null : { invalidPhoneNumber: { valid: false, value: control.value } };
  }

  number( control: AbstractControl ): { [key: string]: any } | null {
    const valid = /^(0|[1-9]([0-9]+)?)$/.test(control.value)
    return valid ? null : { invalidNumber: { valid: false, value: control.value } }
  }

  notZeroNumber( control: AbstractControl ): { [key: string]: any } | null {
    const valid = /^[1-9]\d*$/.test(control.value)
    return valid ? null : { invalidNotZeroNumber: { valid: false, value: control.value } }
  }

}
