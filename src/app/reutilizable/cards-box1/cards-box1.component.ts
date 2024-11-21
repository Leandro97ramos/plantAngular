import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-box1',
  standalone: true,
  imports: [],
  templateUrl: './cards-box1.component.html',
  styleUrl: './cards-box1.component.css'
})
export class CardsBox1Component {

  @Input() title!: string;
  @Input() number!: number;
  @Input() alertType!: string;
}
