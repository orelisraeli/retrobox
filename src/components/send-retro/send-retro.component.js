import * as React from "react";
import axios from "axios";

export default class SendRetroComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            team: '',
            sprintIteration: -1,
            name: '',
            message: '',
            reaction: '',
            direction: 'ltr',
            alertShown: '',
            status: '',
            alertHeader: '',
            alertMessage: ''
        };

        this.onTeamSelected = this.onTeamSelected.bind(this);
        this.onSprintIterationChanged = this.onSprintIterationChanged.bind(this);
        this.onNameChanged = this.onNameChanged.bind(this);
        this.onRightToLeftClicked = this.onRightToLeftClicked.bind(this);
        this.onLeftToRightClicked = this.onLeftToRightClicked.bind(this);
        this.onMessageChanged = this.onMessageChanged.bind(this);
        this.onSmileReactionSelected = this.onSmileReactionSelected.bind(this);
        this.onSadReactionSelected = this.onSadReactionSelected.bind(this);
        this.onAngryReactionSelected = this.onAngryReactionSelected.bind(this);
        this.onSendSubmit = this.onSendSubmit.bind(this);
    }

    onTeamSelected(e) {
        this.setState({team: e.target.value});
    }

    onSprintIterationChanged(e) {
        this.setState({sprintIteration: e.target.value});
    }

    onNameChanged(e) {
        this.setState({name: e.target.value});
    }

    onRightToLeftClicked(e) {
        this.setState({direction: 'rtl'});
    }

    onLeftToRightClicked(e) {
        this.setState({direction: 'ltr'});
    }

    onMessageChanged(e) {
        this.setState({message: e.target.value});
    }

    onSmileReactionSelected(e) {
        this.setState({reaction: "😃"});
    }

    onSadReactionSelected(e) {
        this.setState({reaction: "🙁"});
    }

    onAngryReactionSelected(e) {
        this.setState({reaction: "😠"});
    }

    async onSendSubmit(e) {
        e.preventDefault();

        try {
            await axios.post('http://localhost:4000/retro', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                data: this.state
            });

            this.setState({
                alertShown: 'show',
                status: 'success',
                alertHeader: 'Success!',
                alertMessage: 'Your retro was sent'
            });
        } catch (e) {
            console.log(e);
            this.setState({
                alertShown: 'show',
                status: 'danger',
                alertHeader: 'Failed!',
                alertMessage: 'Something went wrong, please try again'
            });
        }
    }

    render() {
        const formStyle = {
            fontFamily: "Roboto",
            marginTop: "5%",
            padding: "3%",
            textAlign: "center",
            color: "#f35588",
            backgroundColor: "#ffebd9",
            borderRadius: "20px",
        }

        const changeTextAlign = {
            float: "right",
            marginBottom: "1%"
        }

        const emojiGroup = {
            marginTop: "5%"
        }

        const emojiStyle = {
            fontSize: 22
        }

        const sendButtonStyle = {
            fontFamily: "Pacifico",
            margin: "0 auto",
            fontSize: 28,
            marginTop: "10%",
            borderRadius: "12px",
            paddingRight: "4%",
            paddingLeft: "4%",
            color: "#f35588",
        }

        const alertStyle = {
            marginTop: "3%"
        }

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <form className="col-6 align-self-center" style={formStyle} onSubmit={this.onSendSubmit}>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <select className="form-control" onChange={this.onTeamSelected}>
                                        <option defaultValue>Team</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col">
                                <input type="number" className="form-control" placeholder="Sprint"
                                       onChange={this.onSprintIterationChanged}/>
                            </div>

                            <div className="col">
                                <input type="text" className="form-control" placeholder="Name"
                                       onChange={this.onNameChanged}/>
                            </div>
                        </div>

                        <div className="btn-group" role="group" aria-label="" style={changeTextAlign}>
                            <button type="button"
                                    className="btn btn-light bi bi-text-indent-right"
                                    onClick={this.onLeftToRightClicked}>
                                <i className="fas fa-align-left"/>
                            </button>

                            <button type="button" className="btn btn-light" onClick={this.onRightToLeftClicked}>
                                <i className="fas fa-align-right"/>
                            </button>
                        </div>

                        <textarea className="form-control" rows="5" placeholder="Message"
                                  style={{direction: this.state.direction}}
                                  onChange={this.onMessageChanged}/>

                        <div className="col">
                            <div className="btn-group" role="group" aria-label="" style={emojiGroup}>
                                <button type="button"
                                        className="btn btn-light"
                                        onClick={this.onSmileReactionSelected}>
                                    <span role="img" style={emojiStyle} aria-label="">😃</span>
                                </button>

                                <button type="button"
                                        className="btn btn-light"
                                        onClick={this.onSadReactionSelected}>
                                    <span role="img" style={emojiStyle} aria-label="">🙁</span>
                                </button>

                                <button type="button"
                                        className="btn btn-light"
                                        onClick={this.onAngryReactionSelected}>
                                    <span role="img" style={emojiStyle} aria-label="">😠</span>
                                </button>
                            </div>
                        </div>

                        <button type="submit"
                                className="btn btn-light"
                                style={sendButtonStyle}>Send
                        </button>
                    </form>
                </div>

                <div className="row justify-content-center">
                    <div
                        className={`col-6 align-self-center alert alert-${this.state.status} alert-dismissible fade ${this.state.alertShown}`}
                        role="alert" style={alertStyle}>
                        <strong>{this.state.alertHeader}</strong> {this.state.alertMessage}
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}