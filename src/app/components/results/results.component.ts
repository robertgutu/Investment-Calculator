import { Component, computed, inject, input, Input } from '@angular/core';
import { InvestmentResultItem } from '../../models/investment.model';
import { CurrencyPipe } from '@angular/common';
import { CalculateService } from '../../services/calculate.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  private calculateService = inject(CalculateService);

  // replace the getter with computed()
  // get results() {
  //   return this.calculateService.resultData;
  // }

  // used when wortking with signals
  results = computed(() => this.calculateService.resultData());
}
