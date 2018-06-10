import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public compteur: number = 0; // Initialisation de la variable compteur (number) à 0

  constructor() { }

  ngOnInit() {
  }

  // Fonction qui sera éxécuter lorsque l'élément enfant émettra un event `changeCmpt`.
  // La valeur numérique du compteur en paramètre
  majCmpt(value: number) {
    // Mise à jour de la variable `compteur` depuis la nouvelle valeur passée en paramètre (value) depuis le composant enfant
    this.compteur = value;
  }

}
