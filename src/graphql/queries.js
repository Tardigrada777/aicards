import { gql } from "@apollo/client";

export const GET_CARDS = gql`
  query cards($user: String!, $nextReview: timestamptz!) {
    cards(where: { user: { _eq: $user }, next_review: { _lt: $nextReview } }) {
      id
      front
      back
      level
      next_review
      prev_review
    }
  }
`;

export const UPDATE_CARD = gql`
  mutation updateCard($id: Int!, $level: Int!, $nextReview: timestamptz!, $prevReview: timestamptz!) {
    update_cards_by_pk(
      pk_columns: { id: $id },
      _set: { level: $level, next_review: $nextReview, prev_review: $prevReview }
    ) {
      id
      level
      next_review
      prev_review
    }
  }
`;

export const TRACK_REVIEW = gql`
  mutation trackReview($user: String!, $level: Int!, $date: timestamptz!, $cardId: Int!) {
    insert_review_history_one(object: {
      user: $user,
      level: $level,
      date: $date,
      card_id: $cardId,
    }) {
      id
    }
  }
`;
