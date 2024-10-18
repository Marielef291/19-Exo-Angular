import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

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
  selector: 'app-pokemon',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, PokemonCardComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  
  pokeForm = new FormGroup ({
    nom : new FormControl(""),
    description : new FormControl(""),
    types : new FormControl([]),
    attacks : new FormArray([
      new FormGroup({
        nom : new FormControl(""),
        description : new FormControl(""),
        degat : new FormControl(0)
      })
    ]),
    zone : new FormGroup({
      nom : new FormControl(""),
      region : new FormControl("")
    })
  }
  )

  get attacks(){
    return this.pokeForm.controls.attacks;
  }

  addAttack() : void{
    this.attacks.push(
    new FormGroup({
      nom : new FormControl(""),
      description : new FormControl(""),
      degat : new FormControl(0)
    })
  )
  }

  onSubmit():void {
    console.log(this.pokeForm.value)
    this.pokeForm.reset()
  }

  types: string[] = [
    "Acier",
    "Combat",
    "Dragon",
    "Eau",
    "Électrik",
    "Feu",
    "Fée",
    "Glace",
    "Insecte",
    "Normal",
    "Plante",
    "Poison",
    "Psy",
    "Roche",
    "Sol",
    "Spectre",
    "Ténèbres",
    "Vol"
];
    
pokemonList: PokemonType[] = [
  {
    nom: "Dracaufeu",
    description: "Un Pokémon volant et cracheur de feu.",
    types: ["Feu", "Vol"],
    attacks: [
      {
        nom: "Lance-Flammes",
        description: "Projette des flammes intenses pour brûler l'ennemi.",
        degats: 90
      },
      {
        nom: "Danse Draco",
        description: "Augmente l'attaque et la vitesse.",
        degats: 0
      }
    ],
    zone: {
      nom: "Mont Braise",
      region: "Kanto"
    }
  },
  {
    nom: "Tortank",
    description: "Un Pokémon tortue doté de canons à eau sur son dos.",
    types: ["Eau"],
    attacks: [
      {
        nom: "Hydrocanon",
        description: "Lance un puissant jet d'eau pour submerger l'adversaire.",
        degats: 110
      },
      {
        nom: "Ébullition",
        description: "Inflige des brûlures tout en attaquant.",
        degats: 80
      }
    ],
    zone: {
      nom: "Lac Courage",
      region: "Sinnoh"
    }
  },
  {
    nom: "Gardevoir",
    description: "Un Pokémon capable de voir l'avenir et de protéger son dresseur.",
    types: ["Psy", "Fée"],
    attacks: [
      {
        nom: "Choc Psy",
        description: "Inflige des dégâts en utilisant la force mentale.",
        degats: 80
      },
      {
        nom: "Pouvoir Lunaire",
        description: "Utilise la lumière de la lune pour infliger de gros dégâts.",
        degats: 95
      }
    ],
    zone: {
      nom: "Forêt de Jade",
      region: "Hoenn"
    }
  }
];

  deletePokemon(pokemon: PokemonType) {
    const index = this.pokemonList.indexOf(pokemon)
    this.pokemonList.splice(index,1)
  }

}
