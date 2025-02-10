export type Pet = {
  id: string;
  name: string;
  species: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  pets: Pet[];
};

export type CustomerListProps = {
  customers: Customer[];
};
