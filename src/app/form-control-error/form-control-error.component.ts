import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
@Component({
  selector: 'app-form-control-error',
  templateUrl: './form-control-error.component.html',
  styleUrls: ['./form-control-error.component.scss']
})
export class FormControlErrorComponent implements OnInit {

  @Input()
  control: FormControl;

  constructor() { }

  ngOnInit() {
  }

  get errorMessage() {

    if(this.control !==null){
      for(const error in this.control.errors) {
        if(this.control.errors.required || this.control.invalid || this.control.dirty) {

          return this.getValidatorErrorMessage(this.getName(this.control), error, this.control.errors[error]);
          
        }

      }
    }

    return null;

  }
  getValidatorErrorMessage(controlName: string, validatorName: string, validatorValue?: any) {
    const config= {
      required: `${_.startCase(controlName)} is required`
    }
 return config[validatorName];
  }
  private getName(control: AbstractControl): string | null {

    const group = <FormGroup>control.parent;
    if(!group) {
      return null;
    }
    let name: string;

    Object.keys(group.controls).forEach(key =>{
      const childControl = group.get(key);
      if(childControl!==  control) {
        return;
      }
      
    name =key;
    })

    return name;

  }

}
