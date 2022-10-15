import {
  createContext,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import { search } from '../api/search'
import { loadUser } from '../api/loadUser'
import { Posts } from '../interfaces/Post'

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
}

interface UserContextProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextTye)

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<UserInfo>({} as UserInfo)
  const [posts, setPosts] = useState<Posts[]>([])
  const userName = user.login

  useLayoutEffect(() => {
    loadUser('rafaelmfs').then((reponse) => setUser(reponse))
  }, [])

  useEffect(() => {
    if (userName) {
      search(userName, 'github-blog').then((reponse) => setPosts(reponse))
    }
  }, [userName])

  function searchPosts(query: string) {
    search(userName, 'github-blog', query).then((reponse) => setPosts(reponse))
  }

  return (
    <UserContext.Provider value={{ user, posts, searchPosts }}>
      {children}
    </UserContext.Provider>
  )
}
