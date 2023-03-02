import React, { useState } from 'react'
import '../../styles/sliderImgs.css'

const Sliderlmgs = ({product}) => {

const [imgSelected, setImgSelected] = useState(0)

const styleMovement= {
    transform:`translateX(calc(-${imgSelected}/3 * 100%))`,
    width:`${product?.images.length * 100}%`,
};

const handlePrevius = () => {
if (imgSelected -1 < 0) {
    setImgSelected(product.images.length - 1)
} else {
    setImgSelected(imgSelected -1)
}
}

const handleNext = () => {
    if(imgSelected + 1 > product.images.length - 1){
        setImgSelected(0)
    } else {
        setImgSelected(imgSelected + 1)
    }
}

  return (
    
    <div className='carrousel__container'>
     <div className='slider'>
        <button onClick={handlePrevius} className='slider__btn slider__btn-left'><i className='bx bx-chevron-left'></i></button>
        <div style={styleMovement} className='slider__movement'>
                {
                    product?.images.map((image)=>(
                        <div key={image.id} className='slider__container-img'>
                            <img className='slider__img' src={image.url} alt="" />
                        </div>
                    ))
                }
        </div>

        <button onClick={handleNext} className='slider__btn slider__btn-rigth'><i className='bx bx-chevron-right'></i></button>

      </div>
     <div className='carrousel__footer'>
        {
            product?.images.map((image, index)=>(
                <div key={image.id} 
                className={`carrousel__container-img ${index=== imgSelected && 'active-img'}`} 
                onClick={()=>setImgSelected(index)}>
                    <img className='carrousel__img' src={image.url} alt="" />
                </div>
            ))
        }
     </div>
    </div>
    
  )
}

export default Sliderlmgs