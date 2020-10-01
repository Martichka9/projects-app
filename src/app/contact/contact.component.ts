import { Component, OnInit } from '@angular/core';
import { IMessage } from '../models/message.model';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  submitedForm: IMessage;
  msgForm: FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.msgForm = this.fb.group({
      senderName: ['', [Validators.required, Validators.pattern(/[A-Z][a-z]+\s[A-Z][a-z]+/)]],
      senderEmail: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(50)]]
    });
  }
  send(form){
    //some real logic here
    this.ngOnInit();
  }
}
