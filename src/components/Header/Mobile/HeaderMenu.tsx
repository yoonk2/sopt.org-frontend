import Link from 'next/link';
import useHeader from '@src/hooks/useHeader';
import useNoScroll from '@src/hooks/useNoScroll';
import { menuTapList } from '../menuTapList';
import { MenuState, MenuTapType } from '../types';
import * as S from './HeaderMenu.style';

interface HeaderMenuProps {
  isMenuShown: MenuState;
  handleHeaderToggleButton: () => void;
}

function HeaderMenu({ isMenuShown, handleHeaderToggleButton }: HeaderMenuProps) {
  useNoScroll(isMenuShown);

  const { handleIsSelected } = useHeader();

  return (
    <S.Root isMenuShown={isMenuShown}>
      <S.MenuWrap>
        <S.ContentsWrap>
          <S.MenuTitlesWrap>
            {menuTapList.map(({ type, title, href }) => {
              switch (type) {
                case MenuTapType.Anchor:
                  return (
                    <S.MenuTitle key={title}>
                      <S.MenuTitleAnchor href={href} target="_blank" rel="noreferrer">
                        {title}
                      </S.MenuTitleAnchor>
                    </S.MenuTitle>
                  );
                case MenuTapType.Router:
                  return (
                    <S.MenuTitle key={title} isSelected={handleIsSelected(href)}>
                      <Link href={href}>{title}</Link>
                    </S.MenuTitle>
                  );
              }
            })}
            <S.Background onClick={() => handleHeaderToggleButton()} />
          </S.MenuTitlesWrap>
        </S.ContentsWrap>
      </S.MenuWrap>
    </S.Root>
  );
}

export default HeaderMenu;
