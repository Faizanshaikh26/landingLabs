"use client";

import React, { createContext, useContext, useState, type ReactNode } from "react";

export type ServiceStatus = "Active" | "Inactive";

export type Service = {
  id: string;
  name: string;
  description: string;
  status: ServiceStatus;
};

type ServicesContextType = {
  services: Service[];
  addService: (service: Omit<Service, "id">) => void;
  deleteService: (id: string) => void;
};

const initialServices: Service[] = [
  { id: "1", name: "SEO", description: "Search Engine Optimization", status: "Active" },
  { id: "2", name: "Web Development", description: "Building responsive websites", status: "Active" },
  { id: "3", name: "Content Marketing", description: "Content creation and strategy", status: "Inactive" },
];

const ServicesContext = createContext<ServicesContextType | undefined>(undefined);

export function ServicesProvider({ children }: { children: ReactNode }) {
  const [services, setServices] = useState<Service[]>(initialServices);

  const addService = (service: Omit<Service, "id">) => {
    setServices((prev) => [
      ...prev,
      { id: String(prev.length + 1), ...service },
    ]);
  };

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((service) => service.id !== id));
  };

  return (
    <ServicesContext.Provider value={{ services, addService, deleteService }}>
      {children}
    </ServicesContext.Provider>
  );
}

export function useServices() {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error("useServices must be used within a ServicesProvider");
  }
  return context;
}
