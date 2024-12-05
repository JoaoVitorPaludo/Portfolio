import { Tooltip } from '@mui/material';
import { Code, InstagramLogo, LinkedinLogo, XLogo } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import * as S from './styles';
export function HeaderComponent() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <S.HeaderComponentContainer className={scrolled ? 'scrolled' : ''}>
      <Code size={30} weight="bold" />
      <S.SocialMediaContainer>
        <Tooltip title="Instagram">
          <a href="https://www.instagram.com/joao_vitorpaludo?igsh=eGc2dGxxNjkxNDQy">
            <InstagramLogo size={30} weight="bold" />
          </a>
        </Tooltip>
        <Tooltip title="Linkedin">
          <a href="https://www.linkedin.com/in/jo%C3%A3ovitorpaludo/">
            <LinkedinLogo size={30} weight="bold" />
          </a>
        </Tooltip>
        <Tooltip title="X">
          <a href="https://x.com/Zyres1?s=09">
            <XLogo size={30} weight="bold" />
          </a>
        </Tooltip>
      </S.SocialMediaContainer>
    </S.HeaderComponentContainer>
  )
}
