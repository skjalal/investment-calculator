import type { Investment } from './investment';

export type UserInputType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userInput: Investment;
};

export type ResultType = {
  input: Investment;
};
