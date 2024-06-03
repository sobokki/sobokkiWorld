import ModalContainer from "../modalContainer";
import  styles from "./letterModal.module.scss";

interface LetterModalProps{
  closeClick: () => void;
  nickname: string;
  title: string;
  reason:string;
  createdAt:Date;
}
export default function LetterModal({ closeClick ,nickname,title, reason,createdAt}: LetterModalProps){
  return(
    <ModalContainer closeClick={closeClick} className={styles.modalWrapper}>
      <div className={styles.nickDate}>
      <div className={styles.nickname}>
        닉네임 : {nickname}
      </div>
      <div className={styles.date}>
        작성일자:  {createdAt.toString()}
      </div>
      </div>
       <div className={styles.title}>
        5글자로 표현하기 : {title}
      </div>
      <div className={styles.question}>이유는 ?</div>
      <div className={styles.reason}>
        {reason}
      </div>
    </ModalContainer>
   
  )
}