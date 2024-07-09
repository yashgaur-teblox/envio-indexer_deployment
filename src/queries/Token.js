import { gql } from '@apollo/client';

export const Token = gql`
  query MyQuery {
  Token(limit: 10) {
    chainID
    db_write_timestamp
    decimals
    id
    lastUpdatedTimestamp
    name
    pricePerUSDNew
    symbol
  }
}
`
;
