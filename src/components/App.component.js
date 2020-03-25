import * as React from "react";
import NavbarComponent from "./navbar/navbar.component";

export default class AppComponent extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <NavbarComponent/>
            </div>
        );
    }
}