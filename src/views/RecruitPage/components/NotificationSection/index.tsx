import styled from '@emotion/styled';
import { ReactComponent as ArrowRight } from '@src/views/ProjectPage/assets/icon/arrow-right-24x24.svg';

const NotificationSection = () => {
  return (
    <Wrapper>
      <div>
        <TitleText>지금은 모집 기간이 아니에요.</TitleText>
        <TitleText>모집 기간이 되면 메일로 알려드릴게요.</TitleText>
      </div>
      <RegisterButton>
        <div>알림 신청하기</div>
        <ArrowRight />
      </RegisterButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 440px;
  background-color: rgba(255, 255, 255, 0.1);
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
`;

const TitleText = styled.div`
  color: #fcfcfc;
  text-align: center;
  font-family: SUIT;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;

const RegisterButton = styled.div`
  border-radius: 30px;
  background: #504ebf;
  width: 280px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 22px */
  letter-spacing: -0.22px;
  & svg path {
    stroke-opacity: 1;
  }
`;

export default NotificationSection;
