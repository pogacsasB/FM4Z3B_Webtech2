import { Routes } from '@angular/router';
import { Boat } from './boat/boat';
import { Boatform } from './boatform/boatform';

export const routes: Routes = [
    {path:"", component: Boat},
    {path:"boat-entry", component: Boatform}
];
