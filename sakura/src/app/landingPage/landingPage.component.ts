import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [RouterOutlet],
    template: '<h1>Hallo Welt</h1>',
    styles: ['h1 {color: green;}']
})
export class landingPageComponent {

}