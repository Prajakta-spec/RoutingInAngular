import { Component } from '@angular/core';
import { RouterOutlet,RouterLink} from '@angular/router';

@Component({
  selector: 'app-directive',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

}
