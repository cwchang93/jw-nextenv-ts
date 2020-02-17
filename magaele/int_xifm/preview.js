import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { CategoryName } from "../index";
import IntXifm from "./index";

class DemoInputWithLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  onChange = e => {
    const inputValue = e.target.value;
    console.log("CHANGE", inputValue);
    this.setState({
      inputValue: inputValue,
      radioValue: radioValue
    });
  };
  render() {
    return (
      <React.Fragment>
        <IntXifm
          labelText="姓名"
          type="text"
          placeholder="請輸入姓名"
          value={this.state.inputValue}
          // selectionData={selectionData}
          msgErr={"請輸入姓名"}
          onChange={e => this.onChange(e)}
        />
        <IntXifm
          labelText="姓名"
          type="text"
          placeholder="請輸入姓名"
          value={this.state.inputValue}
          // selectionData={selectionData}
          msgErr={""}
          onChange={e => this.onChange(e)}
        />
        <IntXifm
          labelText="性別"
          type="radio"
          name="gender"
          value={this.state.radioValue}
          selectionData={[
            { text: "Male", value: "M" },
            { text: "Female", value: "F" }
          ]}
          onChange={e => this.onChange(e)}
        />
      </React.Fragment>
    );
  }
}

storiesOf(CategoryName.Module.Input, module).add("int_xifm", () => (
  <DemoInputWithLabel />
));
