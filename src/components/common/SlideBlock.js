import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SlideBlock.module.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Link} from "react-router-dom";

export default function SlideBlock () {
    
    return (
        <div>
            <Swiper
              className={styles.banner}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
            >
              <SwiperSlide className={styles.slide1}>
                <h1 className={styles.head}>나눔 게시판</h1>
                <p className={styles.description}>나눔하려는 물건을
                  올리면 나눔을 원하는<br/>
                  사람이 요청을 통해
                  배송 받을 수
                  있어요</p>
                <Link to="/donate"><button className={styles.Button}>Click!</button></Link>
              </SwiperSlide>
              <SwiperSlide className={styles.slide2}>
                <h1 className={styles.head}>요청 게시판</h1>
                <p className={styles.description}>원하는 품목이 있다면
                  직접 요청 글을 올려
                  해당 품목을
                  나눔 받을 수 있어요</p>
                <Link to="/find"><button className={styles.Button}>Click!</button></Link>
              </SwiperSlide>
              <SwiperSlide className={styles.slide3}>
                <h1 className={styles.head}>포인트 샵</h1>
                <p className={styles.description}>나눔을 통해 모은
                  산타 포인트로
                  필요한 물건을 구매할 수
                  있어요</p>
                <Link to="/santa-shop"><button className={styles.Button}>Click!</button></Link>
              </SwiperSlide>
            </Swiper>
        </div>
    )
}