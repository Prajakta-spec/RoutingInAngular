import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnChanges{

  @Input() message : string = '';
  @Input() alertType : string = '';

  alertMode:string = "DEmo DEmo";

  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    console.log('ngOnChanges')
  }
}
