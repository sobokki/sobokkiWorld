import Image from "next/image";
import Link from 'next/link';
import styles from "@/app/components/modal/projectModal/projectModal.module.scss";
import ModalContainer from "../modalContainer";
import TaskifyImg from "../../../../../public/taskifyPng.png";
import dotIcon from "../../../../../public/dot.svg";
interface TaskifyModalProps {
  closeClick: () => void;

}
export default function TaskifyModal({ closeClick }: TaskifyModalProps){
  return(<div className={styles.modalContainerWrapper}>
<ModalContainer closeClick={closeClick} className={styles.modalContainer}>
<Image src={TaskifyImg} alt="키피어피 이미지" className={styles.Img}/>
<section>
  <div className={styles.title}>
    <Image src={dotIcon} alt="도트 아이콘"/>
    <span> Introduce</span>
  </div>
  <div className={styles.explanation}>
    4명의 프론트엔드가 참여한 프로젝트 <br/>
    일의 우선순위를 높이고 해야할 일을 등록할 수 있다!<br/>
    생산성을 높일 수 있는 일정 관리 사이트
  </div>
</section>

<section>
  <div className={styles.title}>
    <Image src={dotIcon} alt="도트 아이콘"/>
    <span> Skills</span>
  </div>
   <div className={`${styles.explanation} ${styles.skills}`}>
    <div className={styles.left}>
      -NEXT.JS<br/>
      -SCSS<br/>
      -VITE<br/>
      -AXIOS<br/>
    </div>
    <div  className={styles.left}>
      -REACTHOOKFORM<br/>
      -ESLINTER<br/>
      -PREITTER<br/>
      -GIT<br/>
    </div>
  </div>
</section>

<section>
  <div className={styles.title}>
    <Image src={dotIcon} alt="도트 아이콘"/>
    <span> Site</span>
  </div>
  <div className={styles.explanation}>
    <Link href='https://taskify-team3.vercel.app/'>https://taskify-team3.vercel.app/</Link>
  </div>
</section>

<section>
  <div className={styles.title}>
    <Image src={dotIcon} alt="도트 아이콘"/>
    <span> GitHub</span>
  </div>
  <div className={styles.explanation}>
    <Link href='https://github.com/1cheol-and-team3-taskify/taskify'>https://github.com/1cheol-and-team3-taskify/taskify</Link>
  </div>
</section>
</ModalContainer>
  </div>)
}