import React, { Component } from 'react';

class AddNumber extends Component {
  state = { size: 1 };
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input type="button" value='+' onClick={function(){
          this.props.onClick(this.state.size);
        }.bind(this)} />
        <input type="text" value={this.state.size} onChange={function(e){
          this.setState({ size: Number(e.target.value) });
        }.bind(this)} />
      </div>
    );
  }
}

export default AddNumber;