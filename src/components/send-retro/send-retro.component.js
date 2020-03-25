import * as React from "react";

export default class SendRetroComponent extends React.Component {
    render() {
        const formStyle = {
            fontFamily: "Roboto",
            marginTop: "10%",
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

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <form className="col-6 align-self-center" style={formStyle}>
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

                            <div className="col">
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                        </div>

                        <div className="btn-group" role="group" aria-label="" style={changeTextAlign}>
                            <button type="button" className="btn btn-light bi bi-text-indent-right">
                                <i className="fas fa-align-left"/>
                            </button>
                            <button type="button" className="btn btn-light">
                                <i className="fas fa-align-right"/>
                            </button>
                        </div>

                        <textarea className="form-control" rows="5" placeholder="Message"/>

                        <div className="col">
                            <div className="btn-group" role="group" aria-label="" style={emojiGroup}>
                                <button type="button" className="btn btn-light">
                                    <span role="img" style={emojiStyle} aria-label="">😃</span>
                                </button>
                                <button type="button" className="btn btn-light">
                                    <span role="img" style={emojiStyle} aria-label="">🙁</span>
                                </button>
                                <button type="button" className="btn btn-light">
                                    <span role="img" style={emojiStyle} aria-label="">😠</span>
                                </button>
                            </div>
                        </div>

                        <button type="button" className="btn btn-light" style={sendButtonStyle}>Send</button>
                    </form>
                </div>
            </div>
        );
    }
}