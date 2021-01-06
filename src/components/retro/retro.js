import * as React from "react";
import axios from 'axios';
import RetroViewerComponent from "./retro-viewer/retro-viewer.component";

export default class RetroComponent extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        this.state = {team: '', sprintIteration: -1, retros: []};

        this.onTeamSelected = this.onTeamSelected.bind(this);
        this.onSprintIterationChanged = this.onSprintIterationChanged.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    onTeamSelected(e) {
        this.setState({team: e.target.value});
    }

    onSprintIterationChanged(e) {
        this.setState({sprintIteration: e.target.value});
    }

    onSearchSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.get('http://localhost:4000/retro', {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            params: {team: this.state.team, sprintIteration: this.state.sprintIteration}
        });

        this.setState({retros: response.data});
    }

    render() {
        const generalStyle = {
            marginTop: "3%"
        }

        return (
            <div className="container" style={generalStyle}>
                <div className="row justify-content-center">
                    <form className="col-6 align-self-center" onSubmit={this.onSearchSubmit}>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <select className="form-control" onChange={this.onTeamSelected}>
                                        <option defaultValue>Team</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col">
                                <input type="number"
                                       className="form-control"
                                       placeholder="Sprint"
                                       onChange={this.onSprintIterationChanged}/>
                            </div>

                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary">Search</button>
                            </div>
                        </div>
                    </form>
                </div>

                <RetroViewerComponent retros={this.state.retros}/>
            </div>
        );
    }
}
