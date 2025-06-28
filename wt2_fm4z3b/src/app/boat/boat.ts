import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoatEntry } from '../shared/boat.model';
import { BoatDataService } from '../shared/boat-data.component';
import { Subject, Subscription } from "rxjs";

@Component({
  selector: 'app-boat',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './boat.html',
  styleUrl: './boat.css'
})
export class Boat implements OnInit {

  boatEntries: BoatEntry[] = [];
  boatSubscription = new Subscription();

  constructor(private boatDataService: BoatDataService) {}

  ngOnInit(): void {
    this.boatSubscription = this.boatDataService.boatSubject.subscribe(boatEntries => {
      this.boatEntries = this.boatEntries;
    })
    this.boatEntries = this.boatDataService.boatEntries;
  }

  ngOnDestroy(): void {
    this.boatSubscription.unsubscribe();
  }

  onDelete(index: number) {
    this.boatDataService.onDelete(index);
  }
}
