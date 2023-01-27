import React, { useState } from "react";
import { navObj } from "../obj";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { SideMenu } from "./SideMenu";
export const Header = () => {
	const [active, setActive] = useState("");
	return (
		<>
			<div className="header-wrapper">
				<header>
					<h1 className="sm-hidden">旅行</h1>
					<AiOutlineMenu
						className="sm-only"
						onClick={() => {
							setActive("active");
						}}
					/>
					<ul className="md-only">
						{navObj.map((item, key) => (
							<li key={key}>
								<p>{item.name}</p>
							</li>
						))}
					</ul>
				</header>
			</div>
			<SideMenu active={active} setActive={setActive} />
		</>
	);
};
