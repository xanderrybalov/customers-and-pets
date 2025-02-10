interface SearchInputProps {
  searchText: string;
  setSearchText: (value: string) => void;
}

export const SearchInput = ({
  searchText,
  setSearchText,
}: SearchInputProps) => {
  return (
    <div
      className="relative flex items-center border-2 rounded-md w-full h-[40px] focus-within:border-[#1369D9] 
    focus-within:ring-4 focus-within:ring-[#c3d9fa] transition-all 
    lg:w-[312px]"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-3 text-[#848A93] sm:left-2 sm:w-[16px] sm:h-[16px]"
      >
        <path
          d="M7.11523 0.895752C3.67638 0.895752 0.875 3.69713 0.875 7.13599C0.875 10.5748 3.67638 13.3762 7.11523 13.3762C8.2108 13.3762 9.24028 13.09 10.1365 12.5913C10.5117 13.6353 11.2909 14.7115 12.2031 15.6504C13.3114 16.7911 14.5683 17.75 15.875 17.75C16.3934 17.75 16.8943 17.5999 17.2471 17.2471C17.5999 16.8943 17.75 16.3934 17.75 15.875C17.75 14.5606 16.769 13.313 15.6211 12.2104C14.6741 11.3009 13.6005 10.5263 12.5791 10.1438C13.073 9.25086 13.3555 8.22587 13.3555 7.13599C13.3555 3.69713 10.5541 0.895752 7.11523 0.895752ZM7.11523 2.14575C9.87854 2.14575 12.1055 4.37268 12.1055 7.13599C12.1055 9.89929 9.87854 12.1262 7.11523 12.1262C4.35193 12.1262 2.125 9.89929 2.125 7.13599C2.125 4.37268 4.35193 2.14575 7.11523 2.14575ZM11.8259 11.2144C12.5661 11.4222 13.787 12.1823 14.7556 13.1125C15.7839 14.1002 16.5 15.3144 16.5 15.875C16.5 16.1691 16.4324 16.2942 16.3633 16.3633C16.2942 16.4324 16.1691 16.5 15.875 16.5C15.3067 16.5 14.0882 15.798 13.0991 14.78C12.1625 13.816 11.4054 12.5937 11.2119 11.8308C11.4305 11.6398 11.6357 11.4337 11.8259 11.2144Z"
          fill="currentColor"
        />
      </svg>
      <input
        type="text"
        placeholder="Search by ID, name, email or phone"
        className="w-full h-full pl-10 pr-3 rounded-md outline-none bg-white text-[#5A5F69] 
                   font-inter text-[14px] font-normal leading-[16.94px] tracking-tight sm:pl-8"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};
