import { Route, Routes } from 'react-router-dom'
import { Baselayout } from './components/Layout/BaseLayout'
import { Blog } from './Pages/Blog'
import { Post } from './Pages/Post'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Baselayout />}>
        <Route index element={<Blog />} />
        <Route path="/post/:issue" element={<Post />} />
      </Route>
    </Routes>
  )
}
