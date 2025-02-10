'use client';

import { useState, useEffect } from 'react';
import { SearchInput } from './SearchInput';
import FilterWindow from './FilterWindow';
import CustomersList from './CustomerList';
import { Customer, Pet } from '../types';
import { normalizeSpecies } from '../utils/normalizeSpecies';

const fetchCustomers = async (searchText = '', species: string[] = []) => {
  try {
    const response = await fetch('/api/customers');
    if (!response.ok) {
      throw new Error('Failed to fetch customers');
    }
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

    if (searchText) {
      const searchLower = searchText.toLowerCase();
      customers = customers.filter(
        (customer: Customer) =>
          customer.name.toLowerCase().includes(searchLower) ||
          customer.email.toLowerCase().includes(searchLower) ||
          customer.phone.includes(searchText) ||
          customer.pets.some((pet) =>
            pet.name.toLowerCase().includes(searchLower)
          )
      );
    }

    return { customers, error: null };
  } catch (error) {
    console.error('Error fetching customers:', error);
    return {
      customers: [],
      error:
        error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
};

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchText, setSearchText] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);
    fetchCustomers(searchText, selectedSpecies).then(({ customers, error }) => {
      setCustomers(customers);
      setError(error);
      setLoading(false);
    });
  }, [searchText, selectedSpecies]);

  return (
    <div className="w-screen h-screen flex p-6 bg-white flex-col items-center justify-start gap-3">
      <div className="w-[838px] h-[150px] bg-gray-100 p-4 flex flex-col">
        <h1 className="text-[25px] font-inter font-semibold leading-[30.26px] tracking-tightest m-4">
          Customers and Pets
        </h1>

        <div className="flex gap-3 ml-4 mt-2">
          <SearchInput searchText={searchText} setSearchText={setSearchText} />
          <FilterWindow
            selectedSpecies={selectedSpecies}
            onApply={(newSelection) => setSelectedSpecies(newSelection)}
            onReset={() => setSelectedSpecies([])}
          />
        </div>
      </div>
      <CustomersList
        customers={customers}
        loading={loading}
        error={error || undefined}
      />
    </div>
  );
};

export default CustomersPage;
