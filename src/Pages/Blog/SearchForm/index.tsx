import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import { Xmark } from '../../../components/Icons'
import { UserContext } from '../../../context/UserContext'
import { SearchFormContainer } from './styles'

export function SearchForm() {
  const posts = useContextSelector(UserContext, (context) => {
    return context.posts
  })
  const searchPosts = useContextSelector(UserContext, (context) => {
    return context.searchPosts
  })

  const { register, watch, reset } = useForm({
    defaultValues: {
      query: '',
    },
  })

  const query = watch('query')

  useEffect(() => {
    searchPosts(query)
  }, [query, searchPosts])
  return (
    <SearchFormContainer>
      <div>
        <h2>Publicações</h2>
        <span>
          {posts.length} {posts.length > 1 ? 'publicações' : 'publicação'}
        </span>
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
        <button
          type="button"
          onClick={() => reset({ query: '' })}
          className={query ? 'button-x-on' : 'button-x-off'}
        >
          <Xmark />
        </button>
      </div>
    </SearchFormContainer>
  )
}
