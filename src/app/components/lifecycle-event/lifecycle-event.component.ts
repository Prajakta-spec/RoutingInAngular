import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-lifecycle-event',
  imports: [],
  templateUrl: './lifecycle-event.component.html',
  styleUrl: './lifecycle-event.component.css'
})
export class LifecycleEventComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{   

  firstName: string;
//basically lifecycle events are the functions which gets automatically call based on their condition
  constructor() {
    console.log("Constructor");
    this.firstName = " ";
  }
//it can be explained more in resuable code ngOnChanges
//	Runs every time the component's inputs have changed.

//ngOnChanges mostly used in reusable changes
//it get triggers when our previously declare variable value get change
ngOnChanges(changes: SimpleChanges): void {
  console.log("ngDoChanges");
}

//it get call when component get loads automatically it mainly use for api calls
ngOnInit(): void {
  console.log("ngOnInit");
}

//when it founds change detection in component then ngDoCheck get's called 
ngDoCheck(): void {
  console.log("ngDoCheck");
}

/*when we integrate external content or external view image or video then ngAfterContentInit and ngAfterContentChecked get's called after 
intialcation and checking of it*/
ngAfterContentInit(): void {
  console.log("ngAfterContentInit")
}

ngAfterContentChecked(): void {
  console.log("ngAfterContentChecked");
}

//after view intialization in component this function get triggers in component templet or child templet
ngAfterViewInit(): void {
  console.log("ngAfterViewInit");
}

ngAfterViewChecked(): void {
  console.log("ngAfterViewChecked");
}

/*Runs once before the component is destroyed. i.e. when we switch from one component to another component then this
function triggers automatically it will be visible on console clicking not here

it is normally use to unsubsribe api calls which we do subscribe
*/ 

ngOnDestroy(): void {
  console.log("ngOnDestroy");
}

/*mostly we use ngOnInit, ngOnDestroy*/ 

}
