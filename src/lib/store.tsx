"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getSeedData } from "./seed";
import type { DealershipData } from "./types";

/**
 * Demo data lives in the browser only (localStorage), never on a server.
 * Changes survive a reload; resetData() restores the original seed.
 */
const STORAGE_KEY = "gbautomotores:data:v1";

interface DataContextValue {
  data: DealershipData;
  /** False until the saved data has been read from localStorage. */
  ready: boolean;
  setData: (updater: (prev: DealershipData) => DealershipData) => void;
  resetData: () => void;
}

const DataContext = createContext<DataContextValue | null>(null);

function loadSaved(): DealershipData | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as DealershipData;
    if (Array.isArray(parsed.cars) && Array.isArray(parsed.staff) && Array.isArray(parsed.sales)) {
      return parsed;
    }
  } catch {
    // Corrupt or unavailable storage: fall back to the seed.
  }
  return null;
}

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setDataState] = useState<DealershipData>(getSeedData);
  const [ready, setReady] = useState(false);

  // Read saved data after mount so server and client render the same HTML first.
  useEffect(() => {
    const saved = loadSaved();
    if (saved) setDataState(saved);
    setReady(true);
  }, []);

  const setData = useCallback((updater: (prev: DealershipData) => DealershipData) => {
    setDataState((prev) => {
      const next = updater(prev);
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Storage full or blocked: keep the change in memory only.
      }
      return next;
    });
  }, []);

  const resetData = useCallback(() => {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setDataState(getSeedData());
  }, []);

  return (
    <DataContext.Provider value={{ data, ready, setData, resetData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDealership(): DataContextValue {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useDealership must be used inside <DataProvider>");
  return ctx;
}
