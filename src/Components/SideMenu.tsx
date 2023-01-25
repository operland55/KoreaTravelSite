import React from "react";
import { navObj } from "../obj";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
export const SideMenu = ({ active, setActive }: any) => {
	return (
		<div className={`sideMenu ${active}`}>
			<div className="sideMain">
				<header>
					<AiOutlineClose
						onClick={() => {
							setActive("");
						}}
					/>
				</header>

				<ul>
					{navObj.slice(0, 4).map((item, key) => (
						<li key={key}>{item.name}</li>
					))}
				</ul>

				<div className="contact">
					<p>お問い合わせ</p>
				</div>
			</div>
		</div>
	);
};
