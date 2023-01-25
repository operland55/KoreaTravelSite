import { useState } from "react";
import { Header } from "./Components/Header";
import { Home } from "./Components/Page.tsx/Home";
import { SideMenu } from "./Components/SideMenu";
function App() {
	return (
		<>
			<Header />
			<Home />
		</>
	);
}

export default App;
