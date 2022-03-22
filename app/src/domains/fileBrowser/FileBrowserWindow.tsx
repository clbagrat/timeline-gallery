import React from 'react';
import { Text, Columns, Column, Card, CardBox } from '@amboss/design-system';
import { useDependency } from 'dependency-provider';

type FileBrowserWindowProps = {
  path: string;
}

export const FileBrowserWindow: React.FC<FileBrowserWindowProps> = ({path}) => {
  const fs = useDependency("fs");

  const files:string[] =  fs.readdirSync('./');

  return (
    <Columns gap="l">
      {files.map(file => (
        <Column key={file} size={4}>
          <Card>
            <CardBox>
              <Text> {file}</Text>
            </CardBox>
          </Card>
        </Column>
      ))}
    </Columns>
  )
}
