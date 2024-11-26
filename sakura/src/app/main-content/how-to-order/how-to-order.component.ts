import { Component } from '@angular/core';

@Component({
  selector: 'app-how-to-order',
  standalone: true,
  imports: [],
  template:`<section>
  <h2>HOW TO ORDER</h2>
  <div>
  <div class="">
            <img src="./assets/img/noodle.png">
        <a>Pick your<br>noodle</a>
        </div>
  <div class="">
            <img src="./assets/img/broth.png">
        <a>Pick your<br>broth</a>
        </div>
  <div class="">
            <img src="./assets/img/egg.png">
        <a>Add your<br>toppings</a>
        </div>
  </div>
</section>
  `,
  styleUrl: './how-to-order.component.scss'
})
export class HowToOrderComponent {

}
