import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div class="postcard">
			<div class="postcard-header">
				<h1>My Postcard</h1>
				<img
					src="https://raw.githubusercontent.com/breatheco-de/exercise-postcard/e63a7916530cc850bd92aa1c2e19191837fb5c80/.learn/assets/4geeks.png"
					alt="4Geeks logo"
				/>
			</div>
			<div class="postcard-body">
				<div class="body-left">
					<p>Look how aresome! This is a postcard that I created using HTML5 and CSS3 during my 4Geeks Academy Course!</p>
					<p>This is so cool, can't wait to starting doing more stuff</p>
				</div>
				<div class="body-right">
					<label for="name">
						<input type="text" placeholder="Some Name" />
					</label>
					<label for="email">
						<input type="text" placeholder="Some email" />
					</label>
					<label for="comment">
						<input type="text" placeholder="Some comment" />
					</label>
				</div>
			</div>
			<div class="postcard-footer">
				<button>Send My Postcard</button>
			</div>
		</div>
	);
};

export default Home;
