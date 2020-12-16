import {Component, EventEmitter,  Input,    OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'email-component',
  templateUrl: 'email.component.html'
})
export class EmailComponent implements OnInit {
  @Output() accion_emiter = new EventEmitter(); 
  @Input() email : Email = { email: '', password: ''}; 
  emailForm : FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.emailForm = this._buildFormEmail(this.email);
    this.emailForm.valueChanges.subscribe(f => {
      console.log(this.emailForm.invalid)
      const invalid = this.emailForm.invalid;
      this.accion_emiter.emit({
        ...f,
        invalid
      });
    })
  }
  
  _buildFormEmail(email: Email) {
    const form = {
      email: [{
          value    : email.email,
          disabled : false
      }],
      password: [{
          value: email.password,
          disabled: false,
      }, Validators.required]
    };

    return this._formBuilder.group(form);
  }

}

interface Email {
  email: string;
  password: string;
}