'use client';

import { useState } from 'react';
import SpeciesButton from './SpeciesButton';
import Button from './Button';

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
  const STATIC_SPECIES = ['Any Animal', 'Dog', 'Cat', 'Bird', 'Hamster', 'Rat'];

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
        className={`absolute top-full left-0 md:w-[334px] md:h-[174px] w-full h-auto bg-white border border-[#D8E1EA] shadow-md rounded-xl flex flex-col justify-between transition-all duration-300 ${
          isFilterOpen
            ? 'opacity-100 scale-100 translate-y-2'
            : 'opacity-0 scale-95 translate-y-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-wrap gap-2 py-4 px-4">
          {STATIC_SPECIES.map((species) => (
            <SpeciesButton
              key={species}
              species={species}
              isSelected={localSelection.includes(species)}
              onClick={toggleSelection}
            />
          ))}
        </div>

        <div className="flex justify-between px-4 py-4 border-t border-t-[#e0e8f3] gap-4">
          <Button
            label="Reset"
            variant="secondary"
            onClick={() => {
              setLocalSelection([]);
              onReset();
            }}
          />
          <Button
            label="Apply Filters"
            variant="primary"
            onClick={() => {
              onApply(localSelection);
              setIsFilterOpen(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterWindow;
