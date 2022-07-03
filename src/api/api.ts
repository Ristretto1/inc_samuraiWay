import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'ac422c12-b2f2-4703-8702-4c62b2f04639'
    }
})

export const userAPI = {
    getUsers(currentPage: number, pageSize: number = 1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollowUser(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    },
    getProfile(userID: string) {
        console.warn('Obsolete method. Please profile API object')
        return profileAPI.getProfile(userID)
    }
}

export const profileAPI = {
    getProfile(userID: string) {
        return instance.get(`profile/` + userID)
    },
    getStatus(userID: string) {
        return instance.get(`profile/status/` + userID)
    },
    updateStatus(status: string) {
        return instance.put<updateStatusType>(`profile/status/`, {status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}

type updateStatusType = {
    resultCode: number
    messages: string[]
    data: {}
}
