import api from "../services/api";
import { User } from "../types";

export const fetchUsers = () => {
    return api.get('/users');
}

export const fetchUserByName = (name: string): Promise<User> => {
    return api.get('/users', {
        params: {
            name,
        }
    });
}