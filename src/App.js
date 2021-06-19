import React from "react";
class App extends React.Component {
  state = { text: "", array: [] };
  taskHandler = (e) => {
    this.setState({ text: e.target.value });
  };
  addHandler = () => {
    const ary = [...this.state.array, this.state.text];
    this.setState({ array: ary });
    this.setState({ text: "" });
  };
  renderedList = () => {
    return this.state.array.map((t) => <div className='ui bulleted list'> {t}</div>);
  };
  render() {
    return (
      <div>
        <div className="ui large icon input">
          <label className="ui huge label"> Enter task : </label>
          <input
            className="ui input focus"
            placeholder="Type here"
            value={this.state.text}
            onChange={this.taskHandler}
          />
          <button className="ui button green" onClick={this.addHandler}>
            Add
          </button>
        </div>
        <div>{this.renderedList()}</div>
      </div>
    );
  }
}

export default App;
