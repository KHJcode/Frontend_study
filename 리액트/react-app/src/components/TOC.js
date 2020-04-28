import React, { Component } from 'react';
class TOC extends Component {
    render() {
      var data = this.props.data,
        lists = [],
        i = 0;
      while (i < data.length) {
        lists.push(
          <li key={data[i].id}>
            <a
              href={"/content/"+data[i].id}
              data-id={data[i].id}
              onClick={function(id, e){
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id);
              }.bind(this, data[i].id)}
            >{data[i].title}</a>
          </li>);
        i += 1;
      }
      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
}

export default TOC;