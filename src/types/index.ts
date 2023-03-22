export type PostType = {
  id: number;
  title: string;
  body: string;
};

export type PostCommentType = {
  id: number;
  name: string;
  body: string;
  email: string;
};

export type UserType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};
