'use client';

import { NextUIProvider } from '@nextui-org/react';

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Providers component wrapping NextUIProvider
 * Configures NextUI with dark theme for the entire application
 */
export default function Providers({ children }: ProvidersProps) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}
