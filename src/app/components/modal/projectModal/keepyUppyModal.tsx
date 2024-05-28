import Image from "next/image";
import Link from 'next/link';
import styles from "@/app/components/modal/projectModal/projectModal.module.scss";
import ModalContainer from "../modalContainer";
import keepyUppyImg from "../../../../../public/keppyUppy.svg";

import dotIcon from "../../../../../public/dot.svg";
interface KeepyUppyModalProps {
  closeClick: () => void;

}
export default function KeepyUppyModal({ closeClick }: KeepyUppyModalProps){
  return(<div className={styles.modalContainerWrapper}>
<ModalContainer closeClick={closeClick} className={styles.modalContainer}>

<Image src={keepyUppyImg} alt="키피어피 이미지" className={styles.keepyUppyImg}/>
<section>
  <div className={styles.title}>
    <Image src={dotIcon} alt="도트 아이콘"/>
    <span> Introduce</span>
  </div>
  <div className={styles.explanation}>
    디자이너, 백엔드, 프론트 엔드가 함께한 협업 프로젝트<br/>
    협업 프로젝트 시 유용하게 일정을 관리하는 사이트를 구현<br/>
    일정 뿐만 아니라, 이슈,공지사항,좋아요,자유게시판을 활용한 <br/>
    소통&일정관리 사이트
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
      -REACTROUTER<br/>
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
    <Link href='http://54.66.46.187/'>http://54.66.46.187/</Link>
  </div>
</section>

<section>
  <div className={styles.title}>
    <Image src={dotIcon} alt="도트 아이콘"/>
    <span> GitHub</span>
  </div>
  <div className={styles.explanation}>
    <Link href='https://github.com/codeit-part4-8team-project/main'>https://github.com/codeit-part4-8team-project/main</Link>
  </div>
</section>
</ModalContainer>
  </div>)
}