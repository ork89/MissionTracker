import React, {Component} from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

import classes from "./Modal.module.css";

class Modal extends Component {

	shouldComponentUpdate(nextProps, nextState) {		
		return nextProps.showModal !== this.props.showModal || nextProps.children !== this.props.children;
	}

	render() {
		return (
			<Auxiliary>
				<Backdrop show={this.props.showModal} backdropClicked={this.props.modalClosed} />
					<div className={classes.Modal}
						style={{ transform: this.props.showModal ? "translateY(0)" : "translateY(-100vh)",
								opacity: this.props.showModal ? "1" : "0" }}>
						{this.props.children}
					</div>
			</Auxiliary>
		);
	}
}

export default Modal;
