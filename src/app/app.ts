import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Faq } from './components/faq/faq';

@Component({
  selector: 'app-root',
  imports: [Navbar, Faq],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'uprime';
}
