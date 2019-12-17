import React, {Component} from 'react';
import './Main.css';
import TextArea from "../../components/UI/TextArea/TextArea";
import Button from "../../components/UI/Button/Button";
import InputField from "../../components/UI/InputField/InputField";
import {connect} from "react-redux";
import {valueChanged} from "../../store/actions";

class Main extends Component {
    render() {
        return (
            <>
                <h2>encoder / decoder - vigenere cypher</h2>
                <div className="Main">
                    <label>text to encode
                        <TextArea
                            name="plain"
                            rows="10"
                            cols="30"
                            message={this.props.plain}
                            placeholder="Please enter text to encode..."
                            change={this.props.valueChanged}
                        />
                    </label>
                    <div className="MainControls">
                        <div className="MainControlsButtons">
                            <Button
                                btnType="left"
                                value="left"
                            />
                            <Button
                                btnType="right"
                                value="right"
                            />
                        </div>
                        <InputField
                            name="keyToCypher"
                            type="text"
                            placeholder="Please enter key to cypher..."
                            title={this.props.key}
                            change={this.props.valueChanged}
                        />
                    </div>
                    <label>text to decode
                        <TextArea
                            name="cypher"
                            rows="10"
                            cols="30"
                            message={this.props.cypher}
                            placeholder="Please enter text to decode"
                            change={this.props.valueChanged}
                        />
                    </label>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        plain: state.plain,
        cypher: state.cypher,
        keyToCypher: state.keyToCypher
    }
};

const mapDispatchToProps = dispatch => {
    return {
        valueChanged: (e) => dispatch(valueChanged(e)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Main);