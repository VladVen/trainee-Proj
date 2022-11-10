export type commonUserType = {
  _id: string;
  email: string;
  name: string;
  avatar: string;
  extra_details: string;
  skills: string;
  profession: string;
  details: string;
  dateCreated: string;
};

export type usersResponseType = {
  pagination: {
    skip: number;
    limit: number;
    total: number;
  };
  data: commonUserType[];
};

export type commonPostType = {
  _id: string;
  title: string;
  fullText: string;
  description: string;
  dateCreated: string;
  image: string;
  likes: string[];
  postedBy: string;
};
export type commonAddPostType = {
  title: string;
  fullText: string;
  description: string;
};

export type postsResponseType = {
  pagination: {
    skip: number | null;
    limit: number | null;
    total: number | null;
  };
  data: commonPostType[];
};

export type createAccountType = {
  email: string;
  password: string;
  name: string;
  extra_details: string;
  skills: string;
  profession: string;
  details: string;
};
export type updateAccountType = {
  name: string;
  extra_details: string;
  skills: string;
  profession: string;
  details: string;
};

export type commonCommentsType = {
  child: commonCommentsType[];
  _id: string;
  commentedBy: string;
  followedCommentID: string;
  postID: string;
  text: string;
  dateCreated: string;
  likes: string[];
};
