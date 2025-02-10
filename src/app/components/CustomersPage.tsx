'use client';

import { useState, useEffect } from 'react';
import { SearchInput } from './SearchInput';
import FilterWindow from './FilterWindow';
import CustomersList from './CustomerList';
import { Customer, Pet } from '../types';
import { normalizeSpecies } from '../utils/normalizeSpecies';

const fetchCustomers = async (searchText = '', species: string[] = []) => {
  const response = await fetch('/api/customers');
  const data = await response.json();
  let customers = data.customers;

  const filteredSpecies = species
    .filter((s) => s !== 'Any Animal')
    .map((s) => normalizeSpecies(s).toLowerCase());

  if (filteredSpecies.length > 0) {
    customers = customers.filter((customer: Customer) =>
      customer.pets.some((pet: Pet) =>
        filteredSpecies.includes(pet.species.toLowerCase())
      )
    );
  }

  if (searchText.trim()) {
    const searchLower = searchText.toLowerCase();

    customers = customers.filter((customer: Customer) => {
      const matchesCustomer =
        customer.name.toLowerCase().includes(searchLower) ||
        customer.email.toLowerCase().includes(searchLower) ||
        customer.id.toLowerCase().includes(searchLower) ||
        customer.phone.includes(searchText);

      const matchesPet = customer.pets.some((pet: Pet) =>
        pet.name.toLowerCase().includes(searchLower)
      );

      return matchesCustomer || matchesPet;
    });
  }

  return customers;
};

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([]);
  const [tempSpecies, setTempSpecies] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);
    fetchCustomers(searchText, selectedSpecies).then((data) => {
      setCustomers(data);
      setLoading(false);
    });
  }, [searchText, selectedSpecies]);

  return (
    <div className="w-screen h-screen flex p-6 bg-white flex-col items-center justify-start gap-3">
      <div className="w-[838px] h-[150px] bg-gray-100 p-4 flex flex-col">
        <h1 className="text-[25px] font-inter font-semibold leading-[30.26px] tracking-tightest m-4">
          Customers and Pets
        </h1>

        {/* Search and Filter Section */}
        <div className="flex gap-3 ml-4 mt-2">
          <SearchInput searchText={searchText} setSearchText={setSearchText} />
          <div className="relative">
            <FilterWindow
              selectedSpecies={tempSpecies}
              onApply={(newSelection) => {
                setSelectedSpecies(newSelection);
              }}
              onReset={() => {
                setSelectedSpecies([]);
                setTempSpecies([]);
              }}
            />
          </div>
        </div>
      </div>
      <CustomersList customers={customers} />
    </div>
  );
};

export default CustomersPage;
