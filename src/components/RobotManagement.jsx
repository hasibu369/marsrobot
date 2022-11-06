import { Component } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import MarsGrid from "./Grid";

class RobotInMars extends Component {
	state = {
		xAxis: 1,
		yAxis: 1,
		robotFace: "north",
		turnRobot: 0,
	};

	updateState = (direction, degree) => {
		this.setState({
			...this.state,
			robotFace: direction,
			turnRobot: this.state.turnRobot + degree,
		});
	};

	turnRobotLeft = (event) => {
		if (
			this.state.robotFace === "north" &&
			(event.key === "l" || event.key === "L" || event.keyCode === 37)
		) {
			this.updateState("west", -90);
		} else if (
			this.state.robotFace === "west" &&
			(event.key === "l" || event.key === "L" || event.keyCode === 37)
		) {
			this.updateState("south", -90);
		} else if (
			this.state.robotFace === "south" &&
			(event.key === "l" || event.key === "L" || event.keyCode === 37)
		) {
			this.updateState("east", -90);
		} else if (
			this.state.robotFace === "east" &&
			(event.key === "l" || event.key === "L" || event.keyCode === 37)
		) {
			this.updateState("north", -90);
		}
	};

	turnRobotRight = (event) => {
		if (
			this.state.robotFace === "north" &&
			(event.key === "r" || event.key === "R" || event.keyCode === 39)
		) {
			this.updateState("east", +90);
		} else if (
			this.state.robotFace === "east" &&
			(event.key === "r" || event.key === "R" || event.keyCode === 39)
		) {
			this.updateState("south", +90);
		} else if (
			this.state.robotFace === "south" &&
			(event.key === "r" || event.key === "R" || event.keyCode === 39)
		) {
			this.updateState("west", +90);
		} else if (
			this.state.robotFace === "west" &&
			(event.key === "r" || event.key === "R" || event.keyCode === 39)
		) {
			this.updateState("north", +90);
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
			this.turnRobotRight(event);
			this.turnRobotLeft(event);
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
				{
					<MarsGrid
						currentXAxis={this.state.xAxis}
						currentYAxis={this.state.yAxis}
						turnRobot={this.state.turnRobot}
					/>
				}
			</Container>
		);
	}
}

export default RobotInMars;
