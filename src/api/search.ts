import { apiSearch } from './api'

export async function search(user: string, repo: string, query = '') {
  const request = await apiSearch.get('issues', {
    params: {
      q: `${query}is:issue repo:${user}/${repo}/`,
      sort: 'created',
      order: 'desc',
    },
  })

  const issues = request.data.items

  return issues
}
