const PostBody = ({ content }) => {
  return (
    <>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

export default PostBody
