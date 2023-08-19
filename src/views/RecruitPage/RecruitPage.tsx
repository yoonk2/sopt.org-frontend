import styled from '@emotion/styled';
import { Footer, Header, Layout, ScrollToTopButton } from '@src/components';
import CirriculumSection from '../AboutPage/components/Cirriculum/Section';
import useFetch from '../AboutPage/hooks/useFetch';
import { ActivityReview } from '../MainPage/components';
import Contact from './components/Contact';
import NotificationSection from './components/NotificationSection';
import RecruiteeInfo from './components/RecruteeInfo';

function Recruit() {
  const aboutData = useFetch();
  return (
    <Layout>
      <Header />
      <ScrollToTopButton />
      <Root>
        <NotificationSection />
        <ContentWrapper>
          <RecruiteeInfo />
          {aboutData._TAG === 'OK' && (
            <CirriculumSection cirriculums={aboutData.data.aboutInfo.curriculums} />
          )}
          <Contact />
          <ActivityReview />
        </ContentWrapper>
      </Root>
      <Footer />
    </Layout>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    margin-top: 90px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    margin-top: 90px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 180px;

  width: 1200px;
  padding: 100px 0;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    width: 700px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 360px;
  }
`;

export default Recruit;
