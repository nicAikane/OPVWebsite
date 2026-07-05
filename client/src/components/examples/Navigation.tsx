import Navigation from '../Navigation';
import { PrideModeProvider } from '@/contexts/PrideModeContext';

export default function NavigationExample() {
  return (
    <PrideModeProvider>
      <Navigation />
    </PrideModeProvider>
  );
}
