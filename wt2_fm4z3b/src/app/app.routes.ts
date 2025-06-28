import { RouterModule, Routes } from '@angular/router';
import { Boat } from './boat/boat';
import { Boatform } from './boatform/boatform';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '', 
        component: Boat
    },
    {
        path: 'boat-entry', 
        component: Boatform
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
