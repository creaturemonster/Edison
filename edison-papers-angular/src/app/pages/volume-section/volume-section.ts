import { Component, OnInit } from '@angular/core'; // Removed @Input
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-volume-section',
  standalone: true, // Ensure it's standalone
  imports: [CommonModule],
  templateUrl: './volume-section.html',
  styleUrl: './volume-section.css'
})
export class VolumeSection implements OnInit { // Sticking to VolumeSection class name
  volumeId: string | null = null;
  sectionName: string | null = null;
  sectionContent: string = '<p><i>Loading content for this section...</i></p><p>This content will be replaced by actual data fetched based on the volume ID and section name. It demonstrates the use of <code>[innerHTML]</code>.</p>';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.volumeId = params.get('id');
      this.sectionName = params.get('section');
      // In a real application, you would fetch content based on volumeId and sectionName here.
      // For now, we use the placeholder.
      // You could update sectionContent here, e.g.:
      // this.sectionContent = `<p>Content for ${this.sectionName} in Volume ${this.volumeId} is not yet available.</p>`;
    });
  }
}
