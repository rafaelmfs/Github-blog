import {
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import { search } from '../api/search'
import { loadUser } from '../api/loadUser'
import { Posts } from '../interfaces/Post'
import { data } from './data'
import { createContext } from 'use-context-selector'

interface UserInfo {
  id: number
  login: string
  name: string
  avatar_url: string
  bio: string
  company: string
  followers: number
  html_url: string
}

interface UserContextTye {
  user: UserInfo
  posts: Posts[]
  searchPosts: (query: string) => void
  userName: string
  repository: string
}

interface UserContextProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextTye)

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<UserInfo>({} as UserInfo)
  const [posts, setPosts] = useState<Posts[]>([])
  const userName = user.login
  const repository = data.repository

  useLayoutEffect(() => {
    loadUser(data.user).then((reponse) => setUser(reponse))
  }, [])

  const searchPosts = useCallback(
    async (query: string = '') => {
      const response = await search(userName, repository, query)
      setPosts(response)
    },
    [repository, userName],
  )

  useEffect(() => {
    if (userName) {
      searchPosts()
    }
  }, [searchPosts, userName])

  return (
    <UserContext.Provider
      value={{ user, posts, searchPosts, userName, repository }}
    >
      {children}
    </UserContext.Provider>
  )
}
