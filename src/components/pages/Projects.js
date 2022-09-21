import React from "react";

export default function Projects() {
	return (
		<div className="main">
			<h3>Projects</h3>
			<div className="project">
				<img
					src="../assets/stayintouch.png"
					alt="Stay in touch social network"
					className="project-bg"
				/>
				<div className="project-text">
					<h4>Stay In Touch Social Network</h4>{" "}
					<a href="https://github.com/GTBCP3G5/Stay-In-Touch-Social-Network" rel="noreferrer noopener" target="_blank">
						GitHub Repo
					</a>
					<a href="https://stayintouchnetwork.herokuapp.com/" rel="noreferrer noopener" target="_blank">
						Deployed App
					</a>
					<ul>
						<li>
							Working with a team of 3 other developers, we created a functional social network application that can be used by graduates of our coding bootcamp to stay in contact with one another after graduation
						</li>
						<li>
							Technologies used: HTML, CSS, JavaScript, Tailwind, Bootstrap, Materialize, Google Fonts, React.js, Node.js, Express.js, GraphQL, MongoDB, Mongoose, JWT, Figma, Lucid, Heroku
						</li>
					</ul>
				</div>
			</div>
			<div className="project">
				<img
					src="../assets/inventory.png"
					alt="Inventory Management Appk"
					className="project-bg"
				/>
				<div className="project-text">
					<h4>Inventory Management System</h4>{" "}
					<a href="https://github.com/ericwittenstein/Inventory_Management" rel="noreferrer noopener" target="_blank">
						GitHub Repo
					</a>
					<a href="https://inventorymanagement.herokuapp.com/" rel="noreferrer noopener" target="_blank">
						Deployed App
					</a>
					<ul>
						<li>
							Working with a small team, we created an employee-facing inventory management system designed to be used by a catering company to help manage equipment check-in and check-out
						</li>
						<li>
							Technologies used: HTML, CSS, JavaScript, Materialize, Node.js, Express.js, Handlebars, MySQL, Sequalize, Figma, Lucid, Heroku
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
