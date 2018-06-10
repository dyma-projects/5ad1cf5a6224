import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  // Ajout d'un ViewChild qui me permettra d'accéder à l'élément (ainsi qu'à ses propriétés), passé en paramètre
  @ViewChild('myInputText') public el: ElementRef;
  public valeur: string;

  constructor() { }

  ngOnInit() {
  }

  // Méthode qui sera invoquée à chaque modification du contenu de l'Input HTML
  onInput() {
    // Mise à jour de la variable `valeur` depuis la propriété `value` de l'ElementRef `myInputText` accessible grace au décorateur @ViewChild
    this.valeur = this.el.nativeElement.value;
  }

}
