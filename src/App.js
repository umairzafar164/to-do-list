import React from "react";
class App extends React.Component {
  state = { text: "", array: [], dec:'' };
  
  taskHandler = (e) => {
    this.setState({ text: e.target.value });
  };
  addHandler = () => {
    const ary = [...this.state.array, this.state.text];
    this.setState({ array: ary });
    this.setState({ text: "",dec:'' });
  };
  onDelete = (t) => {
    const text = this.state.array.filter((t) => this.state.array !== t);
  };
  renderedList = () => {
    return this.state.array.map((t) => (
      <div  style={{textDecoration:this.state.dec}} className="ui bulleted list">
        {t}{" "}
        <button
          onClick={() => {
            const text = this.state.array.filter((item) => item !== t);
            this.setState({ array: text });
          }}
          className="ui button red"
        >
          {" "}
          Delete
        </button>
       
      </div>
    ));
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
