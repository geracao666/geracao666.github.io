import { KBarProvider } from "kbar";
import React from "react";

export default function SearchBarProvider({ children }: { children: React.ReactNode }) {
  return (
    <KBarProvider>
      {children}
    </KBarProvider>
  )
}