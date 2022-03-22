import React from 'react';
import { Text, Columns, Column, Card, CardBox } from '@amboss/design-system';

type FileBrowserWindowProps = {
  path: string;
}

export const FileBrowserWindow: React.FC<FileBrowserWindowProps> = ({path}) => {
  const { loading, data: files } = {
    loading: false,
    data: [
      {
        name: 1
      },
      {
        name: 2
      },
      {
        name: 3
      },
      {
        name: 11
      },
      {
        name: 22
      },
      {
        name: 32
      },
    ]
  } 
  return (
    <Columns gap="l">
      {files.map(file => (
        <Column key={file.name} size={4}>
          <Card>
            <CardBox>
              <Text> {file.name} </Text>
            </CardBox>
          </Card>
        </Column>
      ))}
    </Columns>
  )
}
