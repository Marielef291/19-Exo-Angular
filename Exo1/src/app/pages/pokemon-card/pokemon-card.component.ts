import { Component, EventEmitter, Input, Output } from '@angular/core';

type attack = {
  nom : string
  description : string
  degats : number
}

type ZoneType = {
  nom : string
  region : string
}

type PokemonType = {
  nom : string
  description : string
  types : string[]
  attacks : attack []
  zone : ZoneType
}


@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input() pokemon!: PokemonType;

  @Output() deleteEvent = new EventEmitter<PokemonType>()

  deletePokemon(){
    this.deleteEvent.emit(this.pokemon)
  }
}
