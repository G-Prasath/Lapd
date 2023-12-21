import { Box, Grid, Typography } from '@mui/material'
import Images from 'next/image';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import useMediaQuery from '@mui/material/useMediaQuery';

import hero_1 from '../../public/Home/HeroImage-01.jpg';
import hero_2 from '../../public/Home/HeroImage-02.jpg';
import hero_3 from '../../public/Home/HeroImage-03.jpg';
import hero_4 from '../../public/Home/HeroImage-04.jpg';
import hero_5 from '../../public/Home/HeroImage-05.jpg';
import hero_6 from '../../public/Home/HeroImage-06.jpg';
import videos from '../../public/Home/video-img-01.jpg';

import style from './banner.module.css';


const Banner = () => {
    const Mobile = useMediaQuery('(max-width:768px)');

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ paddingLeft: Mobile? '42px':'50px' }}>
                    <Typography sx={{ fontSize: '22px' }}>The Official Site of the Los Angeles Police Department</Typography>
                    <Typography sx={{ fontSize: Mobile? '40px':'62px', fontStyle: 'italic', fontWeight: '700' }}>“to protect and to serve”</Typography>

                </Box>
                <Box sx={{ marginTop: '30px' }}>
                    <Grid container rowSpacing={2}>
                        <Grid item xs={12} sm={12} md={8}>
                            <Swiper slidesPerView={1}
                                spaceBetween={0}
                                loop={true}
                                speed={1000}
                                autoplay={{ delay: 5000 }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation, Autoplay]}>
                                <SwiperSlide>
                                    <Images src={hero_1} alt="Hero_Images" style={{ aspectRatio: '16 / 9' }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Images src={hero_2} alt="Hero_Images" style={{ aspectRatio: '16 / 9' }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Images src={hero_3} alt="Hero_Images" style={{ aspectRatio: '16 / 9' }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Images src={hero_4} alt="Hero_Images" style={{ aspectRatio: '16 / 9' }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Images src={hero_5} alt="Hero_Images" style={{ aspectRatio: '16 / 9' }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Images src={hero_6} alt="Hero_Images" style={{ aspectRatio: '16 / 9' }} />
                                </SwiperSlide>

                            </Swiper>
                        </Grid>

                        <Grid item xs={12} sm={12} md={4}>
                            <Images src={videos} alt="Hero_Images" style={{ height: '100%', width: '100%' }} />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Banner