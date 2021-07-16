import React, { useState } from "react";
import Quiz from "./Quiz";
import "./App.css";

// 1. write your team name below inside double quotes
// 2. edit your course name in line 38

function App() {
	const teamA = [
		"Tattvam Jain",
		"Nabh Jain",
		"Prasiddhi Jain",
		"Sukriti Jain",
		"Mardav Jain",
		"Akshat Jain",
		"Pritinker Jain",
	];
	const teamB = [
		"Aadita Jain",
		"Anvi Jain",
		"Deshna Jain",
		"Aarohi Jain",
		"Arjav Jain",
		"Gyayak Jain",
		"Utkarsh Jain",
	];

	const [scoreA, setScoreA] = useState(0);
	const [scoreB, setScoreB] = useState(0);
	const [toogle, setToogle] = useState(false);

	return (
		<div className='root'>
			<h1>
				<u>मंगल-विद्यापीठ</u>
			</h1>
			<h3>मंगल प्रज्ञा - 1</h3> {/* edit your course name here (in h3) */}
			<div className='container'>
				<div
					className='team'
					style={{ backgroundColor: toogle ? "rgb(208, 208, 238)" : null }}>
					<h2>अरहंत</h2>
					<div className='score-container'>
						<p className='point' onClick={() => setScoreA(scoreA - 1)}>
							- 1
						</p>
						<p className='score'>{scoreA}</p>
						<p className='point' onClick={() => setScoreA(scoreA + 1)}>
							+ 1
						</p>
					</div>
					<ol>
						{teamA.map((member, i) => (
							<li key={i}>{member}</li>
						))}
					</ol>
				</div>

				<Quiz toogle={() => setToogle(!toogle)} />

				<div
					className='team'
					style={{ backgroundColor: !toogle ? "rgb(208, 208, 238)" : null }}>
					<h2>सिद्ध</h2>
					<div className='score-container'>
						<p className='point' onClick={() => setScoreB(scoreB + 1)}>
							+ 1
						</p>
						<p className='score'>{scoreB}</p>
						<p className='point' onClick={() => setScoreB(scoreB - 1)}>
							- 1
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
