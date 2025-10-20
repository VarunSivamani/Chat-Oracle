import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Question } from '../question/question';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule, CommonModule, Question],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar {
  @Output() querySelected = new EventEmitter<string>();

  models: string[] = [];
  selectedModel: string = '';

  themes: string[] = [];
  selectedTheme: string = '';

  exampleQueries: string[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    const data = this.appService.getAppData();
    this.models = data.models;
    this.themes = data.themes;
    this.exampleQueries = data.exampleQueries;

    this.selectedModel = this.models[0];
    this.selectedTheme = this.themes[0];
  }
}
