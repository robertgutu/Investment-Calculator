import { Component, Input } from '@angular/core';
import { InvestmentResultItem } from '../../models/investment.models';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  @Input() results: InvestmentResultItem[] = [];
}
