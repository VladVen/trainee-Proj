export type commonUserType = {
    _id: string,
    email: string
    name: string
    avatar: string
    extra_details: string
    skills: string
    profession: string
    details: string
    dateCreated: string
}

export type usersResponseType = {
    pagination: {
        skip: number
        limit: number
        total: number
    },
    data: commonUserType[]
}

export type commonPostType = {
    _id: string,
    title: string,
    fullText: string,
    description: string,
    dateCreated: string,
    image: string,
    likes: string[],
    postedBy: string
}

export type createAccountType = {
    email: string,
    password: string,
    name: string,
    extra_details: string,
    skills: string,
    profession: string,
    details: string
}
export type updateAccountType = {
    name: string,
    extra_details: string,
    skills: string,
    profession: string,
    details: string
}