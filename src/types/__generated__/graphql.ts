import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "groups" */
export type Groups = {
  __typename?: 'groups';
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
};


/** columns and relationships of "groups" */
export type GroupsUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "groups" */
export type Groups_Aggregate = {
  __typename?: 'groups_aggregate';
  aggregate?: Maybe<Groups_Aggregate_Fields>;
  nodes: Array<Groups>;
};

/** aggregate fields of "groups" */
export type Groups_Aggregate_Fields = {
  __typename?: 'groups_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Groups_Max_Fields>;
  min?: Maybe<Groups_Min_Fields>;
};


/** aggregate fields of "groups" */
export type Groups_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Groups_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "groups". All fields are combined with a logical 'AND'. */
export type Groups_Bool_Exp = {
  _and?: InputMaybe<Array<Groups_Bool_Exp>>;
  _not?: InputMaybe<Groups_Bool_Exp>;
  _or?: InputMaybe<Array<Groups_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "groups" */
export enum Groups_Constraint {
  /** unique or primary key constraint on columns "id" */
  GroupsPkey = 'groups_pkey'
}

/** input type for inserting data into table "groups" */
export type Groups_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Groups_Max_Fields = {
  __typename?: 'groups_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Groups_Min_Fields = {
  __typename?: 'groups_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "groups" */
export type Groups_Mutation_Response = {
  __typename?: 'groups_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Groups>;
};

/** input type for inserting object relation for remote table "groups" */
export type Groups_Obj_Rel_Insert_Input = {
  data: Groups_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Groups_On_Conflict>;
};

/** on_conflict condition type for table "groups" */
export type Groups_On_Conflict = {
  constraint: Groups_Constraint;
  update_columns?: Array<Groups_Update_Column>;
  where?: InputMaybe<Groups_Bool_Exp>;
};

/** Ordering options when selecting data from "groups". */
export type Groups_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: groups */
export type Groups_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "groups" */
export enum Groups_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "groups" */
export type Groups_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "groups" */
export type Groups_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Groups_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Groups_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "groups" */
export enum Groups_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Groups_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Groups_Set_Input>;
  /** filter the rows which have to be updated */
  where: Groups_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "groups" */
  delete_groups?: Maybe<Groups_Mutation_Response>;
  /** delete single row from the table: "groups" */
  delete_groups_by_pk?: Maybe<Groups>;
  /** delete data from the table: "profile_users" */
  delete_profile_users?: Maybe<Profile_Users_Mutation_Response>;
  /** delete single row from the table: "profile_users" */
  delete_profile_users_by_pk?: Maybe<Profile_Users>;
  /** delete data from the table: "profiles" */
  delete_profiles?: Maybe<Profiles_Mutation_Response>;
  /** delete single row from the table: "profiles" */
  delete_profiles_by_pk?: Maybe<Profiles>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "groups" */
  insert_groups?: Maybe<Groups_Mutation_Response>;
  /** insert a single row into the table: "groups" */
  insert_groups_one?: Maybe<Groups>;
  /** insert data into the table: "profile_users" */
  insert_profile_users?: Maybe<Profile_Users_Mutation_Response>;
  /** insert a single row into the table: "profile_users" */
  insert_profile_users_one?: Maybe<Profile_Users>;
  /** insert data into the table: "profiles" */
  insert_profiles?: Maybe<Profiles_Mutation_Response>;
  /** insert a single row into the table: "profiles" */
  insert_profiles_one?: Maybe<Profiles>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "groups" */
  update_groups?: Maybe<Groups_Mutation_Response>;
  /** update single row of the table: "groups" */
  update_groups_by_pk?: Maybe<Groups>;
  /** update multiples rows of table: "groups" */
  update_groups_many?: Maybe<Array<Maybe<Groups_Mutation_Response>>>;
  /** update data of the table: "profile_users" */
  update_profile_users?: Maybe<Profile_Users_Mutation_Response>;
  /** update single row of the table: "profile_users" */
  update_profile_users_by_pk?: Maybe<Profile_Users>;
  /** update multiples rows of table: "profile_users" */
  update_profile_users_many?: Maybe<Array<Maybe<Profile_Users_Mutation_Response>>>;
  /** update data of the table: "profiles" */
  update_profiles?: Maybe<Profiles_Mutation_Response>;
  /** update single row of the table: "profiles" */
  update_profiles_by_pk?: Maybe<Profiles>;
  /** update multiples rows of table: "profiles" */
  update_profiles_many?: Maybe<Array<Maybe<Profiles_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_GroupsArgs = {
  where: Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Groups_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Profile_UsersArgs = {
  where: Profile_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profile_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProfilesArgs = {
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profiles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_GroupsArgs = {
  objects: Array<Groups_Insert_Input>;
  on_conflict?: InputMaybe<Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Groups_OneArgs = {
  object: Groups_Insert_Input;
  on_conflict?: InputMaybe<Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profile_UsersArgs = {
  objects: Array<Profile_Users_Insert_Input>;
  on_conflict?: InputMaybe<Profile_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profile_Users_OneArgs = {
  object: Profile_Users_Insert_Input;
  on_conflict?: InputMaybe<Profile_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProfilesArgs = {
  objects: Array<Profiles_Insert_Input>;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profiles_OneArgs = {
  object: Profiles_Insert_Input;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_GroupsArgs = {
  _set?: InputMaybe<Groups_Set_Input>;
  where: Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Groups_By_PkArgs = {
  _set?: InputMaybe<Groups_Set_Input>;
  pk_columns: Groups_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Groups_ManyArgs = {
  updates: Array<Groups_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Profile_UsersArgs = {
  _set?: InputMaybe<Profile_Users_Set_Input>;
  where: Profile_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profile_Users_By_PkArgs = {
  _set?: InputMaybe<Profile_Users_Set_Input>;
  pk_columns: Profile_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Profile_Users_ManyArgs = {
  updates: Array<Profile_Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProfilesArgs = {
  _set?: InputMaybe<Profiles_Set_Input>;
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_By_PkArgs = {
  _set?: InputMaybe<Profiles_Set_Input>;
  pk_columns: Profiles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_ManyArgs = {
  updates: Array<Profiles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "profile_users" */
export type Profile_Users = {
  __typename?: 'profile_users';
  id: Scalars['uuid']['output'];
  /** An object relationship */
  profile: Profiles;
  profile_id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "profile_users" */
export type Profile_Users_Aggregate = {
  __typename?: 'profile_users_aggregate';
  aggregate?: Maybe<Profile_Users_Aggregate_Fields>;
  nodes: Array<Profile_Users>;
};

export type Profile_Users_Aggregate_Bool_Exp = {
  count?: InputMaybe<Profile_Users_Aggregate_Bool_Exp_Count>;
};

export type Profile_Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Profile_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Profile_Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "profile_users" */
export type Profile_Users_Aggregate_Fields = {
  __typename?: 'profile_users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Profile_Users_Max_Fields>;
  min?: Maybe<Profile_Users_Min_Fields>;
};


/** aggregate fields of "profile_users" */
export type Profile_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Profile_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "profile_users" */
export type Profile_Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Profile_Users_Max_Order_By>;
  min?: InputMaybe<Profile_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "profile_users" */
export type Profile_Users_Arr_Rel_Insert_Input = {
  data: Array<Profile_Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Profile_Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "profile_users". All fields are combined with a logical 'AND'. */
export type Profile_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Profile_Users_Bool_Exp>>;
  _not?: InputMaybe<Profile_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Profile_Users_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  profile_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "profile_users" */
export enum Profile_Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProfileUsersPkey = 'profile_users_pkey'
}

/** input type for inserting data into table "profile_users" */
export type Profile_Users_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  profile?: InputMaybe<Profiles_Obj_Rel_Insert_Input>;
  profile_id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Profile_Users_Max_Fields = {
  __typename?: 'profile_users_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  profile_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "profile_users" */
export type Profile_Users_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Profile_Users_Min_Fields = {
  __typename?: 'profile_users_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  profile_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "profile_users" */
export type Profile_Users_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "profile_users" */
export type Profile_Users_Mutation_Response = {
  __typename?: 'profile_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Profile_Users>;
};

/** on_conflict condition type for table "profile_users" */
export type Profile_Users_On_Conflict = {
  constraint: Profile_Users_Constraint;
  update_columns?: Array<Profile_Users_Update_Column>;
  where?: InputMaybe<Profile_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "profile_users". */
export type Profile_Users_Order_By = {
  id?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  profile_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: profile_users */
export type Profile_Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "profile_users" */
export enum Profile_Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "profile_users" */
export type Profile_Users_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  profile_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "profile_users" */
export type Profile_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Profile_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Profile_Users_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  profile_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "profile_users" */
export enum Profile_Users_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UserId = 'user_id'
}

export type Profile_Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Profile_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Profile_Users_Bool_Exp;
};

/** columns and relationships of "profiles" */
export type Profiles = {
  __typename?: 'profiles';
  id: Scalars['uuid']['output'];
  nickname: Scalars['String']['output'];
  /** An array relationship */
  profile_users: Array<Profile_Users>;
  /** An aggregate relationship */
  profile_users_aggregate: Profile_Users_Aggregate;
  /** An object relationship */
  user?: Maybe<Users>;
};


/** columns and relationships of "profiles" */
export type ProfilesProfile_UsersArgs = {
  distinct_on?: InputMaybe<Array<Profile_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Users_Order_By>>;
  where?: InputMaybe<Profile_Users_Bool_Exp>;
};


/** columns and relationships of "profiles" */
export type ProfilesProfile_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Users_Order_By>>;
  where?: InputMaybe<Profile_Users_Bool_Exp>;
};

/** aggregated selection of "profiles" */
export type Profiles_Aggregate = {
  __typename?: 'profiles_aggregate';
  aggregate?: Maybe<Profiles_Aggregate_Fields>;
  nodes: Array<Profiles>;
};

/** aggregate fields of "profiles" */
export type Profiles_Aggregate_Fields = {
  __typename?: 'profiles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Profiles_Max_Fields>;
  min?: Maybe<Profiles_Min_Fields>;
};


/** aggregate fields of "profiles" */
export type Profiles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Profiles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "profiles". All fields are combined with a logical 'AND'. */
export type Profiles_Bool_Exp = {
  _and?: InputMaybe<Array<Profiles_Bool_Exp>>;
  _not?: InputMaybe<Profiles_Bool_Exp>;
  _or?: InputMaybe<Array<Profiles_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  profile_users?: InputMaybe<Profile_Users_Bool_Exp>;
  profile_users_aggregate?: InputMaybe<Profile_Users_Aggregate_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "profiles" */
export enum Profiles_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProfilesPkey = 'profiles_pkey'
}

/** input type for inserting data into table "profiles" */
export type Profiles_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  profile_users?: InputMaybe<Profile_Users_Arr_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Profiles_Max_Fields = {
  __typename?: 'profiles_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Profiles_Min_Fields = {
  __typename?: 'profiles_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "profiles" */
export type Profiles_Mutation_Response = {
  __typename?: 'profiles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Profiles>;
};

/** input type for inserting object relation for remote table "profiles" */
export type Profiles_Obj_Rel_Insert_Input = {
  data: Profiles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};

/** on_conflict condition type for table "profiles" */
export type Profiles_On_Conflict = {
  constraint: Profiles_Constraint;
  update_columns?: Array<Profiles_Update_Column>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

/** Ordering options when selecting data from "profiles". */
export type Profiles_Order_By = {
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  profile_users_aggregate?: InputMaybe<Profile_Users_Aggregate_Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: profiles */
export type Profiles_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "profiles" */
export enum Profiles_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname'
}

/** input type for updating data in table "profiles" */
export type Profiles_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "profiles" */
export type Profiles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Profiles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Profiles_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "profiles" */
export enum Profiles_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname'
}

export type Profiles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Profiles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Profiles_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "groups" */
  groups: Array<Groups>;
  /** fetch aggregated fields from the table: "groups" */
  groups_aggregate: Groups_Aggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>;
  /** An array relationship */
  profile_users: Array<Profile_Users>;
  /** An aggregate relationship */
  profile_users_aggregate: Profile_Users_Aggregate;
  /** fetch data from the table: "profile_users" using primary key columns */
  profile_users_by_pk?: Maybe<Profile_Users>;
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootGroupsArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};


export type Query_RootGroups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};


export type Query_RootGroups_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProfile_UsersArgs = {
  distinct_on?: InputMaybe<Array<Profile_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Users_Order_By>>;
  where?: InputMaybe<Profile_Users_Bool_Exp>;
};


export type Query_RootProfile_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Users_Order_By>>;
  where?: InputMaybe<Profile_Users_Bool_Exp>;
};


export type Query_RootProfile_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "groups" */
  groups: Array<Groups>;
  /** fetch aggregated fields from the table: "groups" */
  groups_aggregate: Groups_Aggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>;
  /** fetch data from the table in a streaming manner: "groups" */
  groups_stream: Array<Groups>;
  /** An array relationship */
  profile_users: Array<Profile_Users>;
  /** An aggregate relationship */
  profile_users_aggregate: Profile_Users_Aggregate;
  /** fetch data from the table: "profile_users" using primary key columns */
  profile_users_by_pk?: Maybe<Profile_Users>;
  /** fetch data from the table in a streaming manner: "profile_users" */
  profile_users_stream: Array<Profile_Users>;
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table in a streaming manner: "profiles" */
  profiles_stream: Array<Profiles>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootGroupsArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};


export type Subscription_RootGroups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};


export type Subscription_RootGroups_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGroups_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Groups_Stream_Cursor_Input>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};


export type Subscription_RootProfile_UsersArgs = {
  distinct_on?: InputMaybe<Array<Profile_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Users_Order_By>>;
  where?: InputMaybe<Profile_Users_Bool_Exp>;
};


export type Subscription_RootProfile_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Users_Order_By>>;
  where?: InputMaybe<Profile_Users_Bool_Exp>;
};


export type Subscription_RootProfile_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProfile_Users_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Profile_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Profile_Users_Bool_Exp>;
};


export type Subscription_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProfiles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Profiles_Stream_Cursor_Input>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  group?: Maybe<Groups>;
  group_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  profile?: Maybe<Profiles>;
  profile_id?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  profile_users: Array<Profile_Users>;
  /** An aggregate relationship */
  profile_users_aggregate: Profile_Users_Aggregate;
};


/** columns and relationships of "users" */
export type UsersProfile_UsersArgs = {
  distinct_on?: InputMaybe<Array<Profile_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Users_Order_By>>;
  where?: InputMaybe<Profile_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersProfile_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Users_Order_By>>;
  where?: InputMaybe<Profile_Users_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  group?: InputMaybe<Groups_Bool_Exp>;
  group_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  profile_id?: InputMaybe<Uuid_Comparison_Exp>;
  profile_users?: InputMaybe<Profile_Users_Bool_Exp>;
  profile_users_aggregate?: InputMaybe<Profile_Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "profile_id" */
  UsersProfileIdKey = 'users_profile_id_key'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  group?: InputMaybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<Profiles_Obj_Rel_Insert_Input>;
  profile_id?: InputMaybe<Scalars['uuid']['input']>;
  profile_users?: InputMaybe<Profile_Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  group_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  profile_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  group_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  profile_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  group?: InputMaybe<Groups_Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  profile_id?: InputMaybe<Order_By>;
  profile_users_aggregate?: InputMaybe<Profile_Users_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProfileId = 'profile_id'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  group_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profile_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  group_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profile_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProfileId = 'profile_id'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', id: any, name: string, created_at: any } | null };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  name: Scalars['String']['input'];
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', id: any, name: string, created_at: any } | null };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'mutation_root', delete_users_by_pk?: { __typename?: 'users', id: any, name: string, created_at: any } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', name: string, id: any, created_at: any }> };

export type GetUsersClientQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersClientQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', name: string, id: any, created_at: any }> };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', name: string, id: any, created_at: any } | null };


export const CreateUserDocument = gql`
    mutation CreateUser($name: String!) {
  insert_users_one(object: {name: $name}) {
    id
    name
    created_at
  }
}
    `;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: uuid!, $name: String!) {
  update_users_by_pk(pk_columns: {id: $id}, _set: {name: $name}) {
    id
    name
    created_at
  }
}
    `;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: uuid!) {
  delete_users_by_pk(id: $id) {
    id
    name
    created_at
  }
}
    `;
export const GetUsersDocument = gql`
    query GetUsers {
  users(order_by: {created_at: desc}) {
    name
    id
    created_at
  }
}
    `;
export const GetUsersClientDocument = gql`
    query GetUsersClient {
  users(order_by: {created_at: desc}) @client {
    name
    id
    created_at
  }
}
    `;
export const GetUserByIdDocument = gql`
    query GetUserByID($id: uuid!) {
  users_by_pk(id: $id) {
    name
    id
    created_at
  }
}
    `;
export type Requester<C = {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    CreateUser(variables: CreateUserMutationVariables, options?: C): Promise<CreateUserMutation> {
      return requester<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, variables, options) as Promise<CreateUserMutation>;
    },
    UpdateUser(variables: UpdateUserMutationVariables, options?: C): Promise<UpdateUserMutation> {
      return requester<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, variables, options) as Promise<UpdateUserMutation>;
    },
    DeleteUser(variables: DeleteUserMutationVariables, options?: C): Promise<DeleteUserMutation> {
      return requester<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, variables, options) as Promise<DeleteUserMutation>;
    },
    GetUsers(variables?: GetUsersQueryVariables, options?: C): Promise<GetUsersQuery> {
      return requester<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, variables, options) as Promise<GetUsersQuery>;
    },
    GetUsersClient(variables?: GetUsersClientQueryVariables, options?: C): Promise<GetUsersClientQuery> {
      return requester<GetUsersClientQuery, GetUsersClientQueryVariables>(GetUsersClientDocument, variables, options) as Promise<GetUsersClientQuery>;
    },
    GetUserByID(variables: GetUserByIdQueryVariables, options?: C): Promise<GetUserByIdQuery> {
      return requester<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, variables, options) as Promise<GetUserByIdQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;