import Link from "next/link"
// import { memo } from "react"
import CoverImage from "./blog.coverimage"
import Date from "./blog.date"

const PostPreview = ({
  specialKey,
  tags,
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) => {
  const shortenedExcerpt = excerpt.slice(0, 150)
  return (
    <li key={specialKey} className="preview">
      <h2 className="text-2xl font-bold text-secondary">
        <Link as={`/blog/${slug}/`} href="/blog/[slug]/">
          <a className="underline">{title}</a>
        </Link>
      </h2>
      <div className="preview--date text-xl font-bold text-lightBlue">
        <Date dateString={date} />
      </div>
      <div className="preview--image mt-1">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="preview--excerpt text-secondary">
        <p>{shortenedExcerpt}</p>
      </div>
      <div className="mt-3 flex justify-around">{tags}</div>
    </li>
  )
}

export default PostPreview
