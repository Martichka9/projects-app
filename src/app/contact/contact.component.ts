import { Component, OnInit, Renderer2 } from '@angular/core';
import { IMessage } from '../models/message.model';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  submitedForm : IMessage;
  msgForm: FormGroup;

  constructor(private fb : FormBuilder, private rend: Renderer2) { }
  ngOnInit() {
    this.msgForm = this.fb.group({
      sender_name: ['',[Validators.required,Validators.pattern(/[A-Z][a-z]+\s[A-Z][a-z]+/)]],
      sender_email: ['',[Validators.required,Validators.email]],
      message: ['',[Validators.required,Validators.minLength(50)]]
    });
    console.log(this.msgForm)
  }
  
  ngAfterViewChecked(){
    if(document.getElementById('container').offsetHeight+80 <= window.innerHeight){
      this.rend.setStyle(document.getElementById('footer'),'position','absolute');
      this.rend.setStyle(document.getElementById('footer'),'bottom','0');
    }
  }

  ngOnDestroy(){ 
    this.rend.setStyle(document.getElementById('footer'),'position','');
    this.rend.setStyle(document.getElementById('footer'),'bottom','');
  }

  send(form){
    //some real logic here
    this.ngOnInit();
  }
}
