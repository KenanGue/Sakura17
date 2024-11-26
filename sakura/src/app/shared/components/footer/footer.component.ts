import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template:`<section>
    <div class="logo">
      <img src="./../../../../assets/img/sakura_ramen_logo_and_text.png" alt="logo">
    </div>
    <div class="social-logos">
      <a href="">IMPRESSUM</a>
    </div>
  </section>`,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
