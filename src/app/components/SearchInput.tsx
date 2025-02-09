interface SearchInputProps {
  searchText: string;
  setSearchText: (value: string) => void;
}

export const SearchInput = ({ searchText, setSearchText }: SearchInputProps) => {
  return (
    <input
      type="text"
      placeholder="Search by ID, name, email or phone"
      className="border p-2 rounded-md w-[312px] h-[40px]"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};
