import React from 'react';
import ThemeProvider from './theme/themeprovider';

function AppProviders({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

export default AppProviders;