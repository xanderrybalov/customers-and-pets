'use client';

import React from 'react';
import SpeciesIcon from './SpeciesIcon';
import { CustomerListProps } from '../types';

const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  loading,
  error,
}) => {
  if (loading) {
    return (
      <div className="flex flex-col gap-2 items-center w-[838px]">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-[40px] bg-gray-100 animate-pulse"
          ></div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-sm font-medium">
        Error loading customers. Please try again.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 items-center">
      {customers.length === 0 ? (
        <p className="text-gray-500 text-sm">No customers found.</p>
      ) : (
        customers.map((customer) => (
          <div
            key={customer.id}
            className="w-[838px] h-[40px] bg-[#F5F7FA] flex items-center px-4 shadow-sm"
          >
            <span className="font-medium text-gray-700 bg-white rounded-md border border-gray-300 px-2 mr-4">
              id-{customer.id}
            </span>
            <span className="font-medium text-gray-700">{customer.name}</span>

            <span className="font-medium text-gray-700 bg-white rounded-md border border-gray-300 px-2 ml-4">
              {customer.phone || 'No phone'}
            </span>

            <span className="font-medium text-gray-700 px-2 ml-4">
              {customer.email}
            </span>

            {customer.pets.length > 0 && (
              <div className="ml-4 flex gap-2">
                {customer.pets.map((pet) => (
                  <span
                    key={pet.id}
                    className="text-xs text-gray-600 px-2 py-1 bg-white rounded-md border border-gray-300 flex items-center gap-1"
                  >
                    <SpeciesIcon species={pet.species} fillColor="#838993" />
                    {pet.name} - {pet.species}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default CustomerList;
