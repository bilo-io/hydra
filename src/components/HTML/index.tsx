import React from 'react'

const Html = ({ content }: { content: string }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  )
}

export default Html
