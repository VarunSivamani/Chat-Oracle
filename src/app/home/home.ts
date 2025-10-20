import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { AppService, DBStatus } from '../app.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {
  @Input() queryText: string = '';

  statusText: string = '';
  statusImage: string = '';

  queryResults: any[] = [];
  tableColumns: string[] = [];

  private statusSub!: Subscription;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.updateStatus();
    this.statusSub = interval(5 * 60 * 1000).subscribe(() => this.updateStatus());
  }

  ngOnDestroy(): void {
    this.statusSub?.unsubscribe();
  }

  updateStatus() {
    const status: DBStatus = this.appService.fetchDatabaseStatus();

    switch (status) {
      case 'connected':
        this.statusText = 'Database Connected';
        this.statusImage = 'assets/db_connected.png';
        break;
      case 'disconnected':
        this.statusText = 'Database Disconnected';
        this.statusImage = 'assets/db_disconnected.png';
        break;
      case 'issue':
        this.statusText = 'Database Issue';
        this.statusImage = 'assets/db_issue.png';
        break;
    }
  }

  executeQuery() {
    if (!this.queryText.trim()) {
      alert('Please enter a SQL query.');
      return;
    }

    console.log('Executing Query:', this.queryText);

    // Dummy results
    this.tableColumns = ['id', 'name', 'email'];
    this.queryResults = [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com' }
    ];
  }

  clearQuery() {
    this.queryText = '';
    this.queryResults = [];
    this.tableColumns = [];
  }
}
