import { Tooltip } from '@mui/material'
import { Code, InstagramLogo, LinkedinLogo, XLogo } from '@phosphor-icons/react'
import * as S from './styles'
export function HeaderComponent() {
  return (
    <S.HeaderComponentContainer>
      <Code size={30} weight="bold" />
      <S.SocialMediaContainer>
        <Tooltip title="Instagram">
          <InstagramLogo size={30} weight="bold" />
        </Tooltip>
        <Tooltip title="Linkedin">
          <LinkedinLogo size={30} weight="bold" />
        </Tooltip>
        <Tooltip title="X">
          <XLogo size={30} weight="bold" />
        </Tooltip>
      </S.SocialMediaContainer>
    </S.HeaderComponentContainer>
  )
}
