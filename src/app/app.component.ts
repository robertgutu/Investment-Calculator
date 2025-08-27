import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { UserInputComponent } from "./components/user-input/user-input.component";
import { InvestmentInput, InvestmentResultItem } from './models/investment.models';
import { ResultsComponent } from './components/results/results.component';
import { CalculateService } from './services/calculate.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, ResultsComponent],
})
export class AppComponent {

  isResultsAvailable = false;
  calculatedResults = signal<InvestmentResultItem[]>([]);

  // constructor(private calculate: CalculateService){}
  calculate = inject(CalculateService);

  onCalculate(data: InvestmentInput) {
    this.isResultsAvailable = false;
    console.log("Calculating... for: ", data);
    const results = this.calculate.calculateInvestmentResults(data);
    console.log("Results: ", results);
    this.isResultsAvailable = true;
    this.calculatedResults.set(results);
  } 

  onUpdateInput(){
    if (this.isResultsAvailable){
      this.isResultsAvailable = false;
      console.log("Form changed, hiding results...   ")
    }
  }
}
