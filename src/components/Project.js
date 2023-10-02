import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import mfbg from "../images/mfbg.png"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { useState } from 'react';

const Project = () => {

    const [selectedSlide,setSelectedSlide] = useState(0);

    const handleSlideChange = (swiper) => {
        setSelectedSlide(swiper.activeIndex); // 슬라이드가 변경될 때마다 현재 슬라이드 인덱스 업데이트
      };

    return (
        <>
        <div className="w-screen h-screen flex flex-col items-center justify-start bg-[#F2F2F2] "> 
        <h2 className="font-bold text-3xl mt-10 mb-5">Project Gallery</h2>
        <div className="w-[100vh] h-[50vh]">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={-400} // 음수 값을 사용하여 슬라이드를 겹치도록 설정
        coverflowEffect={{
          rotate: 70,
          stretch: 100,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center ">
          <div className="w-[40vh] h-[40vh] bg-[#87c4ed] rounded-xl">
                <div className="w-[40vh] h-[40vh] bg-[#444] bg-opacity-10 shadow-xl rounded-xl backdrop-blur-md flex flex-col justify-center items-center">
                    <h3 className="text-3xl font-bold">Music-Forecast</h3>
                    <h3>Sound-Oasis</h3>
                </div>
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="flex justify-center items-center">
          <div className="w-[40vh] h-[40vh] bg-white rounded-xl">
            <div className="w-[40vh] h-[40vh] bg-[#444] bg-opacity-10 shadow-xl rounded-xl backdrop-blur-md flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-bold">ETA(Exercise-Tracker-App)</h3>
                        <h3>Beenzinoo</h3>
                    </div>
            </div>

          </div>
        </SwiperSlide>

        
        
        
      </Swiper>
        </div>

        <div>
            {selectedSlide===0 && (<div className="w-[70vw] h-[40vh] flex">
                <div>
                <h3 className="text-2xl font-bold">Music-Forecast</h3>
                <h3>Sound-Oasis</h3>

                </div>

               
            </div>)}
            {selectedSlide===1 && (<div className="w-[70vw] h-[40vh] flex">
                <div>
                <h3 className="text-2xl font-bold">ETA (Exercise-Tracker-App)</h3>
                <h3>Beenzinoo</h3>

                </div>

               
            </div>)}
        </div>
        
        </div>
        
        {/* <div className="flex justify-center w-full h-screen items-center">
            <div className="w-[1920px] h-[1080px] ">
            <iframe className="rounded-xl" src="http://musicforecast.s3-website.ap-northeast-2.amazonaws.com/" width="1920px" height="1080px"  style={{
            overflow: "hidden",
            transform: "scale(0.6)", 
        }}></iframe>
           
            </div>
        

        </div> */}
  </>
    )
}

export default Project;