import { Injectable } from "@angular/core";
import { Boat } from "../boat/boat";
import { BoatEntry } from "./boat.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoatDataService {

    boatSubject = new Subject<BoatEntry[]>();

    boatEntries: BoatEntry[] = [
        new BoatEntry(1, "Tantalus", 1500, "Evergreen"),
        new BoatEntry(2, "The Brutus", 2300, "Maersk"),
        new BoatEntry(3, "The Sea Wolf", 1800, "Hapag-Lloyd")
    ]

    onDelete(index: number) {
        this.boatEntries.splice(index, 1);
        this.boatSubject.next(this.boatEntries);
    }
}