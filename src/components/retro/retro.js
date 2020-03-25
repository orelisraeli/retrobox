import * as React from "react";
import RetroViewerComponent from "./retro-viewer/retro-viewer.component";

export default class RetroComponent extends React.Component {
    render() {
        const generalStyle = {
            marginTop: "3%"
        }

        return (
            <div className="container" style={generalStyle}>
                <div className="row justify-content-center">
                    <form className="col-6 align-self-center">
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option defaultValue>Team</option>
                                        <option>Hallel</option>
                                        <option>Pascal</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col">
                                <input type="number" className="form-control" placeholder="Sprint"/>
                            </div>

                            <div className="col-auto">
                                <button type="button" className="btn btn-primary">Search</button>
                            </div>
                        </div>
                    </form>
                </div>

                <RetroViewerComponent/>
            </div>
        );
    }
}
