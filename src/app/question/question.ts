import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './question.html',
  styleUrls: ['./question.css']
})
export class Question {
  @Input() text: string = '';
  @Output() querySelected = new EventEmitter<string>();

  handleClick() {
    console.log('Clicked query:', this.text);
    this.querySelected.emit(this.text);
  }
}
