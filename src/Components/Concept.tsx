import React from "react";
import ConceptImg from "../assets/concept1.jpg";
import ConceptImg2 from "../assets/concept2.jpg";
import ConceptImg3 from "../assets/concept3.jpg";
export const Concept = () => {
	return (
		<div className="concept-wrapper">
			<div className="concept">
				<div className="concept-pho1">
					<img src={ConceptImg} alt="ConceptImg" />
				</div>
				<div className="concept-pho2">
					<img src={ConceptImg2} alt="ConceptImg" />
				</div>

				<div className="concept-text">
					<div className="concept-font">
						<h1 className="en-title">
							OUR <br />
							CONCEPT
						</h1>
						<h2 className="ja-title">旅は人生を変えてくれる──。</h2>
						<h2 className="ja-title">
							「旅」×「フォト」
							<br /> 新しいフォトを作ろう。
						</h2>
						<p>
							旅はどこに行くかではなく誰と行くかである。
							<br />
							あなたの最も大切な人とふたりきりで旅に出よう。
							<br />
							恋人から夫婦に変わる
							<br />
							今だからこそ今しかできない旅がある。
						</p>

						<div className="view">
							<button>VIEW MORE</button>
						</div>
					</div>
					<div className="concept-pho3">
						<img src={ConceptImg3} alt="ConceptImg" />
					</div>
				</div>
			</div>
		</div>
	);
};
