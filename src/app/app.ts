import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Questionnaire } from './components/questionnaire/questionnaire';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Questionnaire],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'questions-app';
}
