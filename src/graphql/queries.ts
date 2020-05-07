/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRelayer = /* GraphQL */ `
  query GetRelayer($tenantId: String!, $id: ID!) {
    getRelayer(tenantId: $tenantId, id: $id) {
      id
      name
      tenantId
      owner
    }
  }
`;
export const listRelayers = /* GraphQL */ `
  query ListRelayers(
    $tenantId: String
    $id: ModelIDKeyConditionInput
    $filter: ModelRelayerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRelayers(
      tenantId: $tenantId
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        tenantId
        owner
      }
      nextToken
    }
  }
`;
