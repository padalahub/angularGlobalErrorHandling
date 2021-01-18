import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { Patterns } from '../common/patterns';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent extends BaseComponent implements OnInit {
  title = 'Personal Form';
  formSubmitted = false;
  personalForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router:Router ) {
    super();
   this.createForm();
  }

  ngOnInit(){
  
  }
  createForm() {
    this.personalForm = this.formBuilder.group({
      lastName: ['', [Validators.required,Validators.pattern(Patterns.namePattern)]],
      firstName: ['', [Validators.required,Validators.pattern(Patterns.namePattern)]],
      mi: ['', [Validators.maxLength(1),Validators.pattern(Patterns.namePattern)]],
      suffix: ['',Validators.pattern(Patterns.namePattern)],     
      address: this.formBuilder.group({
        addressLine1: ['', [Validators.required,Validators.pattern(Patterns.alphaNumericPattern)]],
        addressLine2: ['', [Validators.required,Validators.pattern(Patterns.alphaNumericPattern)]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zipCode: ['', [Validators.required]]
      }),
      gender: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailId: ['', [Validators.required,Validators.pattern(Patterns.emailPattern)]],
       });
  }
  displayFieldStyle(formGroup: FormGroup, field: string) {
    if(formGroup && formGroup.get(field)!==null) {
      return {
        'has-danger':
        (formGroup.get(field).touched || formGroup.get(field).dirty) &&
        (formGroup.get(field).hasError('required') || formGroup.get(field).invalid) ,
        'has-success': formGroup.get(field).dirty && formGroup.get(field).valid

        };
      } else {
        return 'has-danger';
      }
    }
    submit() {
     this.markFormGroupTouched(this.personalForm);
      if(this.personalForm.valid) {        
      this.formSubmitted = true;
      this.router.navigate(['/success']);
      } 

    }
    reset(){
      this.formSubmitted = false;
      this.personalForm.reset();
    }

}

