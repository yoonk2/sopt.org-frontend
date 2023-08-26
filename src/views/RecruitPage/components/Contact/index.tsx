import styled from '@emotion/styled';
import Image from 'next/image';
import { ReactComponent as IcEmail } from '@src/assets/icons/ic_email.svg';
import { ReactComponent as IcFacebook } from '@src/assets/icons/ic_facebook.svg';
import { ReactComponent as IcKakao } from '@src/assets/icons/ic_kakao.svg';
import imgInstagram from '@src/assets/icons/img_instagram.png';
import { SectionSubTitle, SectionTitle } from '../common/styles';

const Contact = () => {
  const handleClick = (target: 'mail' | 'facebook' | 'instagram' | 'youtube' | 'kakao') => {
    switch (target) {
      case 'mail':
        window.location.href = 'mailto:president@sopt.org';
        break;
      case 'facebook':
        window.open('https://www.facebook.com/clubsopt/');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/sopt_official/');
        break;
      case 'youtube':
        window.open('https://www.youtube.com/c/SOPTMEDIA');
        break;
      case 'kakao':
        window.open('http://pf.kakao.com/_JdTKd');
        break;
    }
  };
  return (
    <div>
      <Wrapper>
        <SectionTitle>문의하기</SectionTitle>
        <SectionSubTitle>SOPT 지원에 대해 궁금한 것이 있나요?</SectionSubTitle>
      </Wrapper>
      <GridWrapper>
        <ItemWrapper>
          <IconWrapper>
            <IcEmail />
          </IconWrapper>
          <div>
            <Title>이메일</Title>

            <Sub onClick={() => handleClick('mail')}>president@sopt.org</Sub>
          </div>
        </ItemWrapper>
        <ItemWrapper>
          <IconWrapper>
            <IcKakao />
          </IconWrapper>
          <div>
            <Title>카카오톡 플러스 친구</Title>
            <Sub onClick={() => handleClick('kakao')}>SOPT</Sub>
          </div>
        </ItemWrapper>
        <ItemWrapper>
          <IconWrapper>
            <IconImage src={imgInstagram} alt="@sopt_official" />
          </IconWrapper>
          <div>
            <Title>인스타그램</Title>
            <Sub onClick={() => handleClick('instagram')}>@sopt_official</Sub>
          </div>
        </ItemWrapper>
        <ItemWrapper>
          <IconWrapper>
            <IcFacebook />
          </IconWrapper>
          <div>
            <Title>페이스북</Title>
            <Sub onClick={() => handleClick('facebook')}>clubsopt</Sub>
          </div>
        </ItemWrapper>
      </GridWrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    gap: 20px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 2px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  gap: 40px;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    gap: 24px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 36px;
  }
`;

const IconImage = styled(Image)`
  width: 98px;
  height: 98px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    width: 60px;
    height: 60px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 50px;
    height: 50px;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 80px;
  margin-top: 80px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    row-gap: 50px;
    margin-top: 40px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
    margin-top: 20px;
  }
`;

const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    width: 60px;
    height: 60px;
    & svg {
      transform-origin: top left;
      transform: scale(0.6);
    }
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 50px;
    height: 50px;
    & svg {
      transform-origin: top left;
      transform: scale(0.5);
    }
  }
`;

const Title = styled.div`
  color: #787878;
  font-size: 30px;
  font-weight: 400;
  line-height: 30px; /* 100% */
  letter-spacing: -0.3px;
  margin-bottom: 18px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    color: #787878;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
    letter-spacing: -0.18px;
    margin-bottom: 4px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    color: #787878;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: -0.14px;
    margin-bottom: 4px;
  }
`;

const Sub = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: 600;
  line-height: 50px; /* 125% */
  letter-spacing: -0.4px;
  text-decoration-line: underline;
  cursor: pointer;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    color: #fff;
    font-size: 24.534px;
    font-style: normal;
    font-weight: 600;
    line-height: 30.667px; /* 125% */
    letter-spacing: -0.245px;
    text-decoration-line: underline;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 155.556% */
    letter-spacing: -0.18px;
    text-decoration-line: underline;
  }
`;

export default Contact;
