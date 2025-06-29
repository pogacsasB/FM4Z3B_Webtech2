import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Boatcomp } from './boatcomp/boatcomp';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Boatcomp, FormsModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'frontend';
}
