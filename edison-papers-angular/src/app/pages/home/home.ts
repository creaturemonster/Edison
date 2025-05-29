import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngIf, *ngFor
import { RouterLink } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'; // NgbCarouselModule for v18 still exports all carousel components

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, // For *ngIf, *ngFor
    RouterLink,
    NgbCarouselModule // Import NgbCarouselModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  images = [
    {
      src: 'assets/images/Volume_1_Edison.jpg', // Using available image
      alt: 'Edison Volume 1',
      title: 'Volume 1: The Making of an Inventor',
      description: 'Explore the early years of Thomas A. Edison, from February 1847 to June 1873.',
      route: '/volume/1' // Link to Volume 1
    },
    {
      src: 'assets/images/Volume_2_Edison.jpg', // Using available image
      alt: 'Edison Volume 2',
      title: 'Volume 2: From Workshop to Laboratory',
      description: 'Discover Edison\'s transition from June 1873 to March 1876.',
      route: '/volume/2' // Link to Volume 2
    },
    {
      src: 'assets/images/Volume_3_Edison.jpg', // Using available image
      alt: 'Edison Volume 3',
      title: 'Volume 3: Menlo Park: The Early Years',
      description: 'The period from April 1876 to December 1877.',
      route: '/volume/3' // Link to Volume 3
    }
  ];
}
