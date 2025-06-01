import { BackButton } from "@/components/BackButton/BackButton"

const NotFoundPage = () => {
  return (
    <main>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <BackButton isHome />
    </main>
  )
}

export default NotFoundPage
