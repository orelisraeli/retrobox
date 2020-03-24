import * as React from "react";

export default class NavBarComponent extends React.Component {
    render() {
        const headerTitleStyle = {
            fontFamily: "Pacifico",
            color: "#fe346e",
            fontSize: 36,
            textAlign: "center"
        }

        const pagesStyle = {
            fontFamily: "Roboto",
            fontSize: 18,
        }

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                    <div>
                        <a className="navbar-brand" href="/" style={headerTitleStyle}>
                            <i className="fas fa-box-open"/> Retrobox</a>
                        <div className="collapse navbar-collapse justify-content-center" style={pagesStyle}>
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/send">Send Retro</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}