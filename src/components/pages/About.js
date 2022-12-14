import React from "react";

export default function About() {
	return (
		<div className="main">
			<h3>About Me</h3>
			<p>
				Hi there, and welcome to my portfolio page! My name is Eric
				Wittenstein, and I'm a Full Stack Web Developer. I'm a graduate
				of the Georgia Tech Coding Bootcamp with a Full Stack Web
				Development Certificate, and will be using this webpage to
				showcase my completed projects and demonstrate my skills as a
				developer.
			</p>
			<h3>Technical Skills</h3>
			<p>
				<div className="container text-center">
					<div className="row">
						<div className="col">
							<img
								alt="javascript logo"
								src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
								height="25"
								width="25"
								className="navbar-icon"
							></img>{" "}
							JavaScript
						</div>
						<div className="col">
							<img
								alt="java logo"
								src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg"
								height="25"
								width="25"
								className="navbar-icon"
							></img>{" "}
							Java
						</div>
						<div className="col">
							<img
								alt="typescript logo"
								src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
								height="25"
								width="25"
								className="navbar-icon"
							></img>{" "}
							TypeScript
						</div>
					</div>
					<div className="row">
						<div className="col">
							<img
								alt="html5 logo"
								src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
								height="25"
								width="25"
								className="navbar-icon"
							></img>{" "}
							HTML5
						</div>
						<div className="col">
							<img
								alt="css3 logo"
								src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
								height="25"
								width="25"
								className="navbar-icon"
							></img>{" "}
							CSS3
						</div>
						<div className="col">
							<img
								alt="react logo"
								src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
								height="25"
								width="25"
								className="navbar-icon"
							></img>{" "}
							React.js
						</div>
					</div>
					<div className="row">
						<div className="col">
							<img
								alt="express logo"
								src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
								height="25"
								width="25"
								className="navbar-icon"
							></img>{" "}
							Express.js
						</div>
						<div className="col">
							<img
								alt="mongodb logo"
								src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
								height="25"
								width="25"
								className="navbar-icon"
							></img>{" "}
							MongoDB
						</div>
						<div className="col">
							<img
								alt="mysql logo"
								src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
								height="25"
								width="25"
								className="navbar-icon"
							></img>{" "}
							MySQL
						</div>
					</div>
				</div>
			</p>
		</div>
	);
}
