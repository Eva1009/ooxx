import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',

  // `必須要和template同一行
  template: `
  <button nbButton *ngIf="!value">{{ value }}</button>
  <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
  <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>`,
  styleUrls: ['./square.component.scss']
})
 
export class SquareComponent  {


//?:還沒輸入的時候沒有值
  @Input() value?: 'X' | 'O';

  

}
