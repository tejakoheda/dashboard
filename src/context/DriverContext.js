// src/context/DriverContext.js
import { createContext, useContext, useState } from "react";

const DriverContext = createContext();

export const useDriverContext = () => useContext(DriverContext);

// Dummy Data for 10 entries
const initialDrivers = [
  {
    id: 101,
    firstName: "Ravi",
    lastName: "Kumar",
    phone: "9876543210",
    email: "ravi.k@example.com",
    gender: "Male",
    city: "Hyderabad",
    district: "Rangareddy",
    state: "Telangana",
    pinCode: "500081",
    houseNo: "12-3/A",
    street: "Hitech City",
    vehicleType: "Auto",
    regNumber: "TS09EA1234",
    fuelType: "CNG",
    status: "pending",
    submittedAt: "2023-10-25 10:30 AM",
    selfie: null,
    vehicleImage: null,
    dlFront: null,
  },
  {
    id: 102,
    firstName: "Sita",
    lastName: "Lakshmi",
    phone: "9123456789",
    email: "sita.l@example.com",
    gender: "Female",
    city: "Warangal",
    district: "Warangal Urban",
    state: "Telangana",
    pinCode: "506001",
    houseNo: "4-55",
    street: "Subedari",
    vehicleType: "Bike",
    regNumber: "TS03JK5678",
    fuelType: "Petrol",
    status: "verified",
    submittedAt: "2023-10-24 02:15 PM",
  },
  {
    id: 103,
    firstName: "Ahmed",
    lastName: "Ali",
    phone: "8899776655",
    email: "ahmed.ali@example.com",
    gender: "Male",
    city: "Nizamabad",
    district: "Nizamabad",
    state: "Telangana",
    pinCode: "503001",
    houseNo: "7-8",
    street: "Khaleelwadi",
    vehicleType: "Car",
    regNumber: "TS16MN9012",
    fuelType: "Diesel",
    status: "pending",
    submittedAt: "2023-10-26 09:00 AM",
  },
  {
    id: 104,
    firstName: "John",
    lastName: "Doe",
    phone: "7788990011",
    email: "john.doe@example.com",
    gender: "Male",
    city: "Secunderabad",
    district: "Hyderabad",
    state: "Telangana",
    pinCode: "500003",
    houseNo: "101",
    street: "Paradise Circle",
    vehicleType: "EV",
    regNumber: "TS10EV1122",
    fuelType: "Electric",
    status: "verified",
    submittedAt: "2023-10-20 11:20 AM",
  },
  {
    id: 105,
    firstName: "Priya",
    lastName: "Reddy",
    phone: "9900112233",
    email: "priya.r@example.com",
    gender: "Female",
    city: "Karimnagar",
    district: "Karimnagar",
    state: "Telangana",
    pinCode: "505001",
    houseNo: "22-A",
    street: "Mankammathota",
    vehicleType: "Scooty",
    regNumber: "TS02CD5678",
    fuelType: "Petrol",
    status: "rejected",
    submittedAt: "2023-10-22 04:45 PM",
  },
  {
    id: 106,
    firstName: "Karthik",
    lastName: "Raju",
    phone: "9000112233",
    email: "karthik.r@example.com",
    gender: "Male",
    city: "Khammam",
    district: "Khammam",
    state: "Telangana",
    pinCode: "507001",
    houseNo: "5-6",
    street: "Wyra Road",
    vehicleType: "Auto",
    regNumber: "TS04XY9876",
    fuelType: "Diesel",
    status: "pending",
    submittedAt: "2023-10-27 08:30 AM",
  },
  {
    id: 107,
    firstName: "Anusha",
    lastName: "Patel",
    phone: "9550011223",
    email: "anusha.p@example.com",
    gender: "Female",
    city: "Mahabubnagar",
    district: "Mahabubnagar",
    state: "Telangana",
    pinCode: "509001",
    houseNo: "1-2-3",
    street: "Station Road",
    vehicleType: "Car",
    regNumber: "TS06AB3456",
    fuelType: "CNG",
    status: "verified",
    submittedAt: "2023-10-21 01:10 PM",
  },
  {
    id: 108,
    firstName: "Vikram",
    lastName: "Singh",
    phone: "9667788990",
    email: "vikram.s@example.com",
    gender: "Male",
    city: "Hyderabad",
    district: "Hyderabad",
    state: "Telangana",
    pinCode: "500034",
    houseNo: "88/B",
    street: "Banjara Hills",
    vehicleType: "Bike",
    regNumber: "TS11ZZ0001",
    fuelType: "Petrol",
    status: "pending",
    submittedAt: "2023-10-28 10:00 AM",
  },
  {
    id: 109,
    firstName: "Grace",
    lastName: "Thomas",
    phone: "9112233445",
    email: "grace.t@example.com",
    gender: "Female",
    city: "Medak",
    district: "Medak",
    state: "Telangana",
    pinCode: "502110",
    houseNo: "9-10",
    street: "Church Road",
    vehicleType: "EV",
    regNumber: "TS15EV9988",
    fuelType: "Electric",
    status: "verified",
    submittedAt: "2023-10-19 03:20 PM",
  },
  {
    id: 110,
    firstName: "Mohan",
    lastName: "Krishna",
    phone: "9223344556",
    email: "mohan.k@example.com",
    gender: "Male",
    city: "Nalgonda",
    district: "Nalgonda",
    state: "Telangana",
    pinCode: "508001",
    houseNo: "3-4",
    street: "Clock Tower",
    vehicleType: "Auto",
    regNumber: "TS05MN4321",
    fuelType: "LPG",
    status: "rejected",
    submittedAt: "2023-10-23 12:45 PM",
  },
];

export const DriverProvider = ({ children }) => {
  const [drivers, setDrivers] = useState(initialDrivers);

  const addDriver = (driverData) => {
    const newDriver = {
      ...driverData,
      id: Date.now(),
      status: "pending",
      submittedAt: new Date().toLocaleString(),
    };
    setDrivers((prev) => [newDriver, ...prev]); // Add to top
  };

  const verifyDriver = (id) => {
    setDrivers((prev) =>
      prev.map((driver) =>
        driver.id === id ? { ...driver, status: "verified" } : driver
      )
    );
  };

  const rejectDriver = (id) => {
    setDrivers((prev) =>
      prev.map((driver) =>
        driver.id === id ? { ...driver, status: "rejected" } : driver
      )
    );
  };

  return (
    <DriverContext.Provider
      value={{ drivers, addDriver, verifyDriver, rejectDriver }}
    >
      {children}
    </DriverContext.Provider>
  );
};
