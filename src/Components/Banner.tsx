import React from "react";
// import Img from "../assets/koreaBg1.jpg";
import Img2 from "../assets/koreaBg2.jpg";
import Img3 from "../assets/koreaBg3.jpg";
import illust from "../assets/illust.jpg";

export const Banner = () => {
	return (
		<div className="banner-wrapper">
			<div className="banner-main">
				<div className="banner-info">
					<div className="img-box one">
						<img src={Img2} alt="korea-Img" />
					</div>
					<p>
						ようこそ <br />
						韓国に来てくれて
					</p>
				</div>
				<div className="banner-info">
					<p>俺たちが思い出を作ってあげます</p>
					<div className="img-box two">
						<img src={Img2} alt="korea-Img" />
					</div>
				</div>
				<div className="banner-info">
					<div className="img-box three">
						<img src={Img3} alt="korea-Img" />
					</div>
					<p>あなたは思い出を持って帰ってください。</p>
				</div>

				<div className="illust">
					<img src={illust} alt="illust" />
				</div>
			</div>
		</div>
	);
};
