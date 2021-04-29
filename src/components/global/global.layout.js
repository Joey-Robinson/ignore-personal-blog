import Header from "../header/header.main"

const GlobalLayout = ({ children, className }) => (
  <main className="primary">
    <Header />
    <section className={className}>{children}</section>
  </main>
)

export default GlobalLayout
