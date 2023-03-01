import React from 'react';
import { useLayout, useTheme } from '../../../store';
import { Container } from '../../utilities';
import Searchbar from './Searchbar';

const SearchBox: React.FC = (): JSX.Element | null => {
  const { isSearchBarOpen: isOpen } = useLayout();
  const { windowWidth: width } = useTheme();

  return isOpen && width < 768 ? (
    <Container className="flex items-center justify-center border-b border-skin-base bg-skin-base px-2">
      <div className="flex min-h-16 items-center justify-center gap-2 px-2">
        <Searchbar />
        {/* {CloseSearch} */}
      </div>
    </Container>
  ) : null;
};

export default SearchBox;
