'use client';

import React from 'react';
import SpeciesIcon from './SpeciesIcon';

type SpeciesButtonProps = {
  species: string;
  isSelected: boolean;
  onClick: (species: string) => void;
};

const SpeciesButton: React.FC<SpeciesButtonProps> = ({
  species,
  isSelected,
  onClick,
}) => {
  return (
    <button
      className={`px-3 h-[29px] justify-start rounded-full py-1 border border-[#E0E8F2] flex items-center gap-2 transition-all ${
        isSelected ? 'bg-[#1369D9] text-white' : 'bg-white text-black'
      } active:bg-gray-200`}
      onClick={() => onClick(species)}
    >
      {species !== 'Any Animal' && (
        <SpeciesIcon
          species={species}
          fillColor={isSelected ? '#ffffff' : '#838993'}
        />
      )}
      {species}
    </button>
  );
};

export default SpeciesButton;
