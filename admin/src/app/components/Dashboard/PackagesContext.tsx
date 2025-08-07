"use client";

import React, { createContext, useContext, useState, type ReactNode } from "react";

export type PackageStatus = "Active" | "Inactive";

export type Package = {
  id: string;
  name: string;
  description: string;
  status: PackageStatus;
};

type PackagesContextType = {
  packages: Package[];
  addPackage: (pkg: Omit<Package, "id">) => void;
  deletePackage: (id: string) => void;
};

const initialPackages: Package[] = [
  { id: "1", name: "Startup Package", description: "Basic branding and website setup", status: "Active" },
  { id: "2", name: "Growth Package", description: "Advanced SEO & marketing services", status: "Inactive" },
];

const PackagesContext = createContext<PackagesContextType | undefined>(undefined);

export function PackagesProvider({ children }: { children: ReactNode }) {
  const [packages, setPackages] = useState<Package[]>(initialPackages);

  const addPackage = (pkg: Omit<Package, "id">) => {
    setPackages((prev) => [...prev, { id: String(prev.length + 1), ...pkg }]);
  };

  const deletePackage = (id: string) => {
    setPackages((prev) => prev.filter((pkg) => pkg.id !== id));
  };

  return (
    <PackagesContext.Provider value={{ packages, addPackage, deletePackage }}>
      {children}
    </PackagesContext.Provider>
  );
}

export function usePackages() {
  const context = useContext(PackagesContext);
  if (!context) {
    throw new Error("usePackages must be used within a PackagesProvider");
  }
  return context;
}
