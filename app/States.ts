import { atom } from "recoil";



export const sortState = atom({
    key: 'sort',
    default: 'asc'
})


export const limitState = atom({
    key: 'limit',
    default: 20
})

