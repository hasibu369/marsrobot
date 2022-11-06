import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import robot from "../assets/img/robot.png";
import "../styles/Grid.css";

const MarsGrid = ({ currentXAxis, currentYAxis, turnRobot }) => {
	const [xAxis] = useState([1, 2, 3, 4, 5]);
	const [yAxis] = useState([5, 4, 3, 2, 1]);

	return yAxis.map((y) => (
		<Row
			key={y}
			className="d-flex justify-content-center align-items-center g-0"
		>
			{xAxis.map((x) => (
				<Col
					key={`${x}, ${y}`}
					sm="2 p-4 border-1 border border-primary text-center"
					className="singleCube"
				>
					{currentXAxis === x && currentYAxis === y ? (
						<img
							src={robot}
							alt="robot"
							style={{
								height: "100%",
								width: "100%",
								transform: `rotate(${turnRobot}deg)`,
							}}
						/>
					) : (
						""
					)}
				</Col>
			))}
		</Row>
	));
};

export default MarsGrid;
