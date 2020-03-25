import * as React from "react";
import faker from "faker";
import RetroCardComponent from "../retro-card/retro-card.component";

export default class RetroViewerComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <RetroCardComponent reaction={"😃"}
                                    name={faker.name.findName()}
                                    message={faker.lorem.sentences()}
                                    createDate={faker.date.recent()}/>

                <RetroCardComponent reaction={"😠"}
                                    name={faker.name.findName()}
                                    message={faker.lorem.sentences()}
                                    createDate={faker.date.recent()}/>

                <RetroCardComponent reaction={"🙁"}
                                    name={faker.name.findName()}
                                    message={faker.lorem.sentences()}
                                    createDate={faker.date.recent()}/>
            </div>
        );
    }
}