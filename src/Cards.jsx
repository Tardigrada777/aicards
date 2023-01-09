import { useQuery } from '@apollo/client';
import { useRef } from 'react';
import { GET_CARDS } from './graphql/queries';

function Cards() {
  const user = "test";
  const nextReview = useRef(new Date().toISOString());

  const { loading, data } = useQuery(GET_CARDS, {
    variables: {
      user,
      nextReview: nextReview.current,
    },
    pollInterval: 0,
  });

  if (loading) return null;
  return data.cards.map((c) => <span key={c.front}>{c.front}</span>);
}
export default Cards;