import { users, departaments } from '../mock'

export const getUsers = async () => {
    return new Promise(resolve => setTimeout(() => {
        resolve(users)
    }, 1000))
}

export const getDepts = async () => {
    return new Promise(resolve => setTimeout(() => {
        resolve(departaments)
    }, 1000))
}
