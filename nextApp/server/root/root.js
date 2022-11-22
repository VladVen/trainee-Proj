const users = [
    {id: 1, username: 'Vlad', age: 20, aboutMe: 'sth'}
]

export const root = {
    getAllUsers: () => {
        return users
    },
    getUser: ({id}) => {
        return users.find(item => item.id == id)
    },
    createUser: ({input}) => {
        const id = Date.now()
        const user = {id, ...input}
        users.push(user)
        return user
    }
}