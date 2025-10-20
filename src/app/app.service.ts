import { Injectable } from '@angular/core';

export interface AppData {
  models: string[];
  themes: string[];
  exampleQueries: string[];
}

export type DBStatus = 'connected' | 'disconnected' | 'issue';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  getAppData(): AppData {
    return {
      models: [
        'openai/gpt-oss-20b:free',
        'qwen/qwen3-coder:free',
        'deepseek/deepseek-chat-v3.1:free'
      ],
      themes: ['Light', 'Dark'],
      exampleQueries: [
        'Show me all users',
        'What are the top 10 best-selling books',
        'List all active sessions'
      ]
    };
  }


  /**
   * Dummy function to simulate fetching DB status from backend
   */
  fetchDatabaseStatus(): DBStatus {
    // Simulate a random status for demonstration
    const statuses: DBStatus[] = ['connected', 'disconnected', 'issue'];
    const index = Math.floor(Math.random() * statuses.length);
    return statuses[index];
  }

}
