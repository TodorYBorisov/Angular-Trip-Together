import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

const fadeInOut = trigger('fadeInOut', [
  state(
    'in',
    style({
      opacity: 1,
    })
  ),
  transition('void => *', [style({ opacity: 0 }), animate('1s ease-out')]),
  transition('* => void', [animate('1s ease-out'), style({ opacity: 0 })]),
]);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeInOut]

})
export class AboutComponent {
  isShown = false;

  fadeInOut(): void {
    this.isShown = !this.isShown;
  }

}
