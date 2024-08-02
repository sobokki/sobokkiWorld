import ProjectContents from "@/app/components/projectPage/projectContents";
import styles from "./project.module.scss";

export default function Project() {
  return (
    <div className={styles.container}>
      <ProjectContents />
    </div>
  );
}
