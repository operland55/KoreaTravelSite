import React from "react";
import { Banner } from "../Banner";
import { Concept } from "../Concept";
import { ReportScreen } from "../ReportScreen";
import { Trip } from "../Trip";

export const Home = () => {
	return (
		<>
			<Banner />
			<Concept />
			<Trip />
			<ReportScreen />
		</>
	);
};
