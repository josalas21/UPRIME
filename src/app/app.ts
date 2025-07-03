import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Faq } from './components/faq/faq';
import { Demand } from './components/demand/demand';
import demand from '../assets/demand.json';
import search from '../assets/search.json';
import chart from '../assets/chart.json';

@Component({
  selector: 'app-root',
  imports: [Navbar, Faq, Demand],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'uprime';
  demand = demand;
  search = search;
  chart = chart;
}
