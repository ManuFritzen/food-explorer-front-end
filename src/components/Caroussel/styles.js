import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
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
    position: relative;
    display: flex;
    justify-content: space-between;   

    @media screen and (min-width: 900px) {
        
        .ArrowBack{
            background: linear-gradient(270deg, rgba(0, 10, 15, 0.272541) 10%, #000A0F 100%);
            
        }
    
        .ArrowForward{
            background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
            right: 0;
        }    }


    
`;

export const SliderButton = styled.button`
    display: none;

    @media screen and (min-width: 900px) {       
        display: block;
        color: ${({theme})=> theme.COLORS.WHITE};
        z-index: 100;
        border: none;
        position: absolute;
        width: 116px;
        height: 100%;       
    }
`;

export const CarousselContent = styled.div`
    display: flex;
    gap: 2.7rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 768px){
        display: flex;
        gap: 1rem;
    }
`;