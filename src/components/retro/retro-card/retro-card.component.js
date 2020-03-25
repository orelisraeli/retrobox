import * as React from "react";

export default class RetroCardComponent extends React.Component {
    render() {
        const generalStyle = {
            marginTop: "3%",
        }

        return (
            <div className="container w-50" style={generalStyle}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.reaction} {this.props.name}</h5>
                        <p className="card-text">{this.props.message}</p>
                        <p className="card-text">
                            <small className="text-muted">{this.props.createDate.toLocaleString('en-GB')}</small>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}