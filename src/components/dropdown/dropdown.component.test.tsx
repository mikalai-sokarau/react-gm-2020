import Dropdown from '@app/components/dropdown/dropdown.component';
import sortOptions from '@app/components/preferenceBar/preferenceBar.model';
import React from 'react';
import renderer from 'react-test-renderer';


describe('Dropdown', () => {
  it('Dropdown component matches snapshot', () => {
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
