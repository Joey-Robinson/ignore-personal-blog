import ErrorPage from "next/error"
import { useRouter } from "next/router"
import { getAllPosts, getPostBySlug } from "../../components/blog/blog.api"
import PostBody from "../../components/blog/blog.main"
import markdownToHtml from "../../components/blog/blog.parser"
import GlobalLayout from "../../components/global/global.layout"

const BlogPost = ({ post }) => {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <GlobalLayout className="read">
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            {/* <button className="read--back" onClick={() => router.back()}>
              Go Back
            </button> */}
            <PostBody content={post.content} />
          </>
        )}
      </GlobalLayout>
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ])
  const content = await markdownToHtml(post.content || "")

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default BlogPost
