import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

var clicksOnMenu = false;

@Directive({
  selector: '[appMenuBtn]'
})
export class MenuBtnDirective {
  
  constructor(private elem : ElementRef, private rend : Renderer2) { }
  
  @HostListener('click', ['$event.target']) onClick($event){
    if(window.innerWidth <= 960){
      if (!clicksOnMenu) {
        this.rend.setStyle(document.getElementById('menuIcon'),'display','none');
        this.rend.setStyle(document.getElementById('mainMenu'),'display','block');
        clicksOnMenu = true;
      } else {
        this.rend.setStyle(document.getElementById('menuIcon'),'display','block');
        this.rend.setStyle(document.getElementById('mainMenu'),'display','none');
        clicksOnMenu = false;
      }
    }
  }
}
