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
      <div className="flex flex-col gap-2 items-center w-auto lg:w-[838px]">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-[40px] bg-[#F5F7FA] animate-pulse"
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
    <div className="flex flex-col gap-2 items-center w-full">
      {customers.length === 0 ? (
        <p className="text-gray-500 text-sm">No customers found.</p>
      ) : (
        customers.map((customer) => (
          <div
            key={customer.id}
            className="w-full h-auto lg:w-[838px] lg:h-[40px] bg-[#F5F7FA] flex flex-col md:flex-wrap p-2 px-4 shadow-sm content-start"
          >
            <div className="flex items-center flex-wrap gap-2 ">
              <span className="font-medium text-gray-700 px-2 sm:text-[14px]">
                ID
              </span>
              <span className="font-medium text-gray-700 bg-white rounded-md border border-gray-300 px-2 sm:px-1">
                {customer.id}
              </span>
              <span className="font-medium text-gray-700 sm:text-[14px]">
                {customer.name}
              </span>
              <span className="font-medium text-gray-700 bg-white rounded-md border border-gray-300 px-2 sm:px-1">
                {customer.phone}
              </span>
            </div>

            <div className="flex items-center flex-wrap gap-2 mt-2 lg:mt-auto lg:ml-1">
              <span className="font-medium text-gray-700 px-2 sm:px-1 sm:text-[14px]">
                {customer.email}
              </span>

              {customer.pets.length > 0 && (
                <div className="flex flex-wrap gap-2 sm:flex-wrap">
                  {customer.pets.map((pet) => (
                    <span
                      key={pet.id}
                      className="text-xs text-gray-600 px-2 py-1 bg-white rounded-md border border-gray-300 flex items-center gap-1 sm:px-1 sm:py-0.5"
                    >
                      <SpeciesIcon species={pet.species} fillColor="#838993" />
                      {pet.name} - {pet.species}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CustomerList;
