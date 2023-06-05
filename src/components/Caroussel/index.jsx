import { 
    Container,
    Slider,
    SliderButton,
    CarousselContent
} from './styles'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useRef } from 'react';

export function Carousel({children}){
    const slider = useRef(null);

    function handleLeftClick(event) {
        event.preventDefault();
    
        slider.current.scrollLeft -= slider.current.offsetWidth;
    }
    
    function handleRightClick(event) {
        event.preventDefault();
    
        slider.current.scrollLeft += slider.current.offsetWidth;
    }

    return(
        <Container>

            <Slider>
                <SliderButton 
                className='ArrowBack'
                onClick={handleLeftClick}
                >
                    <IoIosArrowBack size={40}/>
                </SliderButton>

                <CarousselContent ref={slider}>
                {children}
                </CarousselContent>



                <SliderButton
                className='ArrowForward'
                onClick={handleRightClick}>
                    <IoIosArrowForward size={40}/>
                </SliderButton>
            </Slider>
        </Container>
    )
}