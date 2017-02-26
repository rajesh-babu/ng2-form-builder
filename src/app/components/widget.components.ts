import { Component} from '@angular/core';
@Component({
  selector: '[widget]',
  template:
  `
<div class= {{className}} (mousemove)="hoverItem=true" (mouseleave)="hoverItem=false">
    <div *ngIf="hoverItem" class="hoverContent one">
      <i class="fa fa-cog" style="padding: 3px 4px 3px 4px;"></i>
    </div>
    <div *ngIf="hoverItem" class="hoverContent two">
      <i class="fa fa-close" style="padding: 3px 4px 3px 4px;"></i>
    </div>
    <label class='labelField'>Label Text</label><div><input type='text' class="form-control" placeholder='Enter the label text'/></div></div>
  `,
  styles:[`
    .labelField {
        font-family: "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 13px;
        line-height: 1.4;
        color: #222222;
        margin-bottom: 10px;
    }
    .form-control {
      margin-top: 5px;
      padding: 8px 12px;
      font-size: 15px;
      line-height: 1.4;
      color: #6f6f6f;
      background-color: #ffffff;
      border: 1px solid #cccccc;
      border-radius: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
      box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    }
    .droppedItem{
      margin: 20px 0px 20px 20px;
      width: 500px;
      position: relative;
     }
     .hoverContent{
       position: absolute;

       box-shadow: 0px 0px 5px grey;
     }
     .hoverContent.one{
       left: 155px;
     }

     .hoverContent i{
       font-size: 13px;
       background-color: #eaeaea;
       border: solid 1px #c2c2c2;
     }
     .hoverContent.two{
       left: 180px;
     }
     .hoverContent.two i{
       background-color: #f80000;
       color: white;
     }
    `],

})

export class WidgetComponent {
  id:number;


  constructor() {}

}
