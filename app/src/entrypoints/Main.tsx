import { useState } from 'react'
import { ThemeProvider, dark, Stack, Card, Button } from '@amboss/design-system';
import {Page} from '@/domains/appShell/Page';
import {FileBrowserWindow} from '@/domains/fileBrowser/FileBrowserWindow';

export function Main() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={dark}>
      <Page>
        <FileBrowserWindow />
      </Page>
    </ThemeProvider>
  );
}
