import { Component } from '@angular/core';
import { SortPipe } from '../../utils/pipes/sort.pipe';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [SortPipe],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  series: string[] = [
    "Breaking Bad",
    "Game of Thrones",
    "Stranger Things",
    "The Witcher",
    "Westworld",
    "The Mandalorian",
    "The Boys",
    "Money Heist",
    "True Detective",
    "Dark"
  ];
  order: string = ''
  removeSerie(index : number){
    this.series.splice(index,1)
  }
}
