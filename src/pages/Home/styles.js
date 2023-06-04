import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;


   display: flex;
   flex-direction: column;

`;

export const HomeSection = styled.div`
   height: 120px;
   display: flex;
   align-items: center;
   justify-content: end;

   background: linear-gradient(180deg, ${({theme}) => theme.COLORS.BANNER_CLEAR} 0%, ${({theme}) => theme.COLORS.BANNER_DARK} 100%);
   border-radius: 8px;
   margin: 44px 5% 62px 5%;
   padding-right: 5px;

   @media screen and (min-width: 540px) {
      padding-right: 12%;
   }

   @media screen and (min-width: 768px) {
      height: 150px;
   }

   @media screen and (min-width: 900px) {
      height: 200px;
   }
   @media screen and (min-width: 1024px) {
      margin: 44px 124px 62px 124px;
      height: 260px;
      padding-right: 2%;
   }
   @media screen and (min-width: 1220px) {
      margin: 172px 124px 62px 124px;
      height: 260px;
      padding-right: 8%;
   }       
`;

export const HomeImgMacarrons = styled.img`
   width: 140px;
   height: 149px;
   position: absolute;
   top: 7.4rem;
   left: 0.8rem;

   @media screen and (min-width: 414px) {
      width: 180px;
   }

   @media screen and (min-width: 768px) {
      width: 250px;
      height: 177px;
   }

   @media screen and (min-width: 900px) {
      width: 300px;
      height: 228px;
   }
   @media screen and (min-width: 1024px) {
      width: 400px;
      height: 286px;
      left: 2.5rem;
   }
   @media screen and (min-width: 1220px) {
      width: 656px;
      height: 417px;
      left: 2.5rem;
   }   
`;

export const HomeBannerText = styled.div`
`;

export const HomeTitle = styled.h1`
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 140%;

   

   @media screen and (min-width: 768px) {
      font-size: 24px;
   }
   @media screen and (min-width: 900px) {
      font-size: 36px;
   }
   @media screen and (min-width: 1024px) {
      font-size: 40px;
   }
`;

export const HomeText = styled.h2`
   width: 202px;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 140%;

   @media screen and (min-width: 768px) {
      width: 300px;
      font-size: 16px;
   }
   @media screen and (min-width: 1024px) {
      width: auto;
   }
`;



