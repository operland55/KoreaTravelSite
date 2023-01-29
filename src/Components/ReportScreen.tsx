import React from "react";
import { reportObj } from "../obj";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export const ReportScreen = () => {
	return (
		<div className="reportWrapper">
			<div className="report">
				<div className="en-title">
					<h1>TRIP STORY</h1>
					<p>
						十人十色の旅フォトストーリー。 <br />
						実際のお客様の体験レポートを <br />
						ご紹介します。
					</p>
				</div>

				<ul className="report-lists">
					<Swiper
						breakpoints={{
							1024: {
								slidesPerView: 4,
								spaceBetween: 0,
							},
						}}
						className="swiper"
						modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
						spaceBetween={50}
						slidesPerView={1}
						navigation
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						pagination={{
							type: "fraction",
						}}
					>
						{reportObj.map((item, key) => (
							<SwiperSlide className="sliipeslide">
								<li key={key}>
									<div className="img-box">
										<img src={item.img} alt="img-bg" />
									</div>
									<h3 className="name">{item.name}</h3>
									<p className="info">{item.info}</p>

									<div className="thumb-dest">
										<div className="logo-box">
											<img src={item.logo} alt="logo" />
										</div>
										<div className="destination">
											<p>DESTINATION</p>
											<p>{item.location}</p>
										</div>
									</div>
								</li>
							</SwiperSlide>
						))}
					</Swiper>
				</ul>
			</div>
		</div>
	);
};
