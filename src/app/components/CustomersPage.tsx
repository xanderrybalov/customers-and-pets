'use client';

import { useState, useEffect } from 'react';
import { SearchInput } from './SearchInput';
import FilterWindow from './FilterWindow';

const fetchCustomers = async (searchText = '', species: string[] = []) => {
  let url = '/api/customers';
  const params = new URLSearchParams();
  if (searchText) params.append('searchText', searchText);
  if (species.length) params.append('species', species.join(','));
  url += `?${params.toString()}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.customers;
};

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchCustomers(searchText, selectedSpecies).then((data) => {
      setCustomers(data);
      setLoading(false);
    });
  }, [searchText, selectedSpecies]);

  return (
    <div className="w-screen h-screen flex justify-center items-start p-6 bg-white">
      <div className="w-[838px] h-[150px] mt-[54px] ml-[54px] bg-gray-100 p-4">
        <h1 className="text-[25px] font-inter font-semibold leading-[30.26px] tracking-tightest m-4">
          Customers and Pets
        </h1>

        {/* Search and Filter Section */}
        <div className="flex gap-2 ml-4 mt-2">
          <SearchInput searchText={searchText} setSearchText={setSearchText} />
          <div className="relative">
            <FilterWindow
              selectedSpecies={selectedSpecies}
              setSelectedSpecies={setSelectedSpecies}
              onApply={(newSelection) => {
                setSelectedSpecies(newSelection);
                setIsFilterOpen(false);
              }}
              onReset={() => setSelectedSpecies([])}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;
