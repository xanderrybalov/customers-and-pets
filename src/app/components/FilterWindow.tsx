'use client';

import { useState } from 'react';
import SpeciesIcon from './SpeciesIcon';

type FilterWindowProps = {
  selectedSpecies: string[];
  onApply: (species: string[]) => void;
  onReset: () => void;
};

const FilterWindow: React.FC<FilterWindowProps> = ({
  selectedSpecies,
  onApply,
  onReset,
}) => {
  const speciesOptions: string[] = [
    'Any Animal',
    'Dogs',
    'Cats',
    'Birds',
    'Hamsters',
    'Rats',
  ];

  const [localSelection, setLocalSelection] =
    useState<string[]>(selectedSpecies);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleSelection = (species: string) => {
    setLocalSelection((prev) => {
      if (species === 'Any Animal') {
        return ['Any Animal'];
      }
      return prev.includes(species)
        ? prev.filter((s) => s !== species)
        : [...prev.filter((s) => s !== 'Any Animal'), species];
    });
  };

  return (
    <div className="relative font-inter font-medium text-[14px] leading-[16.94px] tracking-tight">
      <button
        className={`w-[122px] h-[40px] rounded-xl border border-[#E0E8F2] transition-all flex justify-around items-center ${
          isFilterOpen ? 'bg-[#E8EBF0]' : 'bg-white shadow-md'
        }`}
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        <span>Pets</span>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      <div
        className={`absolute top-full left-0 w-[334px] h-[174px] bg-white border border-[#D8E1EA] shadow-md rounded-xl flex flex-col justify-between transition-all duration-300 ${
          isFilterOpen
            ? 'opacity-100 scale-100 translate-y-2'
            : 'opacity-0 scale-95 translate-y-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-wrap gap-2 py-4 px-4">
          {speciesOptions.map((species) => (
            <button
              key={species}
              className={`px-3 h-[29px] justify-start rounded-full py-1 border border-[#E0E8F2] flex items-center gap-2 transition-all ${
                localSelection.includes(species)
                  ? 'bg-[#1369D9] text-white'
                  : 'bg-white text-black'
              } active:bg-gray-200`}
              onClick={() => toggleSelection(species)}
            >
              {species !== 'Any Animal' && (
                <SpeciesIcon
                  species={species}
                  fillColor={
                    localSelection.includes(species) ? '#ffffff' : '#838993'
                  }
                />
              )}
              {species}
            </button>
          ))}
        </div>

        <div className="flex justify-between px-4 py-4 border-t border-t-[#e0e8f3]">
          <button
            className="w-[145px] h-[40px] border border-[#E0E8F2] rounded-[12px] bg-white text-black shadow-sm hover:shadow-md transition-all active:scale-95"
            onClick={() => {
              setLocalSelection([]);
              onReset();
            }}
          >
            Reset
          </button>
          <button
            className="w-[145px] h-[40px] bg-gradient-to-b from-[#3A8DFF] to-[#1369D9] text-white rounded-[12px] shadow-md hover:shadow-lg transition-all active:scale-95"
            onClick={() => {
              onApply(localSelection);
              setIsFilterOpen(false);
            }}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterWindow;
