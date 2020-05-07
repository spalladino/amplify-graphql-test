/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRelayerInput = {
  id: string,
  name: string,
  tenantId: string,
};

export type ModelRelayerConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelRelayerConditionInput | null > | null,
  or?: Array< ModelRelayerConditionInput | null > | null,
  not?: ModelRelayerConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateRelayerInput = {
  id: string,
  name?: string | null,
  tenantId: string,
};

export type DeleteRelayerInput = {
  tenantId: string,
  id: string,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelRelayerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  and?: Array< ModelRelayerFilterInput | null > | null,
  or?: Array< ModelRelayerFilterInput | null > | null,
  not?: ModelRelayerFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateRelayerMutationVariables = {
  input: CreateRelayerInput,
  condition?: ModelRelayerConditionInput | null,
};

export type CreateRelayerMutation = {
  createRelayer:  {
    __typename: "Relayer",
    id: string,
    name: string,
    tenantId: string,
    owner: string | null,
  } | null,
};

export type UpdateRelayerMutationVariables = {
  input: UpdateRelayerInput,
  condition?: ModelRelayerConditionInput | null,
};

export type UpdateRelayerMutation = {
  updateRelayer:  {
    __typename: "Relayer",
    id: string,
    name: string,
    tenantId: string,
    owner: string | null,
  } | null,
};

export type DeleteRelayerMutationVariables = {
  input: DeleteRelayerInput,
  condition?: ModelRelayerConditionInput | null,
};

export type DeleteRelayerMutation = {
  deleteRelayer:  {
    __typename: "Relayer",
    id: string,
    name: string,
    tenantId: string,
    owner: string | null,
  } | null,
};

export type GetRelayerQueryVariables = {
  tenantId: string,
  id: string,
};

export type GetRelayerQuery = {
  getRelayer:  {
    __typename: "Relayer",
    id: string,
    name: string,
    tenantId: string,
    owner: string | null,
  } | null,
};

export type ListRelayersQueryVariables = {
  tenantId?: string | null,
  id?: ModelIDKeyConditionInput | null,
  filter?: ModelRelayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListRelayersQuery = {
  listRelayers:  {
    __typename: "ModelRelayerConnection",
    items:  Array< {
      __typename: "Relayer",
      id: string,
      name: string,
      tenantId: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateRelayerSubscriptionVariables = {
  owner: string,
};

export type OnCreateRelayerSubscription = {
  onCreateRelayer:  {
    __typename: "Relayer",
    id: string,
    name: string,
    tenantId: string,
    owner: string | null,
  } | null,
};

export type OnUpdateRelayerSubscriptionVariables = {
  owner: string,
};

export type OnUpdateRelayerSubscription = {
  onUpdateRelayer:  {
    __typename: "Relayer",
    id: string,
    name: string,
    tenantId: string,
    owner: string | null,
  } | null,
};

export type OnDeleteRelayerSubscriptionVariables = {
  owner: string,
};

export type OnDeleteRelayerSubscription = {
  onDeleteRelayer:  {
    __typename: "Relayer",
    id: string,
    name: string,
    tenantId: string,
    owner: string | null,
  } | null,
};
