import { Component } from '@angular/core';
import { IQuestion } from '../../models/question.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-questionnaire',
  imports: [NgClass],
  templateUrl: './questionnaire.html',
  styleUrl: './questionnaire.scss'
})
export class Questionnaire {

  public question: IQuestion = {
    text: '¿Cual es la capital de España?',
    
    answerOptions: [
      'Zaragoza', 'Barcelona','Madrid','Sevilla'
    ],
    correctAnswerIndex:2
  };

  public answerChoosed: boolean = false;
  public answerCorred: boolean = false;

  checkAnswer(index:number){
    this.answerCorred = (this.question.correctAnswerIndex === index);
    this.answerChoosed = true;

    console.log(this.answerCorred);
  }

}
