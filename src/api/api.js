import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "06899f2a-56d8-45af-8652-d6910ec3192a"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            }).then(response => {
            return response.data;
        })
    },
    follow(userId){
       return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId){
      return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    authMe(){
       return  instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    },
    getProfile(){

    }
};
