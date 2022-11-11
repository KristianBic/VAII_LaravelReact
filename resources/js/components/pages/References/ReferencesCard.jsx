import React, { Component } from "react";

export class ReferencesCard extends Component {
	render() {
		return (
			<div className={`${this.props.myClass} references-catalog-card`}>
				<img src={this.props.imageSrc} alt={this.props.imageAlt} />
				<p>{this.props.imageTitle}</p>
			</div>
		);
	}
}

export default ReferencesCard;
