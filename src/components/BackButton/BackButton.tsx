/* eslint-disable @typescript-eslint/no-misused-promises */
import { CircleArrowLeft } from "lucide-react"
import { useNavigate } from "react-router"
import styles from "./BackButton.module.scss"

interface BackButtonProps {
  isHome?: boolean
}

export const BackButton = ({ isHome }: BackButtonProps) => {
  const navigate = useNavigate()

  const isToPreviousPage = !isHome && window.history.length > 1

  const handleBackClick = async () => {
    if (isToPreviousPage) {
      await navigate(-1)
    } else {
      await navigate("/")
    }
  }

  return (
    <button onClick={handleBackClick} className={styles.button}>
      <CircleArrowLeft />
      {`Go ${isToPreviousPage ? "back" : "to homepage"}`}
    </button>
  )
}
