import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {DragulaModule} from 'ng2-dragula/ng2-dragula';
import { AppComponent } from './app.component';
import { WidgetComponent} from './components/widget.components';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule
  ],
  providers: [],
  entryComponents: [ WidgetComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
