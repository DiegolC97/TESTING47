import type { Car, DealershipData, Sale, StaffMember } from "./types";

/** Returns an ISO date (YYYY-MM-DD) `daysAgo` days before today. */
function daysAgo(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() - days);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

const cars: Car[] = [
  { id: "car-1", make: "Toyota", model: "Corolla", year: 2022, price: 21500, mileage: 18000, status: "available" },
  { id: "car-2", make: "Ford", model: "Ranger", year: 2021, price: 32900, mileage: 42000, status: "available" },
  { id: "car-3", make: "Volkswagen", model: "Golf", year: 2020, price: 18900, mileage: 55000, status: "reserved" },
  { id: "car-4", make: "Honda", model: "Civic", year: 2023, price: 25400, mileage: 6000, status: "sold" },
  { id: "car-5", make: "Chevrolet", model: "Onix", year: 2022, price: 15800, mileage: 23000, status: "available" },
  { id: "car-6", make: "Peugeot", model: "208", year: 2021, price: 16900, mileage: 31000, status: "sold" },
  { id: "car-7", make: "Renault", model: "Kangoo", year: 2019, price: 14200, mileage: 78000, status: "available" },
  { id: "car-8", make: "Fiat", model: "Cronos", year: 2023, price: 17300, mileage: 9000, status: "reserved" },
  { id: "car-9", make: "Jeep", model: "Compass", year: 2022, price: 34500, mileage: 27000, status: "sold" },
  { id: "car-10", make: "Nissan", model: "Frontier", year: 2020, price: 29900, mileage: 61000, status: "available" },
];

const staff: StaffMember[] = [
  { id: "staff-1", name: "Laura Gómez", role: "Sales Manager", email: "laura.gomez@gbautomotores.test", phone: "+54 11 5555-0101", hireDate: "2018-03-12" },
  { id: "staff-2", name: "Martín Pérez", role: "Salesperson", email: "martin.perez@gbautomotores.test", phone: "+54 11 5555-0102", hireDate: "2020-07-01" },
  { id: "staff-3", name: "Sofía Romero", role: "Salesperson", email: "sofia.romero@gbautomotores.test", phone: "+54 11 5555-0103", hireDate: "2021-02-15" },
  { id: "staff-4", name: "Diego Fernández", role: "Mechanic", email: "diego.fernandez@gbautomotores.test", phone: "+54 11 5555-0104", hireDate: "2019-09-23" },
  { id: "staff-5", name: "Valentina Ruiz", role: "Administrator", email: "valentina.ruiz@gbautomotores.test", phone: "+54 11 5555-0105", hireDate: "2022-05-09" },
];

// Dates are relative to today so "sales this month" is never empty in a fresh demo.
// Each sold car (car-4, car-6, car-9) has exactly one sale.
const sales: Sale[] = [
  { id: "sale-1", carId: "car-4", salespersonId: "staff-2", customerName: "Carlos Medina", price: 24900, date: daysAgo(0) },
  { id: "sale-2", carId: "car-6", salespersonId: "staff-3", customerName: "Ana Torres", price: 16500, date: daysAgo(45) },
  { id: "sale-3", carId: "car-9", salespersonId: "staff-1", customerName: "Javier Castro", price: 33800, date: daysAgo(80) },
];

/** A fresh deep copy of the original demo data. */
export function getSeedData(): DealershipData {
  return structuredClone({ cars, staff, sales });
}
