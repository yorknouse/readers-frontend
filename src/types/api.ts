export type User = {
  users_userid: number;
  users_name1: string;
  users_name2: string;
  users_googleAppsUsernameNouse: string;
};

export type Position = {
  positions_id: number;
  positions_displayName: string;
  positions_teamPageGroup: number;
  users: User[];
};
