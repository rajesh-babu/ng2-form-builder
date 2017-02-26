import { Component, Injectable,  ViewChild } from '@angular/core';
@Component({
  selector: 'components-modal',
  templateUrl: './components.modal.html'
})

export class ComponentsModalComponent {
  @ViewChild('lgModal') lgModal;
  init:Boolean = false;
   ngAfterViewChecked() {
    if(!this.init){
      this.lgModal.show();
      this.init = true;
    }
   }
   closeHandler(evt:Event){
    this.lgModal.hide();
    evt.currentTarget["parentElement"].parentElement.parentElement.parentElement.remove()
   }
}
