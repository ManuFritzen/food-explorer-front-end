import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  > header {
    width: 100%;
    height: 144px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
    display: flex;
    align-items: center;
    padding: 0 124px;
    svg {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 24px;
    }
  }
`;

export const Form = styled.form`
    max-width: 340px;
    margin: auto;
    
    
`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 32px;
  width: 186px;
  height: 186px;
  > img {
  border-radius: 50%;
  width: 186px;
  height: 186px;
  }
  > label {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_1};
    }
  }
`;