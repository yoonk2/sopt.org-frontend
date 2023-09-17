import styled from '@emotion/styled';
import PageLayout from '@src/components/common/PageLayout';
import { Content, Description } from './components';

function ReviewPage() {
  return (
    <PageLayout showScrollTopButton>
      <Root>
        <Description />
        <Content />
      </Root>
    </PageLayout>
  );
}

export default ReviewPage;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  min-height: 100vh;
  margin: 0 auto;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    width: 700px;
    margin-top: 90px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 360px;
    margin-top: 90px;
  }
`;
