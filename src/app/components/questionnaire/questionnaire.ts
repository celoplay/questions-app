import { Component } from '@angular/core';
import { IQuestion } from '../../models/question.model';

@Component({
  selector: 'app-questionnaire',
  imports: [],
  templateUrl: './questionnaire.html',
  styleUrl: './questionnaire.scss'
})
export class Questionnaire {
  question: IQuestion ={
    text: '¿Cual es la capital de España?',
    
    answerOptions: [
      'Zaragoza', 'Barcelona','Madrid','Sevilla'
    ],
    correctAnswerIndex:2
  };

  public answerChoosed: boolean = false;
  public answerCorred: boolean = false;

}
