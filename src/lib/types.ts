export type CarStatus = "available" | "reserved" | "sold";

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  /** Price in USD */
  price: number;
  /** Mileage in km */
  mileage: number;
  status: CarStatus;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  /** ISO date (YYYY-MM-DD) */
  hireDate: string;
}

export interface Sale {
  id: string;
  carId: string;
  salespersonId: string;
  customerName: string;
  /** Final sale price in USD */
  price: number;
  /** ISO date (YYYY-MM-DD) */
  date: string;
}

export interface DealershipData {
  cars: Car[];
  staff: StaffMember[];
  sales: Sale[];
}
