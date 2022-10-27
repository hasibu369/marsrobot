// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import robot from "./robot.png";

import { Container, Row, Col, Badge } from "react-bootstrap";

class App extends Component {
	state = {
		xAxis: 1,
		yAxis: 1,
		robotFace: "north",
		turnRobot: 0,
	};

	
	formGrid = () => {
		const xAxis = [1, 2, 3, 4, 5];
		const yAxis = [5, 4, 3, 2, 1];
		const formXAxis = (y) => {
			return xAxis.map((x) => (
				<Col
					key={`${x}, ${y}`}
					sm="2 p-4 border-1 border border-primary text-center"
					className="singleCube"
				>
					{this.state.xAxis === x && this.state.yAxis === y ? (
						<img
							src={robot}
							alt="robot"
							style={{
								height: "100%",
								width: "100%",
								transform: `rotate(${this.state.turnRobot}deg)`,
							}}
						/>
					) : (
						""
					)}
				</Col>
			));
		};
		const formYAxis = () => {
			return yAxis.map((y) => (
				<Row
					key={y}
					className="d-flex justify-content-center align-items-center g-0"
				>
					{formXAxis(y)}
				</Row>
			));
		};
		return formYAxis();
	};

	turnRobotAround = (event) => {
		if (
			this.state.robotFace === "north" &&
			(event.key === "l" || event.key === "L" || event.keyCode === 37)
		) {
			this.setState({
				...this.state,
				robotFace: "west",
				turnRobot: this.state.turnRobot - 90,
			});
		} else if (
			this.state.robotFace === "west" &&
			(event.key === "l" || event.key === "L" || event.keyCode === 37)
		) {
			this.setState({
				...this.state,
				robotFace: "south",
				turnRobot: this.state.turnRobot - 90,
			});
		} else if (
			this.state.robotFace === "south" &&
			(event.key === "l" || event.key === "L" || event.keyCode === 37)
		) {
			this.setState({
				...this.state,
				robotFace: "east",
				turnRobot: this.state.turnRobot - 90,
			});
		} else if (
			this.state.robotFace === "east" &&
			(event.key === "l" || event.key === "L" || event.keyCode === 37)
		) {
			this.setState({
				...this.state,
				robotFace: "north",
				turnRobot: this.state.turnRobot - 90,
			});
		} else if (
			this.state.robotFace === "north" &&
			(event.key === "r" || event.key === "R" || event.keyCode === 39)
		) {
			this.setState({
				...this.state,
				robotFace: "east",
				turnRobot: this.state.turnRobot + 90,
			});
		} else if (
			this.state.robotFace === "east" &&
			(event.key === "r" || event.key === "R" || event.keyCode === 39)
		) {
			this.setState({
				...this.state,
				robotFace: "south",
				turnRobot: this.state.turnRobot + 90,
			});
		} else if (
			this.state.robotFace === "south" &&
			(event.key === "r" || event.key === "R" || event.keyCode === 39)
		) {
			this.setState({
				...this.state,
				robotFace: "west",
				turnRobot: this.state.turnRobot + 90,
			});
		} else if (
			this.state.robotFace === "west" &&
			(event.key === "r" || event.key === "R" || event.keyCode === 39)
		) {
			this.setState({
				...this.state,
				robotFace: "north",
				turnRobot: this.state.turnRobot + 90,
			});
		}
	};

	moveRobotForward = (event) => {
		if (
			(event.key === "f" || event.keyCode === 38) &&
			this.state.robotFace === "north" &&
			this.state.yAxis < 5
		) {
			this.setState({ ...this.state, yAxis: this.state.yAxis + 1 });
		} else if (
			(event.key === "f" || event.keyCode === 38) &&
			this.state.robotFace === "south" &&
			this.state.yAxis > 1
		) {
			this.setState({ ...this.state, yAxis: this.state.yAxis - 1 });
		} else if (
			(event.key === "f" || event.keyCode === 38) &&
			this.state.robotFace === "east" &&
			this.state.xAxis < 5
		) {
			this.setState({ ...this.state, xAxis: this.state.xAxis + 1 });
		} else if (
			(event.key === "f" || event.keyCode === 38) &&
			this.state.robotFace === "west" &&
			this.state.xAxis > 1
		) {
			this.setState({ ...this.state, xAxis: this.state.xAxis - 1 });
		} else {
			return this.state;
		}
	};
	componentDidMount() {
		window.onkeydown = (event) => {
			this.turnRobotAround(event);
			this.moveRobotForward(event);
		};
	}

	render() {
		return (
			<Container>
				<Row className="d-flex justify-content-center">
					<Col sm="2 mx-auto" className="text-center">
						{" "}
						<Badge bg="primary">
							Robot Position : {this.state.xAxis},{this.state.yAxis},
							{this.state.robotFace}
						</Badge>
					</Col>
				</Row>

				{this.formGrid()}
			</Container>
		);
	}
}

export default App;
