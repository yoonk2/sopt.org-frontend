import { ReactComponent as RightArrow } from '@src/assets/icons/arrow_right_24x24.svg';
import styles from './project-enroll.module.scss';

export function ProjectEnrollSection() {
  const handleProjectEnroll = (e: React.MouseEvent) => {
    window.open('https://playground.sopt.org/projects');
    e.stopPropagation();
  };

  return (
    <section className={styles.enroll}>
      <p>혹시 SOPT 회원으로 진행한 프로젝트가 있다면?</p>
      <div className={styles.content} onClick={handleProjectEnroll}>
        <span>프로젝트 올리러 가기</span>
        <RightArrow />
      </div>
    </section>
  );
}
