import { useMemo } from 'react';
import { useIsMobile } from '@src/hooks/useDevice';
import useFetch from '../../hooks/useFetch';
import { logoPath } from '../../libs/constants';
import { TAB } from '../../types';
import Loading from './Loading';
import * as S from './style';

type ReviewsProps = {
  selectedTab: TAB;
};

const Reviews = ({ selectedTab }: ReviewsProps) => {
  const { state: reviews, ref } = useFetch(selectedTab);
  const isMobile = useIsMobile();
  const imageHeight = useMemo(() => (isMobile ? 216 : 240), [isMobile]);

  if (reviews._TAG === 'LOADING') return <Loading />;

  if (reviews._TAG !== 'OK') return null;

  console.log('reviews', reviews);
  return (
    <S.Wrapper>
      {/* TODO :: idx key 값 임시 추가 삭제 */}
      {reviews.data.map((review, idx) => (
        <S.Card key={`${review.id}-${idx}`} href={review.link} target="_blank">
          <S.Section>
            <S.ThumbnailWrapper css={{ height: imageHeight }}>
              <S.Thumbnail
                src={logoPath[review.semester]}
                alt={review.title}
                width={120}
                height="100%"
              />
            </S.ThumbnailWrapper>
            <S.ChipWrapper>
              <S.Chip>{review.part}</S.Chip>
              <S.Chip>{review.semester}기</S.Chip>
            </S.ChipWrapper>
          </S.Section>
          <S.Section>
            <S.Title>{review.title}</S.Title>
            <S.Desc>{review.subject}</S.Desc>
          </S.Section>
        </S.Card>
      ))}
      {
        // <div className={styles['observered']} ref={ref}>
        //   <div className={styles['spinner']}>
        //     <OvalSpinner />
        //   </div>
        // </div>
        <div ref={ref}>
          <Loading />
        </div>
      }
    </S.Wrapper>
  );
};

export default Reviews;
