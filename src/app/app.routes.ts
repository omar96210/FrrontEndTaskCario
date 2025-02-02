import { Routes } from '@angular/router';
import { ViewNumberComponent } from './modal/view-number/view-number.component';

export const routes: Routes = [


    { path: '', component: ViewNumberComponent  },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect to child1 by default

 
];

