import React from 'react';
import { render } from '@testing-library/react';

import PostTable from '../PostTable';

describe('<PostTable />', () => {
  it('should render a prop', () => {
    const { container } = render(
      <PostTable />
    );

    expect(container).toMatchSnapshot();
  })
});
