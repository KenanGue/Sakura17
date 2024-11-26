import { Component } from '@angular/core';

@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [],
  template: `
  <section>
    <h2>OUR MENU</h2>
    <div>
        <div class="menu">
            <img class="table-img" src="./../../../assets/img/R1.png">
            <table>
                <tr>
                    <td class="text1-menu">Tonkotsu Ramen</td>
                </tr>
                <tr class="text2-menu">
                    <td>CHICKEN</td>
                    <td>11.95€</td>
                </tr>
                <tr class="text2-menu">
                    <td>BEEF</td>
                    <td>12.95€</td>
                </tr>
                <tr class="text2-menu">
                    <td>SHRIMP</td>
                    <td>13.95€</td>
                </tr>
            </table>
        </div>
        <div class="menu-reverse">
            <img class="table-img" src="./../../../assets/img/R2.png">
            <table>
                <tr>
                    <td class="text1-menu">Spicy Miso Ramen</td>
                </tr>
                <tr class="text2-menu">
                    <td>CHICKEN</td>
                    <td>11.95€</td>
                </tr>
                <tr class="text2-menu">
                    <td>BEEF</td>
                    <td>12.95€</td>
                </tr>
                <tr class="text2-menu">
                    <td>SHRIMP</td>
                    <td>13.95€</td>
                </tr>
            </table>
        </div>
        <div class="menu">
            <img class="table-img" src="./../../../assets/img/R3.png">
            <table>
                <tr>
                    <td class="text1-menu">Shio Ramen</td>
                </tr>
                <tr class="text2-menu">
                    <td>CHICKEN</td>
                    <td>11.95€</td>
                </tr>
                <tr class="text2-menu">
                    <td>BEEF</td>
                    <td>12.95€</td>
                </tr>
                <tr class="text2-menu">
                    <td>SHRIMP</td>
                    <td>13.95€</td>
                </tr>
            </table>
        </div>
    </div>
</section>
  `,
  styleUrl: './our-menu.component.scss'
})
export class OurMenuComponent {

}
