import * as React from "react";

export default class RetroComponent extends React.Component {
    render() {
        const formStyle = {
            fontFamily: "Roboto",
            width: "40%",
            height: "40%",
            margin: "0 auto",
            padding: "3%",
            textAlign: "center",
            color: "#f35588",
            backgroundColor: "#fff591",
            borderRadius: "20px",
        }

        const textAreaStyle = {
            fontFamily: "Roboto",
            margin: "0 auto",
            fontSize: 18,
            maxWidth: "60%",
            maxHeight: "50%",
            resize: "none",
            marginBottom: "10%",
        }

        const sendButtonStyle = {
            fontFamily: "Pacifico",
            margin: "0 auto",
            fontSize: 28,
            marginTop: "10%",
            borderRadius: "12px",
            paddingRight: "2%",
            paddingLeft: "2%",
            color: "#f35588",
        }

        const emojiButton = {
            fontSize: 28,
            background: "none",
            border: "none"
        }

        return (
            <div style={formStyle}>
                <div>
                    <span>Sprint Iteration</span>
                    <br/>
                    <input placeholder='0' type="number" style={textAreaStyle}/>
                </div>
                <div>
                    <span>Name</span>
                    <br/>
                    <input placeholder='Full Name...' style={textAreaStyle}/>
                </div>
                <div>
                    <span>Message</span>
                    <br/>
                    <textarea placeholder='Write something...' style={textAreaStyle} cols="50" rows="4"/>
                </div>
                <div>
                    <span>Reaction</span>
                    <br/>
                    <button style={emojiButton}>😃</button>
                    <button style={emojiButton}>🙁</button>
                    <button style={emojiButton}>😧</button>
                </div>
                <button style={sendButtonStyle}>Send</button>
            </div>
        );
    }
}