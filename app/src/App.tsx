import { useState } from 'react'
import { ThemeProvider, light, Stack, Card, Button } from '@amboss/design-system';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={light}>
      <div style={{ width: 800 }}>
        <Stack space="xl">
          <Card title="bob?">BOB {count}</Card>
          <Button
            variant="tertiary"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            did it work?
          </Button>
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default App
