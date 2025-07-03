import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Faq } from './components/faq/faq';
import demand from '../assets/demand.json';
import search from '../assets/search.json';
import chart from '../assets/chart.json';
import { Lottie } from './components/lottie/lottie';

@Component({
  selector: 'app-root',
  imports: [Navbar, Faq, Lottie],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'uprime';
  demand = demand;
  search = search;
  chart = chart;
}
