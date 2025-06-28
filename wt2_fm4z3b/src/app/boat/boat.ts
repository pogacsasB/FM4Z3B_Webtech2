import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoatEntry } from '../shared/boat.model';
import { BoatDataService } from '../shared/boat-data.component';

@Component({
  selector: 'app-boat',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './boat.html',
  styleUrl: './boat.css'
})
export class Boat implements OnInit {

  boatEntries: BoatEntry[] = [];

  constructor(private boatDataService: BoatDataService) {}

  ngOnInit(): void {
    this.boatEntries = this.boatDataService.boatEntries;
  }

  onDelete(index: number) {
    this.boatDataService.onDelete(index);
    this.boatEntries = this.boatDataService.boatEntries;
  }
}
