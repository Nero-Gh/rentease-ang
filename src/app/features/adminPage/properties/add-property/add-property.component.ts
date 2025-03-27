import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [],
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.scss'
})
export class AddPropertyComponent {
 public  form!:FormGroup;
 private fb =inject(FormBuilder)


 constructor() {
   this.form = this.fb.group({
      name: [''],
      address: [''],
      price: [''],
      description:[''],
   })
 }

}
