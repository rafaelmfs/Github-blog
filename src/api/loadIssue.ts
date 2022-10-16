import { apiRepo } from './api'

export async function loadIssue(user: string, repo: string, issue: string) {
  const response = await apiRepo.get(`${user}/${repo}/issues/${issue}`)
  const repository = await response.data

  return repository
}
