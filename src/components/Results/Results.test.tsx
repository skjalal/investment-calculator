import { render, screen, within } from '@testing-library/react';
import Results from './Results';
import type { Investment } from '../../util/type-utils';

describe('Result Component', () => {
  test('render result table', async () => {
    const input: Investment = {
      initialInvestment: 10,
      annualInvestment: 100,
      expectedReturn: 110,
      duration: 1,
    };
    render(<Results input={input} />);

    const table = await screen.findByRole('table');
    const tbody = within(table).getAllByRole('rowgroup')[1];
    const rows = within(tbody).getAllByRole('row');
    expect(rows).toHaveLength(1);
  });
});
