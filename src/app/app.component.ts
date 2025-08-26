import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { UserInputComponent } from "./components/user-input/user-input.component";
import { InvestmentInput, InvestmentResultItem } from './models/investment.models';
import { ResultsComponent } from './components/results/results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, ResultsComponent],
})
export class AppComponent {

  isResultsAvailable = false;
  calculatedResults = signal<InvestmentResultItem[]>([]);

  calculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    // this.annualData.set(annualData);
    return annualData;
  }

  onCalculate(data: InvestmentInput) {
    this.isResultsAvailable = false;
    console.log("Calculating... for: ", data);
    const results = this.calculateInvestmentResults(data);
    console.log("Results: ", results);
    this.isResultsAvailable = true;
    this.calculatedResults.set(results);
  } 
}
