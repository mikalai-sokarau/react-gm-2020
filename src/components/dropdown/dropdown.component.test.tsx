import React from 'react';
import renderer from 'react-test-renderer';

import Dropdown from '@app/components/Dropdown/Dropdown.component';
import sortOptions from '@app/components/preferenceBar/preferenceBar.model';

describe('Logo', () => {
  it('Correctly renders Logo component', () => {
    const dropdown = renderer
      .create(
        <Dropdown
          title="dropdown test"
          options={sortOptions}
          onSortOptionClick={() => 'clicked'}
        />,
      )
      .toJSON();

    expect(dropdown).toMatchSnapshot();
  });
});
