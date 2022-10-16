import axios from 'axios'

export const apiUser = axios.create({
  baseURL: 'https://api.github.com/users',
})

export const apiRepo = axios.create({
  baseURL: 'https://api.github.com/repos',
})

export const apiSearch = axios.create({
  baseURL: 'https://api.github.com/search/',
})
