import { useState, useRef, useEffect } from "react";
import { useResize } from "../resize/resize";
import s from  './carousel.module.scss'


export const Carousel = ({ direction, data }) => {
    const isPortrait = useResize()

    const carouselRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const requestIdRef = useRef(null);
    const startPositionRef = useRef(0);
    const [selectedImage, setSelectedImage] = useState(null);

    const closeModal = () => {
        setSelectedImage(null);
    };
    
    useEffect (() => {
        const carousel = carouselRef.current;
        const animate = () => {
            if (!isHovered) {
                startPositionRef.current += direction === 'left' ? -0.8: 0.8; 
                if (startPositionRef.current >= carousel.scrollWidth / 2) {
                    startPositionRef.current = 0;
                } else if (startPositionRef.current <= 0) {
                    startPositionRef.current = carousel.scrollWidth / 2;
                }
                carousel.scrollLeft = startPositionRef.current;
            }
            requestIdRef.current = requestAnimationFrame(animate);
        }
    requestIdRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestIdRef.current);
    }, [direction, isHovered]);

    return (
        <div
            className={s.container}
            ref={carouselRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className={s.content}>
                {data.map(({href, src}) => (
                    <a href={href} key={href} target='_blank'>
                        <img src={src} className={isPortrait ? s.image : `${s.image} ${s.mobile}`}
                    // onClick={() => setSelectedImage(image)}
                    />
                    </a>
                ))}
                
            </div>
            {selectedImage && (
                <div className={s.modal_image_window} onClick={closeModal}>
                    <div style={{ display: "flex" }} onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="" className={s.modal_image} />
                        <p><button onClick={closeModal}
                            className={isPortrait ? s.modal_image_close : `${s.modal_image_close} ${s.mobile}`}></button></p>
                    </div>
                </div>
            )}
        </div>
    )
}