'use client';

import { useState, useEffect } from 'react';

type FilterWindowProps = {
  selectedSpecies: string[];
  setSelectedSpecies: (species: string[]) => void;
  onApply: (species: string[]) => void;
  onReset: () => void;
};

const FilterWindow: React.FC<FilterWindowProps> = ({
  selectedSpecies,
  setSelectedSpecies,
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
  const [isResetPressed, setIsResetPressed] = useState(false);
  const [isApplyPressed, setIsApplyPressed] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setSelectedSpecies(localSelection);
  }, [localSelection, setSelectedSpecies]);

  const toggleSelection = (species: string) => {
    if (species === 'Any Animal') {
      setLocalSelection(['Any Animal']);
    } else {
      setLocalSelection((prev) => {
        if (prev.includes('Any Animal')) {
          return [species];
        }
        return prev.includes(species)
          ? prev.filter((s) => s !== species)
          : [...prev, species];
      });
    }
  };

  return (
    <div className="relative font-inter font-medium text-[14px] leading-[16.94px] tracking-tight">
      <button
        className={`w-[122px] h-[40px] rounded-xl border border-[#E0E8F2] transition-all ${isFilterOpen ? 'bg-[#E8EBF0]' : 'bg-white shadow-md'}`}
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        Pets
      </button>
      {isFilterOpen && (
        <div className="absolute top-full mt-2 left-0 w-[334px] h-[174px] bg-white border border-[#D8E1EA] shadow-md rounded-xl p-4 flex flex-col justify-between">
          <div className="grid grid-cols-3 gap-2">
            {speciesOptions.map((species) => (
              <button
                key={species}
                className={`w-full h-[29px] rounded-full py-1 border border-[#E0E8F2] transition-all ${
                  localSelection.includes(species)
                    ? 'bg-[#1369D9] text-white'
                    : 'bg-white text-black'
                } active:bg-gray-200`}
                onClick={() => toggleSelection(species)}
              >
                {species}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button
              className="w-[145px] h-[40px] border border-[#E0E8F2] rounded-[12px] bg-white text-black shadow-sm hover:shadow-md transition-all active:scale-95"
              onClick={() => {
                setIsResetPressed(true);
                setTimeout(() => setIsResetPressed(false), 200);
                setLocalSelection([]);
                onReset();
              }}
            >
              Reset
            </button>
            <button
              className="w-[145px] h-[40px] bg-gradient-to-b from-[#3A8DFF] to-[#1369D9] text-white rounded-[12px] shadow-md hover:shadow-lg transition-all active:scale-95"
              onClick={() => {
                setIsApplyPressed(true);
                setTimeout(() => setIsApplyPressed(false), 200);
                onApply(localSelection);
              }}
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterWindow;
