import React, { useRef, useState, useEffect } from 'react';
import Card from './Card';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Cards = () => {
    const [avatars, setAvatars] = useState([])
    const [showAvatarName, setShowAvatarName] = useState("")


    const swiperRef = useRef(null);

    const handleSlideChange = (index, name) => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(index);
        }
        setShowAvatarName(name)

    }
    useEffect(() => {
        const fetchAvatars = async () => {
            try {
                const res = await fetch("http://localhost:3000/avatars")
                const data = await res.json();
                setAvatars(data);
                console.log(avatars)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchAvatars()
    }, [])

    return (
        <>
            <Swiper ref={swiperRef}
                effect={'coverflow'}
                grabCursor={false}
                centeredSlides={true}
                slidesPerView={6}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <div className='pt-40'>
                    {avatars.map((avatar, key) => (
                        <SwiperSlide
                            onClick={() => handleSlideChange(avatar.id, avatar.name)}
                            className='p-14' >
                            <Card key={avatar.id} avatar={avatar} />
                        </SwiperSlide>
                    ))}
                    {showAvatarName && (
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <h1>{showAvatarName}</h1>
                        </div>
                    )}
                </div>
            </Swiper>
        </>
    );
}

export default Cards