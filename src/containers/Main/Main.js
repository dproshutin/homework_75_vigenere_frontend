import React, {Component} from 'react';
import './Main.css';
import TextArea from "../../components/UI/TextArea/TextArea";
import Button from "../../components/UI/Button/Button";
import InputField from "../../components/UI/InputField/InputField";
import {connect} from "react-redux";
import {getInformed, getTextDecoded, getTextEncoded, valueChanged} from "../../store/actions";
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";

class Main extends Component {
    render() {
        if (this.props.loading) {
            return <Spinner/>
        }
        return (
            <>
                <Modal
                    show={this.props.informing}
                    closed={this.props.getInformed}
                >
                    <p>Please fill the password field</p>
                    <Button
                        btnType="read"
                        click={this.props.getInformed}
                        value="OK"
                    />
                </Modal>
                <h2>encoder / decoder - vigenere cypher</h2>
                <div className="Main">
                    <label>text to encode
                        <TextArea
                            name="plain"
                            rows="10"
                            cols="30"
                            message={this.props.plain}
                            change={this.props.valueChanged}
                        />
                    </label>
                    <div className="MainControls">
                        <div className="MainControlsButtons">
                            <Button
                                btnType="left"
                                click={this.props.getTextDecoded}
                            />
                            <Button
                                btnType="right"
                                click={this.props.getTextEncoded}
                            />
                        </div>
                        <label>password
                            <InputField
                                name="keyToCypher"
                                type="text"
                                placeholder="Please enter key to encrypt/decrypt..."
                                title={this.props.keyToCypher}
                                change={this.props.valueChanged}
                            />
                        </label>
                    </div>
                    <label>text to decode
                        <TextArea
                            name="cypher"
                            rows="10"
                            cols="30"
                            message={this.props.cypher}
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
        keyToCypher: state.keyToCypher,
        loading: state.loading,
        informing: state.informing
    }
};

const mapDispatchToProps = dispatch => {
    return {
        valueChanged: (e) => dispatch(valueChanged(e)),
        getTextEncoded: () => dispatch(getTextEncoded()),
        getTextDecoded: () => dispatch(getTextDecoded()),
        getInformed: () => dispatch(getInformed())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);