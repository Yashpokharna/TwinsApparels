'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

const ThemeFavicon = () => {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const favicon = document.getElementById('favicon');
    if (!favicon) return;

    if (resolvedTheme === 'dark') {
      favicon.href = '/favicon-light.ico'; // Light icon for dark theme
    } else {
      favicon.href = '/favicon-dark.ico'; // Dark icon for light theme
    }
  }, [resolvedTheme]);

  return null;
};

export default ThemeFavicon;
