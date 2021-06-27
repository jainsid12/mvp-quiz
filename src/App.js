import React, { useState } from "react";
import Quiz from "./Quiz";
import "./App.css";

// 1. write your team name below inside double quotes
// 2. edit your course name in line 33

function App() {
	const teamA = [
		"Tattvam Jain",
		"Sukriti Jain",
		"Arjav Jain",
		"Mardav Jain",
		"Deshna Jain",
	];
	const teamB = [
		"Aadita Jain",
		"Anvi Jain",
		"Prasiddhi Jain",
		"Pritinker Jain",
		"Utkarsh Jain",
		"Gyayak Jain",
	];

	const [scoreA, setScoreA] = useState(0);
	const [scoreB, setScoreB] = useState(0);

	return (
		<div className='root'>
			<h1>
				<u>मंगल-विद्यापीठ</u>
			</h1>
			<h3>मंगल प्रज्ञा - 1</h3> {/* edit your course name here (in h3) */}
			<div className='container'>
				<div className='team'>
					<h2>प्रशम</h2>
					<div className='score-container'>
						<p className='score'>{scoreA}</p>
						<p className='point' onClick={() => setScoreA(scoreA + 1)}>
							Upvote
						</p>
					</div>
					<ol>
						{teamA.map((member, i) => (
							<li key={i}>{member}</li>
						))}
					</ol>
				</div>

				<Quiz />

				<div className='team'>
					<h2>संवेग</h2>
					<div className='score-container'>
						<p className='score'>{scoreB}</p>
						<p className='point' onClick={() => setScoreB(scoreB + 1)}>
							Upvote
						</p>
					</div>
					<ol>
						{teamB.map((member, i) => (
							<li key={i}>{member}</li>
						))}
					</ol>
				</div>
			</div>
		</div>
	);
}

export default App;
