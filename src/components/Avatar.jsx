/* eslint-disable react/prop-types */
import styles from "./Avatar.module.css";

export function Avatar({ hideBorder = false, src, ...props }) {

  return (
    <img
      className={hideBorder ? styles.avatar : styles.avatarWithBorder}
      src={src}
      {...props}
    />
  )
}
