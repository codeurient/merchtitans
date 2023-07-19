import {defineStore} from "pinia";
import {getCurrentUser, signIn, signUp} from "../services/user";
import {api} from "../services/api";

interface UserState {
    token: string | null
}

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        token: null
    }),

    actions: {
        async fetchUser() {
            const res = await getCurrentUser()
            console.log(res.data)
        },
        async login(email: string, password: string) {
            const res = await signIn(email, password)
            api.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access_token
            this.token = res.data.access_token
        },
        async register(name: string, email: string, password: string) {
            const res = await signUp(name, email, password)
            api.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access_token
            this.token = res.data.access_token
        }
    }
})
