import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { AlertComponent } from '../../resusableComponent/alert/alert.component';

@Component({
  selector: 'app-view-child',
  imports: [AlertComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent implements AfterViewInit{

  

  @ViewChild('txt') textBox?:ElementRef;

  @ViewChild(AlertComponent) alertComp?: AlertComponent;

  @ViewChild('mydiv') divRef?: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.textBox?.nativeElement)
    const value = this.textBox?.nativeElement.value;
    debugger;

    console.log(this.alertComp)
    const alertMode  = this.alertComp?.alertMode;

    console.log(this.divRef?.nativeElement)
  }
}
