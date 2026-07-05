import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PrideModeContextType {
  isPrideMode: boolean;
  togglePrideMode: () => void;
}

const PrideModeContext = createContext<PrideModeContextType | undefined>(undefined);

export function PrideModeProvider({ children }: { children: ReactNode }) {
  const [isPrideMode, setIsPrideMode] = useState(false);

  useEffect(() => {
    if (isPrideMode) {
      document.body.classList.add('pride-mode');
    } else {
      document.body.classList.remove('pride-mode');
    }
  }, [isPrideMode]);

  const togglePrideMode = () => {
    setIsPrideMode(!isPrideMode);
  };

  return (
    <PrideModeContext.Provider value={{ isPrideMode, togglePrideMode }}>
      {children}
    </PrideModeContext.Provider>
  );
}

export function usePrideMode() {
  const context = useContext(PrideModeContext);
  if (context === undefined) {
    throw new Error('usePrideMode must be used within a PrideModeProvider');
  }
  return context;
}
