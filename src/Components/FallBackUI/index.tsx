import { LinearProgress } from '@mui/material'
import styles from "./index.module.scss"
const FallBackUI = () => {
  return (
    <div className={styles["fall_back"]}>
      <LinearProgress sx={{ width: 200 }} />
    </div>
  )
}

export default FallBackUI