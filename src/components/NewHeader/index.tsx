import { HeaderContainer, TextIcon } from "./styles";

import LeftArrowIcon from '../../assets/chevron-left.png';

export function NewHeader() {
  return(
    <HeaderContainer>
      <TextIcon>
        <img src={LeftArrowIcon} alt="Icone de uma seta para esquerda" />
        <h1>Nova Integração</h1>
      </TextIcon>
    </HeaderContainer>
  );
}