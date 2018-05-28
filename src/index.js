import React from "react";
import "./style.css";

class ReactReadMore extends React.Component {
    constructor() {
        super();
        this.state = {
            short: true
        }
    }
    render() {

        return (
            <div className="container">
                <div style={(this.state.short ? { maxHeight: ((this.props.maxLine) * 1.2) + 'em', } : {})} className="block-with-text">
                    {this.props.text}
                </div>
                <span className="ellipsis-text" onClick={() => { this.ellipsisOpen(); }}>{this.props.ellipsisText}</span>
            </div >
        );
    }
    ellipsisOpen() {
        this.setState({ short: !this.state.short });
    }
}

export default ReactReadMore;