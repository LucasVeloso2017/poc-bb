import * as S from "./styles";

import Powered from '../../assets/powered-bb.svg'
import Group from '../../assets/bb-ms-group.svg'

export function Footer() {
  return(
    <S.Container id="footer">
      <S.Brands>
        <img src={Powered} alt="" />
        <img src={Group} alt="" />
      </S.Brands>
    </S.Container>
  );
}