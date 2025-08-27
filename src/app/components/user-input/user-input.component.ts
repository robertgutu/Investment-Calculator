import { Component, EventEmitter, NgModule, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../../models/investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestmentValue:number = 0;
  annualInvestmentValue:number = 0;
  expectedReturnValue:number = 5;
  investmentDurationValue:number = 10;

  initialInvestment = signal<number>(this.initialInvestmentValue);
  annualInvestment = signal<number>(this.annualInvestmentValue);
  expectedReturn = signal<number>(this.expectedReturnValue);
  investmentDuration = signal<number>(this.investmentDurationValue); 

  @Output() calculate = new EventEmitter<InvestmentInput>();
  // calculate = output<InvestmentInput>();
  @Output() updateInput = new EventEmitter<any>();

  onSubmit() {
    const inputData = {
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.investmentDuration()
    };
    console.log("Input Data:  ", inputData);
    this.calculate.emit(inputData);
    this.resetInputs();
  }

  onChangeInput() {
    this.updateInput.emit();
  }

  resetInputs() {
    this.initialInvestment.set(this.initialInvestmentValue);
    this.annualInvestment.set(this.annualInvestmentValue);
    this.expectedReturn.set(this.expectedReturnValue);  
    this.investmentDuration.set(this.investmentDurationValue);
    
  }
}
