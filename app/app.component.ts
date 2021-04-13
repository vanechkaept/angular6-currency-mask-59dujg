import { Component, EventEmitter } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, FormsModule, NgControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
    form: FormGroup;
   constructor(fb:FormBuilder) {
    this.form=fb.group({
      currency:['']
    })
  this.onChanges();
   }


 onChanges(): void {
    this.form.valueChanges.subscribe(() => {
      console.log(this.form.value)
    });
 }
}