import React from "react";
import PostcardHeader from "./PostcardHeader.jsx";
import PostcardBodyLeft from "./PostcardBodyLeft.jsx";
import PostcardBodyRight from "./PostcardBodyRight.jsx";
import PostcardFooter from "./PostcardFooter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div class="postcard">
			<PostcardHeader/>
			<div class="postcard-body">
				<PostcardBodyLeft/>
				<PostcardBodyRight/>
			</div>
			<PostcardFooter/>
		</div>
	);
};

export default Home;
