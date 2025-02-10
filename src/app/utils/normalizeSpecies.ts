export const normalizeSpecies = (str: string) => {
  return (
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase().replace(/s$/, '')
  );
};
