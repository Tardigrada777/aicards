import { gql } from "@apollo/client";

export const GET_CARDS = gql`
  query cards($user: String!, $nextReview: timestamptz!) {
    cards(where: { user: { _eq: $user }, next_review: { _lt: $nextReview } }) {
      id
      front
      back
      level
    }
  }
`;

export const UPDATE_CARD = gql`
  mutation updateCard($level: Int!, $nextReview: timestamptz!) {
    update_cards(where: { id: { _eq: 2 } }, _set: { level: $level, next_review: $nextReview }) {
      id
      level
      next_review
    }
  }
`;
