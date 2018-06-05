import gql from 'graphql-tag';
import React from 'react';
import { Mutation } from 'react-apollo';

interface IIncrementViewProps {
  onIncrement(): void;
}

const IncrementView = ({ onIncrement }: IIncrementViewProps) => (
  <button onClick={onIncrement}>+</button>
);

const INCREMENT_COUNTER = gql`
  mutation {
    incrementCounter @client
  }
`;

class IncrementMutation extends Mutation<IIncrementViewProps,{}> {};

const Increment = () => (
  <IncrementMutation mutation={INCREMENT_COUNTER}>
    {incrementCounter => <IncrementView onIncrement={incrementCounter} />}
  </IncrementMutation>
);

export default Increment;