import axios from "axios";

export const api = axios.create({
    baseURL: '//api.merchtitans.skyup.studio/api',
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
})
