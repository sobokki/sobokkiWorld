import styles from "./about.module.scss";
import BasicContent from "@/app/components/aboutPage/BasicContent";
import FrameContent from "@/app/components/aboutPage/FrameContent";
import DevelopTools from "@/app/components/aboutPage/DevelopTools";
import StyleContent from "@/app/components/aboutPage/StyleContent";
import CollaboContent from "@/app/components/aboutPage/CollaboContent";

export default function About() {
  return (
    <main className={styles.container}>
      <section className={styles.intro}>
        <h2 className={styles.title}>Introduce</h2>
        <div className={styles.comment}>
          <p>안녕하세요 프론트 엔드 엔지니어를 꿈 꾸는 전소은 입니다.</p>
          <p>저의 포트폴리오 사이트에 방문해 주셔서 감사합니다.</p>
        </div>
      </section>
      <section className={styles.edu}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.comment}>
          <p>2024.09 ~ 2024.11 MXLAB 프론트엔드 개발자 </p>
          <p>2023.10~ 2024.04 코드잇 부트캠프 프론트엔드 과정 수료</p>
          <p>2022.08~ 2023.09 YMS영어학원 영어 강사 (초.중등)</p>
          <p>
            2019.03~ 2023.02 원광대학교 문예창작학과 (복수: 공연 영상 스토리텔링
            학과) 졸업
          </p>
        </div>
      </section>

      <section className={styles.skills}>
        <h2 className={styles.title}>Skills</h2>
        <div>
          <span>Basic</span>
          <BasicContent />
        </div>
        <div>
          <span>Frontend Frameworks & Libraries</span>
          <FrameContent />
        </div>
        <div>
          <span>Frontend Development Tools</span>
          <DevelopTools />
        </div>
        <div>
          <span>Styling-related</span>
          <StyleContent />
        </div>
        <div>
          <span>Collaboration & Version Control</span>
          <CollaboContent />
        </div>
      </section>
    </main>
  );
}
