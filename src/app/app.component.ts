import { Component, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { TextfieldComponent} from './components/textfield/textfield.component';
import { CheckBoxComponent} from './components/checkbox/checkbox.component';
import { ModalService} from './services/Modalservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  drggedItem:Boolean = false;
  initDrag:Boolean = false;
  isModalOpened:Boolean = false;
  compPosition:number = 0;
   public constructor(private dragulaService:DragulaService, private componentFactoryResolver: ComponentFactoryResolver, private modalService:ModalService) {
     modalService.modal$.subscribe((isOpened) => {
       this.isModalOpened = isOpened;
     });
     dragulaService.setOptions('first-bag', {
            copy: true,
            copySortSource: true,
             revertOnSpill: true,
            accepts: function(el, target, source, sibling) {
              // To avoid draggin from right to left container
              return target.id !== 'fieldContainer';
            },
            // Disable the drag and drop if Modal is opened
            moves: function (el:any, container:any, handle:any):any {
              return !el.firstChild.classList.contains('disable');
            //return true;
          }

        })
      dragulaService.drop.subscribe((value) => {
          this.onDrop(value);
      });
      dragulaService.drag.subscribe((value) => {
          this.onDrag(value);
      });
   }

    private onDrag(value) {

      if(value[1].className.indexOf("field") === -1 ){
       value[1].style.display="none"
      }
     }
   //(0 - bagname, 1 - el, 2 - target, 3 - source, 4 - sibling)
    private onDrop(value) {

        if (value[2] == null) //dragged outside any of the bags
            return;

        if(value[3].className.indexOf("container") !== 0){
          value[1].outerHTML ="";

          this.drggedItem = true;
          if(!value[4]){ // If it's dropped as last element
            this.compPosition = document.getElementsByClassName("droppedItem").length;
          }else if(this.initDrag && value[4]){
            var clsName = value[4].getElementsByClassName("droppedItem")[0].className;
            var indexPos = clsName.indexOf("comp_");
            this.compPosition = Number(clsName.substring(indexPos+5));
            this.compPosition = this.compPosition--;
          }
          var selectedComp:any;
          switch(value[1].getAttribute("data-fieldname")){
            case "txtField":
                selectedComp = TextfieldComponent;
                break;
            case "checkboxField":
                selectedComp = CheckBoxComponent;
                break;
          }
          this.addComponent(selectedComp);
        }

    }
    @ViewChild('widgetContainer', {read: ViewContainerRef}) widgetContainer;
    addComponent(selectedComp:any){
      const factory = this.componentFactoryResolver.resolveComponentFactory(selectedComp);
      let component = this.widgetContainer.createComponent(factory, this.compPosition);
      component.instance.className = "droppedItem comp_"+ this.compPosition;

      this.initDrag = true;
    }
}
