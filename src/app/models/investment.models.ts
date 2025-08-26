export interface InvestmentResultItem {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
    } 

export interface InvestmentInput {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}