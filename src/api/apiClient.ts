import axios from 'axios'

export const apiClient = axios.create({
  // TODO: ローカル開発環境url
  baseURL: 'http://localhost:8080',
  responseType: 'json',
})
