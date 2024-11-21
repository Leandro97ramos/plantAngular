import { Component } from '@angular/core';
import { CardsBox1Component } from '../reutilizable/cards-box1/cards-box1.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CardsBox2Component } from "../reutilizable/cards-box2/cards-box2.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardsBox1Component, CommonModule, HttpClientModule, CardsBox2Component],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cards: { title: string; number: number; alertType: string }[] = [];




  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.cards = [
      { title: 'Lectura OK', number: 10, alertType: 'lecturaOk' },
      { title: 'Alertas Media', number: 5, alertType: 'alertMedia' },
      { title: 'Alertas Rojas', number: 3, alertType: 'alertRoja' },
      { title: 'Sensores Desconectados', number: 2, alertType: 'sensorD' }
    ];
  }
}
