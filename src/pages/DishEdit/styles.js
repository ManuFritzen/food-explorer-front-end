import styled from "styled-components";

export const Container = styled.div`
    
`;

export const DishNewMain = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 32px 53px;

  @media screen and (min-width: 1000px) {
    margin: 0 123px 116px;
  }
  
`;

export const DishNewTitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 140%;
  margin-bottom: 24px;
  color: #E1E1E6;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .button{
    width: 100%;
    background: #AB4D55;
  } 

  .inputMoney::-webkit-inner-spin-button{
    -webkit-appearance: none;
  }

  @media screen and (min-width: 1000px){
    width: 100%;
    align-items: end;
    .button{
      width: max-content;
    }
  }
    
`;

export const DishNewDivDesktop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const DishNewSelect = styled.select`
  background: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #C4C4CC;

`;

export  const DishNewInputTextarea = styled.textarea`
  background: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
  border: none;
  border-radius: 8px;
  padding: 14px;
  height: 172px;
  resize: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #7C7C8A;

`;

export const DishNewLabel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DishNewLabelP = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #C4C4CC;
`;

export const DishEditButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .buttonDelete{
    background: #0D161B;
  }

  .buttonSave{
    background: #AB4D55;
  }

  @media screen and (min-width: 1000px){
    justify-content: end;
    gap: 32px;
  }
`;



export const InputWrapper = styled.div`
  
  
`;
