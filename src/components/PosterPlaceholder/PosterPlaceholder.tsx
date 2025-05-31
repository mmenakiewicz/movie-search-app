import { Clapperboard } from "lucide-react"
import styles from "./PosterPlaceholder.module.scss"

export const PosterPlaceholder = () => {
  return (
    <div className={styles.placeholder}>
      <Clapperboard size={64} strokeWidth={1} />
      <p>Poster Not Available</p>
    </div>
  )
}
