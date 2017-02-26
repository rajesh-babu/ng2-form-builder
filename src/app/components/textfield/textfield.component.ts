import { Component, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { ComponentsModalComponent } from "../modal/components.modal"
@Component({
  selector: '[widget]',
  templateUrl:'./textfield.component.html',
  styleUrls: ['./textfield.component.css']
})

export class TextfieldComponent {

  constructor(private componentFactoryResolver:ComponentFactoryResolver) {}

  closeHandler(evt:Event){
    evt.currentTarget["parentElement"].parentElement.remove();
  }
  @ViewChild('widgetContainer', {read: ViewContainerRef}) widgetContainer;
  openDialog(evt:Event){
      const factory = this.componentFactoryResolver.resolveComponentFactory(ComponentsModalComponent);
      let component = this.widgetContainer.createComponent(factory);
    }
}
