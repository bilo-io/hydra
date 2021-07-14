import React from 'react'
import DOMPurify from 'dompurify'

const Html = ({ content }: { content: string }) => {
  const cleanContent = DOMPurify.sanitize(content)

  return (
    <div dangerouslySetInnerHTML={{ __html: cleanContent }} />
  )
}

export default Html
