import * as React from "react";
import RetroComponent from "./Retro.component";

export default class AppComponent extends React.Component {
    render() {
        const headerTitleStyle = {
            fontFamily: "Pacifico",
            color: "#fe346e",
            fontSize: 36,
            textAlign: "center"
        }

        return (
            <div>
                <h1 style={headerTitleStyle}>Retrobox</h1>
                <RetroComponent/>
            </div>
        );
    }
}