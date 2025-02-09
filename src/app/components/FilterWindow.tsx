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

  useEffect(() => {
    setSelectedSpecies(localSelection);
  }, [localSelection, setSelectedSpecies]);

  const toggleSelection = (species: string) => {
    if (species === 'Any Animal') {
      setLocalSelection([]);
    } else {
      setLocalSelection((prev) =>
        prev.includes(species)
          ? prev.filter((s) => s !== species)
          : [...prev, species]
      );
    }
  };

  return (
    <div className="absolute w-[334px] h-[174px] left-[418px] top-[385px] bg-white border border-[#D8E1EA] shadow-md rounded-xl p-4 flex flex-col justify-between">
      <div className="grid grid-cols-3 gap-2">
        {speciesOptions.map((species) => (
          <button
            key={species}
            className={`w-full h-[29px] rounded-full px-4 py-1 text-sm font-medium border border-[#E0E8F2] transition-all ${
              localSelection.includes(species)
                ? 'bg-[#1369D9] text-white'
                : 'bg-white text-black'
            }`}
            onClick={() => toggleSelection(species)}
          >
            {species}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="w-[70px] h-[40px] border border-[#E0E8F2] text-black rounded-md"
          onClick={() => {
            setLocalSelection([]);
            onReset();
          }}
        >
          Reset
        </button>
        <button
          className="w-[145px] h-[40px] bg-[#1369D9] text-white rounded-md"
          onClick={() => onApply(localSelection)}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterWindow;
