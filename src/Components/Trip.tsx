import React from "react";
import { tripObj } from "../obj";

export const Trip = () => {
	return (
		<div className="trip-wrapper">
			<div className="trip">
				<div className="en-title">
					<h1>
						LET’S GO ON <br />A TRIP
					</h1>
					<p>さあ,どこへ旅する？</p>
				</div>
				<ul className="trip-info">
					{tripObj.map((item, key) => (
						<li className={`li${key + 1}`}>
							<div className="img-box">
								{<img src={item.img} alt="img" />}
								<p className="location">{item.location}</p>

								<span className="info sm-hidden">{item.info}</span>
							</div>

							<p className="name">{item.name}</p>
							<p className="theme">{item.theme}</p>
						</li>
					))}
				</ul>

				<div className="view">
					<button>VIEW MORE</button>
				</div>
			</div>
		</div>
	);
};
