import React from "react";
import styled from "styled-components";
import {MdChevronLeft, MdChevronRight} from "react-icons/md" ;
import {BiHeart, BiCommentDetail} from "react-icons/bi"

export default function ReactCardSlider({slides}){


    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500 ;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500 ;
    }

     return (
         <SliderContainer>
             <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
             <Slider id="slider">
                 {
                     slides?.map((slide, index) => {
                         return (
                             <Slide>
                                 <CardImage  image={slide.image}>
                                     <div className="cat">
                                         {
                                             slide.categories?.map(cat => <span style={{background: cat.bg || '#1c4f64' , color : cat.color || '#f9feff'}}>{cat.title}</span>)
                                         }
                                     </div>
                                 </CardImage>
                                 <CardInfo>
                                     <h4 className="title" style={{ color : slide.title_color || 'inherit'}}>{slide.title.substr(0,25)}</h4>
                                     <div className="info">
                                         <span className="price" style={{ color : slide.price_color || '#1c0953'}}>{slide.price}</span>
                                         <span 
                                          style={{ color : slide.btn_color || 'white', background:slide.btn_bg_color || '#1c0953'}}
                                          className="buy"
                                          onClick={slide.handleClick}
                                          >
                                             {slide.btnText.substr(0,15)}
                                     </span>
                                      </div>
                                 </CardInfo>
                             </Slide>
                         )
                     })
                 }
             </Slider>
             <MdChevronRight size={40} className="slider-icon right" onClick={slideRight} />
         </SliderContainer>
     )
}


const SliderContainer = styled.div`
   width : 90%;
   height : 320px;
   display: flex;
   align-items: center;
   position: relative;
   box-sizing : border-box ;

   .slider-icon{
       background: white;
       border-radius: 100%;
       position: absolute;
       opacity: 0.2;
       box-shadow : 2px 2px 2px 2px rgb(0 0 0 / 12%); 
       cursor: pointer;

       &:hover{
        opacity: 1;
       }
   }


   .left{
       left : 0;
   }

   .right {
       right : 0
   }
` ;


const Slider = styled.div`
  width : 100%;
  height : 100% ;
  white-space: nowrap;  // its behave like an flex-wrap . align all children in same alignment with scroallable.
  overflow-x: scroll;
  scrollbar-width: none;
  scroll-behavior: smooth;
  cursor: pointer;

  &::-webkit-scrollbar{
      display: none;
  }
`;

const Slide = styled.div`
    width : 320px;
    height : 320px;
    background: #f4eeec;
    border-radius: 10px;
    display: inline-block; // acquire all area into row.
    margin: 0 0.5rem;
    box-shadow : 2px 2px 2px 2px rgb(0 0 0 / 12%); 
    overflow : none ;
`;

const CardImage = styled.div`
  width : 100%;
  height : 220px;
  background: rgb(240 240 240 / 80%);
  background-image: ${ ({image}) => image ? `url(${image})` : 'none' };
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  .cat{
      padding : 0.25rem ;
      display: flex;
      //color: #f9feff;

      span{
        padding: 0.25rem 0.75rem;
        border: none;
        border-radius: 1rem;
        margin-right: 0.25rem;
       // background: #1c4f64;
        box-shadow: 2px 2px 2px 2px rgb(236 233 233 / 12%);
        font-size: 0.7rem; 
      }
    }
` ;

const CardInfo = styled.div`

    width : 100%;
    padding: 0.25rem;
    
    .title {
        font-size: 1.2rem;
        margin : 0.25rem 0rem;
        text-align: center;
    }

    .info{
         margin-top: 0.5rem;
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 0 0.65rem;

        .price{
            font-size: 1.4rem;
            font-weight: 700;
            //color: #1c0953;
            border-radius: 1rem;
            padding: 0.5rem 1rem ;
            box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 12%);
        }

        .buy{
            padding: 0.5rem 1.25rem;
            font-size: 1.2rem;
            font-weight: 550;
          //  color : white ;
          //  background: #1c0953;
            border: none;
            border-radius : 1rem;
            transition: 0.3s all ease-in-out;
            cursor: pointer;

            &:hover{
                color : #1c0953 !important; 
                background: white !important;
                font-weight: 650;
                outline : none ; 
            }
        }
    }
`;
