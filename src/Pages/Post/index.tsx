/* eslint-disable react/no-children-prop */
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useLocation } from 'react-router-dom'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { PostInfo } from './components/PostInfo'
import { PostContainer, PostContent } from './styles'

export function Post() {
  const post = useLocation()
  const postContent = post.state.body

  return (
    <PostContainer>
      <PostInfo />
      <PostContent>
        <ReactMarkdown
          children={postContent}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={dark as any}
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        />
      </PostContent>
    </PostContainer>
  )
}
