interface SearchInputProps {
  searchText: string;
  setSearchText: (value: string) => void;
}

export const SearchInput = ({
  searchText,
  setSearchText,
}: SearchInputProps) => {
  return (
    <input
      type="text"
      placeholder="Search by ID, name, email or phone"
      className="border-2 focus:border-[#1369D9] focus:ring-4 focus:ring-[#c3d9fa] outline-none p-2 rounded-md w-[312px] h-[40px] transition-all"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};
