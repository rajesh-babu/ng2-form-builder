import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DragulaModule} from 'ng2-dragula/ng2-dragula';
import { AppComponent } from './app.component';
import { TextfieldComponent} from './components/textfield/textfield.component';
import { CheckBoxComponent} from './components/checkbox/checkbox.component';
import { ModalModule  } from 'ng2-bootstrap';
import { ComponentsModalComponent } from './components/modal/components.modal';
import { ModalService} from './services/Modalservice';



@NgModule({
  declarations: [
    AppComponent,
    TextfieldComponent,
    CheckBoxComponent,
    ComponentsModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule,
    ModalModule.forRoot()
  ],
  providers: [ModalService],
  entryComponents: [ TextfieldComponent, CheckBoxComponent, ComponentsModalComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
