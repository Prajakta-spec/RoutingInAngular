import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  imports: [],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  //by creating object of router
  //it is dependacy injection
  constructor(private router: Router) {}

  navigateToAttribute () {

    this.router.navigateByUrl("attribute-directive")
  }
}
