import { Posts } from '../../components/Posts'
import { Profile } from '../../components/Profile'
import { SearchForm } from './SearchForm'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <SearchForm />
      <Posts />
    </BlogContainer>
  )
}
