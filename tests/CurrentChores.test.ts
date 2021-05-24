// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
// import '@testing-library/jest-dom/extend-expect'

// import { render, fireEvent } from '@testing-library/svelte'

// import Comp from '../src/App.svelte'

// test('shows proper heading when rendered', () => {
//   const { getByText } = render(Comp, {})

//   expect(getByText('Huistakengenerator 2000')).toBeInTheDocument()
// })

import { sum } from '../src/jest';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});