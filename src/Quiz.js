import React, { useState } from "react";
import questions from "./questions";
import "./Quiz.css";

const Quiz = (props) => {
	console.log(questions.length);
	const [i, setI] = useState(0);

	const [a, setA] = useState("");
	const [b, setB] = useState({});
	const [c, setC] = useState({});
	const [d, setD] = useState({});

	const clearState = () => {
		setA("");
		setB("");
		setC("");
		setD("");
	};

	const { que, option, answer } = questions[i];
	const handleClick = () => {
		if (option[0] == answer) setA("rgb(77, 230, 77)");
		if (option[1] == answer) setB("rgb(77, 230, 77)");
		if (option[2] == answer) setC("rgb(77, 230, 77)");
		if (option[3] == answer) setD("rgb(77, 230, 77)");
	};

	return (
		<div className='que-container'>
			<p className='que'>{que}</p>
			<div className='option-container'>
				<p
					onClick={() => {
						handleClick();
						if (option[0] !== answer) setA("rgb(243, 114, 114)");
					}}
					style={{ backgroundColor: a }}>
					A. {option[0]}
				</p>
				<p
					onClick={() => {
						handleClick();
						if (option[1] !== answer) setB("rgb(243, 114, 114)");
					}}
					style={{ backgroundColor: b }}>
					B. {option[1]}
				</p>
				<p
					onClick={() => {
						handleClick();
						if (option[2] !== answer) setC("rgb(243, 114, 114)");
					}}
					style={{ backgroundColor: c }}>
					C. {option[2]}
				</p>
				<p
					onClick={() => {
						handleClick();
						if (option[3] !== answer) setD("rgb(243, 114, 114)");
					}}
					style={{ backgroundColor: d }}>
					D. {option[3]}
				</p>
			</div>
			<div className='button-container'>
				<p
					onClick={() => {
						i > 0 && setI(i - 1);
						clearState();
						props.toogle();
					}}
					className='button'>
					Prev
				</p>
				<p
					onClick={() => {
						i < questions.length - 1 && setI(i + 1);
						clearState();
						props.toogle();
					}}
					className='button'>
					Next
				</p>
			</div>
		</div>
	);
};

export default Quiz;
