import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  // Input pour récupérer une donnée issue du composant parent (donnée `compteur`).
  // Affectation de la variable `cmpt` à partir de cette donnée ainsi récupérée
  @Input('cmptToEnfant') public cmpt: number = 0;

  // Output pour permettre la propagation d'un évènement à chaque modification du compteur.
  // le composant parent écoutera cet évènement pour modifier sa valeur locale `compteur`
  @Output() public changeCmpt = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.cmpt++; // Incrémentation de la variable cmpt
    this.changeCmpt.emit(this.cmpt); // émission de l'évènement `changeCmpt` avec la valeur du compteur en paramètre
  }
  decrement() {
    this.cmpt--; // Décrémentation de la variable cmpt
    this.changeCmpt.emit(this.cmpt); // émission de l'évènement `changeCmpt` avec la valeur du compteur en paramètre
  }
}
