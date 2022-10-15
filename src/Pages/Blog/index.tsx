import { useContext } from 'react'
import { Posts } from '../../components/Posts'
import { Profile } from '../../components/Profile'
import { UserContext } from '../../context/UserContext'
import { BlogContainer, SearchForm } from './styles'

export function Blog() {
  const { posts } = useContext(UserContext)

  return (
    <BlogContainer>
      <Profile />
      <SearchForm>
        <div>
          <h2>Publicações</h2>
          <span>
            {posts.length} {posts.length > 1 ? 'publicações' : 'publicação'}
          </span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchForm>

      <Posts />
    </BlogContainer>
  )
}
