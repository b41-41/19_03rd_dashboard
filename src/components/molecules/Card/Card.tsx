import React, { ReactElement } from 'react';
import { Divider, Button, CounselingBtn } from 'components/atoms';
import {
  COUNSELING,
  CARD_COUNT,
  CARD_AMOUNT,
  CARD_METHOD,
  CARD_MATERIAL,
  CARD_REQUEST_DETAILS,
  CARD_CHATTING,
  CARD_UNTIL,
} from 'consts/constants';
import CardProps from './Card.type';
import * as S from './Card.styled';

const Card = ({ request }: CardProps): ReactElement => {
  const cardContents = (title: string, content: string) => (
    <S.ContentWrapper>
      <S.ContentTitle>{title}</S.ContentTitle>
      <S.Contents>{content}</S.Contents>
    </S.ContentWrapper>
  );

  return (
    <S.CardWrapper>
      <S.TitleWrapper>
        <S.Title>{request.title}</S.Title>
        {request.status === COUNSELING && <CounselingBtn>{COUNSELING}</CounselingBtn>}
      </S.TitleWrapper>
      <S.Client>{request.client}</S.Client>
      <S.Due>
        {request.due}
        {CARD_UNTIL}
      </S.Due>
      <Divider margin="0 0 32px 0" />
      {cardContents(CARD_COUNT, `${request.count}개`)}
      {cardContents(CARD_AMOUNT, `${request.amount}개`)}
      {cardContents(CARD_METHOD, request.method.join(', '))}
      {cardContents(CARD_MATERIAL, request.material.join(', '))}
      <S.ButtonWrapper>
        <Button primary>{CARD_REQUEST_DETAILS}</Button>
        <Button>{CARD_CHATTING}</Button>
      </S.ButtonWrapper>
    </S.CardWrapper>
  );
};

export default Card;
