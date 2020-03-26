import * as React from "react";
import RetroCardComponent from "../retro-card/retro-card.component";

export default class RetroViewerComponent extends React.Component {
    render() {
        return (
            <div className="container">
                {
                    this.props.retros.map(retro =>
                        <RetroCardComponent key={retro.key} retro={retro}/>
                    )
                }
            </div>
        );
    }
}