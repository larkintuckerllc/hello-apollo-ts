import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

interface ICounterViewProps {
  counter?: number;
}

const CounterView = ({ counter }: ICounterViewProps) => (
  counter !== undefined ? <div>{counter}</div> : <div>No Counter</div>
);

const GET_COUNTER = gql`
  {
    counter @client
  }
`;

class CounterQuery extends Query<ICounterViewProps,{}> {};

const Counter = () => (
  <CounterQuery query={GET_COUNTER}>
    {({ data }) => <CounterView {...data} />}
  </CounterQuery>
);

export default Counter;
