import { api } from "./api";


export const getCurrentUser = () =>
    api.get('/v1/user')

export const signIn = (email: string, password: string) =>
    api.post<{access_token: string}>('/login', {
        email,
        password,
        tokenName: 'tokenName'
    })

export const signUp = (name: string, email: string, password: string) =>
    api.post<{access_token: string}>('/register', {
        name,
        email,
        password,
        tokenName: 'tokenName'
    })

export const forgotPassword = (email: string) =>
    api.post<{status: string}>('/forgot-password', {
        email
    })

export const resetPassword = (token: string, email: string, password: string, password_confirmation: string) =>
    api.post('reset-password', {
        token,
        email,
        password,
        password_confirmation
    })
