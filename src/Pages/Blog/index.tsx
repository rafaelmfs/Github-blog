import { Posts } from '../../components/Posts'
import { Profile } from '../../components/Profile'
import { BlogContainer, SearchForm } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <SearchForm>
        <div>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchForm>

      <Posts />
    </BlogContainer>
  )
}
