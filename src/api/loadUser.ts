import { apiUser } from './api'

export async function loadUser(user: string) {
  const response = await apiUser.get(user)
  const userInfo = await response.data

  return userInfo
}
