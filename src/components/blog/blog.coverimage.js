import Image from "next/image"
import Link from "next/link"

const CoverImage = ({ title, src, slug }) => {
  // prettier-ignore
  const image = <Image layout="fixed" width={800} height={533} quality={100} src={src} alt={`Cover Image for ${title}`} />
  return (
    <>
      {slug ? (
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  )
}

export default CoverImage
