import React from 'react';
import type { UserInputType } from '../../util/type-utils.ts';
import './UserInput.css';

const UserInput: React.FC<UserInputType> = ({ onChange, userInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={userInput.initialInvestment}
            required
            onChange={onChange}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={userInput.annualInvestment}
            required
            onChange={onChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            value={userInput.expectedReturn}
            required
            onChange={onChange}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={userInput.duration}
            required
            onChange={onChange}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
