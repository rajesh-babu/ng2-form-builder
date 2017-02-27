import { Component, Injectable,  ViewChild } from '@angular/core';
import { ModalService} from '../../services/Modalservice';

@Component({
  selector: 'components-modal',
  templateUrl: './components.modal.html'
})

export class ComponentsModalComponent {
  public constructor( private modalService:ModalService) {
  }
  @ViewChild('lgModal') lgModal;
  init:Boolean = false;
   ngAfterViewChecked() {
    if(!this.init){
      this.lgModal.show();
      this.init = true;
      this.modalService.modalOpened(true);
    }
   }
   closeHandler(evt:Event){
    this.lgModal.hide();
    evt.currentTarget["parentElement"].parentElement.parentElement.parentElement.remove();
    this.modalService.modalOpened(false);
   }

}
