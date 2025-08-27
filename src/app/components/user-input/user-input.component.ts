import { Component, EventEmitter, NgModule, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../../models/investment.models';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal<number>(0);
  annualInvestment = signal<number>(0);
  expectedReturn = signal<number>(5);
  investmentDuration = signal<number>(10); 

  @Output() calculate = new EventEmitter<InvestmentInput>();
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
  }

  onChangeInput() {
    this.updateInput.emit();
  }
}
