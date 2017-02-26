import { Component, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { ComponentsModalComponent } from "../modal/components.modal"
@Component({
  selector: '[widget]',
  templateUrl:'./checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})

export class CheckBoxComponent {

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
