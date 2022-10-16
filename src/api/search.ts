import { apiSearch } from './api'

export async function search(user: string, repo: string, query = '') {
  const request = await apiSearch.get('issues', {
    params: {
      q: `${query}repo:${user}/${repo}`,
    },
  })

  const issues = request.data.items

  return issues
}
