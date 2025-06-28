import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Boat } from "./boat/boat";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Boat],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'wt2_fm4z3b';
}
