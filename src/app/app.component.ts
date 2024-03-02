import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarJeclComponent} from "./components/navbar-jecl/navbar-jecl.component";
import {of} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarJeclComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'ruleta-JECL';

  color1:string = 'rojo';
  color2:string='negro';
  numero:number=0;
  apuesta:string='a';
  ruleta:string='a';

  showDiv = false;


  obtenerIdPorReferencia(boton: HTMLButtonElement) {
    this.apuesta = boton.id;
    //console.log('ID del botón:', this.apuesta);

    switch (this.apuesta) {
      case "1":
        this.color2='rojo';
        break;
      case "3":
        this.color2='rojo';
        break;
      case "7":
        this.color2='rojo';
        break;
      case "9":
        this.color2='rojo';
        break;
      case "12":
        this.color2='rojo';
        break;
      case "15":
        this.color2='rojo';
        break;
      case "16":
        this.color2='rojo';
        break;
      case "20":
        this.color2='rojo';
        break;
      case "22":
        this.color2='rojo';
        break;
      case "24":
        this.color2='rojo';
        break;
      case "25":
        this.color2='rojo';
        break;
      case "26":
        this.color2='rojo';
        break;
      case "27":
        this.color2='rojo';
        break;
      case "31":
        this.color2='rojo';
        break;
      case "33":
        this.color2='rojo';
        break;
      case "34":
        this.color2='rojo';
        break;
      case "35":
        this.color2='rojo';
        break;
      default:
        this.color2='negro';
        break;

    }
  }



sonidoGirar() {
  const audio = new Audio();
  audio.src = "../assets/sounds/Ruleta.wav"
  audio.load();
  audio.play();

  setTimeout(() => {
    this.showDiv = true;
  }, 12000);
  this.numero = Math.floor(Math.random() * (35 - 1 + 1) + 1);

  this.ruleta=''+this.numero;

  switch (this.ruleta) {
    case "1":
      this.color1='rojo';
      break;
    case "3":
      this.color1='rojo';
      break;
    case "7":
      this.color1='rojo';
      break;
    case "9":
      this.color1='rojo';
      break;
    case "12":
      this.color1='rojo';
      break;
    case "15":
      this.color1='rojo';
      break;
    case "16":
      this.color1='rojo';
      break;
    case "20":
      this.color1='rojo';
      break;
    case "22":
      this.color1='rojo';
      break;
    case "24":
      this.color1='rojo';
      break;
    case "25":
      this.color1='rojo';
      break;
    case "26":
      this.color1='rojo';
      break;
    case "27":
      this.color1='rojo';
      break;
    case "31":
      this.color1='rojo';
      break;
    case "33":
      this.color1='rojo';
      break;
    case "34":
      this.color1='rojo';
      break;
    case "35":
      this.color1='rojo';
      break;
    default:
      this.color1='negro';
      break;

  }


  //console.log(this.ruleta);
  //console.log(this.color1);



 }

}
