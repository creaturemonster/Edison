import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { NavigationComponent } from './components/navigation/navigation';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true, // Make AppComponent standalone
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavigationComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'edison-papers-angular';
}
