import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { SeriesComponent } from './components/series/series.component';
import { LibrairyComponent } from './components/librairy/librairy.component';

export const routes: Routes = [
    {path : '', component: CounterComponent},
    {path : 'series', component: SeriesComponent},
    {path : 'librairy', component: LibrairyComponent}
];
