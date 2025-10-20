import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Home, Sidebar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('chat-oracle');
  selectedQuery: string = '';

  // Handle event from Sidebar → Question
  onQuerySelected(query: string) {
    this.selectedQuery = query;
  }
}
