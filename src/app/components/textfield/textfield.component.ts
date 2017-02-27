import { Component, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { ComponentsModalComponent } from "../modal/components.modal";
import { ModalService} from '../../services/Modalservice';
@Component({
  selector: '[widget]',
  templateUrl:'./textfield.component.html',
  styleUrls: ['./textfield.component.css']
})

export class TextfieldComponent {

  enbleDrag:string = ' enable';

  constructor(private componentFactoryResolver:ComponentFactoryResolver, private modalService:ModalService) {
    modalService.modal$.subscribe((isOpened) => {
      if(!isOpened){
        this.enbleDrag = ' enable';
      }
    });
  }

  closeHandler(evt:Event){
    evt.currentTarget["parentElement"].parentElement.remove();
  }
  @ViewChild('widgetContainer', {read: ViewContainerRef}) widgetContainer;
  openDialog(evt:Event){
      const factory = this.componentFactoryResolver.resolveComponentFactory(ComponentsModalComponent);
      let component = this.widgetContainer.createComponent(factory);
      this.enbleDrag = ' disable';
    }
}
