import * as React from "react";
import SendRetroComponent from "./send-retro/SendRetro.component";
import NavBarComponent from "./navbar/NavBar.component";

export default class AppComponent extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <NavBarComponent/>
                <SendRetroComponent/>
            </div>
        );
    }
}