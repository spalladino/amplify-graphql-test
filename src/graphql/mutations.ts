/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRelayer = /* GraphQL */ `
  mutation CreateRelayer(
    $input: CreateRelayerInput!
    $condition: ModelRelayerConditionInput
  ) {
    createRelayer(input: $input, condition: $condition) {
      id
      name
      tenantId
      owner
    }
  }
`;
export const updateRelayer = /* GraphQL */ `
  mutation UpdateRelayer(
    $input: UpdateRelayerInput!
    $condition: ModelRelayerConditionInput
  ) {
    updateRelayer(input: $input, condition: $condition) {
      id
      name
      tenantId
      owner
    }
  }
`;
export const deleteRelayer = /* GraphQL */ `
  mutation DeleteRelayer(
    $input: DeleteRelayerInput!
    $condition: ModelRelayerConditionInput
  ) {
    deleteRelayer(input: $input, condition: $condition) {
      id
      name
      tenantId
      owner
    }
  }
`;
