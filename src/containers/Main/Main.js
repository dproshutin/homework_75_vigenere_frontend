import React, {Component} from 'react';
import './Main.css';
import TextArea from "../../components/UI/TextArea/TextArea";
import Button from "../../components/UI/Button/Button";
import InputField from "../../components/UI/InputField/InputField";

class Main extends Component {
    render() {
        return (
            <>
                <h2>encoder / decoder - vigenere cypher</h2>
                <div className="Main">
                    <label>text to encode
                        <TextArea></TextArea>
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
                        <InputField/>
                    </div>
                    <label>text to decode
                        <TextArea></TextArea>
                    </label>
                </div>
            </>
        );
    }
}

export default Main;