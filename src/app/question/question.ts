import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.html',
  styleUrl: './question.css'
})
export class Question {
  @Input() text: string = ''; // question text

  handleClick() {
    console.log(this.text); // print question text on click
  }
}
