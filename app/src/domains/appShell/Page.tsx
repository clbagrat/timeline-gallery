import React from 'react';
import { Box, Stack } from '@amboss/design-system';

export const Page:React.FC = ({ children }) => {
  return (
    <Box space="xxl">
      <Stack alignItems="center">
        <div style={{ maxWidth: "500px" }}>{children}</div>
      </Stack>
    </Box>
  );
};
