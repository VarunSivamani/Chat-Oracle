import { Component } from '@angular/core';
import { Question } from '../question/question';

@Component({
  selector: 'app-sidebar',
  imports: [Question],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

}
