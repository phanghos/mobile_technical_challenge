import React, { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';

type SearchBarContainerProps = {
  placeholder?: string;
  onSearch: (searchQuery: string) => void;
};

export const SearchBarContainer = ({
  placeholder,
  onSearch,
}: SearchBarContainerProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeText = (text: string) => setSearchQuery(text.trimStart());

  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery]);

  return (
    <Searchbar
      placeholder={placeholder ?? 'Search...'}
      onChangeText={onChangeText}
      value={searchQuery}
      style={{ margin: 16, backgroundColor: '#fff' }}
    />
  );
};
