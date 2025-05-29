import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  title: string = "Edison Papers"; // Default title
  subtitle: string = "A Journey Through Innovation"; // Default subtitle
}
