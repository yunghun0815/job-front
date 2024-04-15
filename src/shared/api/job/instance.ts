import axios from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'

import {
    JOB_API_URL
} from '@/shared/config'

export const jobInstance = axios.create({
    baseURL: JOB_API_URL,
    headers: {
      'Content-Type': 'application/json'
    }
})

jobInstance.interceptors.request.use(addToken, reject)

function addToken(config: InternalAxiosRequestConfig) {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config
}

function reject(error: unknown) {
    return Promise.reject(error)
}