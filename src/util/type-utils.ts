export type Investment = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

export type UserInputType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userInput: Investment;
};

export type ResultType = {
  input: Investment;
};

export type Result = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
};
