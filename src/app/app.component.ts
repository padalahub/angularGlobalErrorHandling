import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularWorkspace';
  personalForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
   this.createForm();

  }

  createForm() {
    this.personalForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required]
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
  }

