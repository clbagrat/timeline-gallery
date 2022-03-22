import React, { useContext } from 'react';

type DependencyName = "fs" | "date";
type ContextDefenition = Partial<Record<DependencyName, any>>;

const DependencyContext:React.Context<ContextDefenition> = React.createContext({});

export const DependencyProvider = DependencyContext.Provider;

export const DependencyConsumer = DependencyContext.Consumer;

export const useDependency = (dependencyName: DependencyName) => {
  const context = useContext(DependencyContext);
  console.log(context);

  if (context[dependencyName] === undefined) {
    throw new Error(`${dependencyName} is not provided`);
  }

  return context[dependencyName];
}
