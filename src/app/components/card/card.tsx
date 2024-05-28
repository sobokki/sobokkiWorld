import styles from "./card.module.scss";
interface CardProps{
  nickname: string;
  title: string;
  onClick?:any;
}

export default function Card({nickname,title,onClick}:CardProps){
  return(
    <div className={styles.cardWrapper} onClick={onClick}>
      <div
      className={styles.nickname}
      >
      {nickname}
      </div>
      <div className={styles.title}>
        {title}
      </div>
    </div>
  )
}