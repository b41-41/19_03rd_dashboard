import React, { ReactElement } from 'react';
import { FilterDropDown } from 'components/organisms';
import { ResetBtn } from 'components/atoms';
import { FILTER_CATEGORY } from 'consts/constants';
import FilterDropProps from '../FilterDropDown/FilterDropDown.type';

import * as S from './FilterBar.styled';

const FilterBar = ({
  checkedMethod,
  checkedMaterial,
  setCheckMethod,
  setCheckedMaterial,
}: FilterDropProps): ReactElement => {
  const handleResetFilter = () => {
    setCheckMethod([]);
    setCheckedMaterial([]);
  };
  return (
    <S.FilterBarWrap>
      {FILTER_CATEGORY &&
        FILTER_CATEGORY.map(
          (category: string): ReactElement => (
            <FilterDropDown
              key={category}
              category={category}
              checkedMethod={checkedMethod}
              checkedMaterial={checkedMaterial}
              setCheckMethod={setCheckMethod}
              setCheckedMaterial={setCheckedMaterial}
            />
          ),
        )}
      {(checkedMaterial.length > 0 || checkedMethod.length > 0) && (
        <ResetBtn onClick={handleResetFilter} />
      )}
    </S.FilterBarWrap>
  );
};

export default FilterBar;
