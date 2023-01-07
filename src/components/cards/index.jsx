import { useQuery } from "@apollo/client";
import { useRef } from "react";
import { GET_CARDS } from "../../graphql/queries";

import NoCards from '../no-card/NoCard';
import CardQueue from '../queue';

const Cards = ({ user }) => {
  const nextReview = useRef(new Date().toISOString());

  const { loading, data } = useQuery(GET_CARDS, {
    variables: {
      user,
      nextReview: nextReview.current,
    },
  });

  if (loading) return null;

  if (data && data.cards.length === 0) return <NoCards />;
  
  return <CardQueue cards={data.cards} user={user} />
};

export default Cards;
