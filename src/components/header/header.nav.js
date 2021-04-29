import Link from "next/link"

const Navigation = () => {
  return (
    <nav style={{ fontSize: "25px", color: "red", listStyle: "none" }}>
      <ul className="text-xxl flex">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navigation
