import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    gap: 4rem;

    margin-bottom: 4rem;
    @media (max-width: 768px){
        gap: 2rem;
        margin-bottom: 0rem;
        margin-top: 2rem;
        
    }
`;



export const Slider = styled.div`
    max-width: 113.5rem;   

    position: relative;

    display: flex;
    justify-content: space-between;


    > div {
    display: flex;
    gap: 2.7rem;
    overflow-x: auto;
    scroll-behavior: smooth;
        ::-webkit-scrollbar {
            display: none;
        }
  }

    .ArrowBack,
    .ArrowForward{
        color: ${({theme})=> theme.COLORS.WHITE};
        z-index: 10;
        border: none;
        position: absolute;
        width: 116px;
        height: 100%;

    
    }

    .ArrowBack{
        background: linear-gradient(270deg, rgba(0, 10, 15, 0.272541) 10%, #000A0F 100%);
        
    }

    .ArrowForward{
        background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
        right: 0;
    }

    @media (max-width: 768px){
    width: 100%;
    max-width: 66.8rem; 

    > div {
    display: flex;
    gap: 1rem;
    }
  }
`;