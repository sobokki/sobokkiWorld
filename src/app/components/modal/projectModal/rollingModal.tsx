import Image from "next/image";
import Link from 'next/link';
import styles from "@/app/components/modal/projectModal/projectModal.module.scss";
import ModalContainer from "../modalContainer";
import RollingImg from "../../../../../public/rolling.svg";
import dotIcon from "../../../../../public/dot.svg";
interface TaskifyModalProps {
  closeClick: () => void;

}
export default function RollingMdoal({ closeClick }: TaskifyModalProps){
  return(<div className={styles.modalContainerWrapper}>
<ModalContainer closeClick={closeClick} className={styles.modalContainer}>
<Image src={RollingImg} alt="키피어피 이미지" className={styles.Img}/>
<section>
  <div className={styles.title}>
    <Image src={dotIcon} alt="도트 아이콘"/>
    <span> Introduce</span>
  </div>
  <div className={styles.explanation}>
    4명의 프론트엔드가 참여한 프로젝트 <br/>
    우리 함께 추억을 간직해 볼까요?<br/>
    편리하게 마음을 전할 수 있는 롤링페이퍼 사이트 
  </div>
</section>

<section>
  <div className={styles.title}>
    <Image src={dotIcon} alt="도트 아이콘"/>
    <span> Skills</span>
  </div>
   <div className={`${styles.explanation} ${styles.skills}`}>
    <div className={styles.left}>
      -REACT<br/>
      -SCSS<br/>
      -VITE<br/>
      -REACTQUIL<br/>
    </div>
    <div  className={styles.left}>
      -REACTROUTER<br/>
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
    <Link href='https://rolling-3df.pages.dev/'>https://rolling-3df.pages.dev//</Link>
  </div>
</section>

<section>
  <div className={styles.title}>
    <Image src={dotIcon} alt="도트 아이콘"/>
    <span> GitHub</span>
  </div>
  <div className={styles.explanation}>
    <Link href='https://github.com/1Cheol-and-4-team/Rolling'>https://github.com/1Cheol-and-4-team/Rolling</Link>
  </div>
</section>
</ModalContainer>
  </div>)
}