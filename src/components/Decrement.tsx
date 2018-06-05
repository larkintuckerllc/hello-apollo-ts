import gql from 'graphql-tag';
import React from 'react';
import { Mutation } from 'react-apollo';

interface IDecrementViewProps {
  onDecrement(): void;
}

const DecrementView = ({ onDecrement }: IDecrementViewProps) => (
  <button onClick={onDecrement}>-</button>
);

const DECREMENT_COUNTER = gql`
  mutation {
    decrementCounter @client
  }
`;

class DecrementMutation extends Mutation<IDecrementViewProps,{}> {};

const Decrement = () => (
  <DecrementMutation mutation={DECREMENT_COUNTER}>
    {decrementCounter => <DecrementView onDecrement={decrementCounter} />}
  </DecrementMutation>
);

export default Decrement;
