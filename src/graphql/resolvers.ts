import gql from 'graphql-tag';

const query = gql`
{
  counter @client
}
`;

interface ICounterParams {
  unused?: boolean;
}

export default {
  Mutation: {
    decrementCounter: (_: any, params: ICounterParams, { cache }: any) => {
      const { counter } = cache.readQuery({ query });
      const nextCounter = counter - 1;
      const data = {
        counter: nextCounter,
      };
      cache.writeData({ data });
      return nextCounter;
    },

    incrementCounter: (_: any, params: ICounterParams, { cache }: any) => {
      const { counter } = cache.readQuery({ query });
      const nextCounter = counter + 1;
      const data = {
        counter: nextCounter,
      };
      cache.writeData({ data });
      return nextCounter;
    },
  }
};
