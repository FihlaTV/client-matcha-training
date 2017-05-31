import React, { Component } from 'react';
import './aboutyou.css';

class Bio extends Component {
  state = {
    tag: '',
    tags: [],
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ tag: value });
  };

  handleSubmit = ({ target: { value }, keyCode }) => {
    // console.log(value);
    if (keyCode === 13 && !value.match(/^\s*$/)) {
      // console.log('dedans[', value, ']');
      const { tags } = this.state;
      if (tags.indexOf(value)) {
        this.setState({
          tags: this.state.tags.concat([value]),
          tag: '',
        });
      }
    }
  };
  handleDelete = (e) => {
    console.log(e.target);
  };

  render() {
    const { tag, tags } = this.state;
    console.log(this.state);
    return (
      <div>
        <textarea
          className="bioarea"
          name="bio"
          rows="2"
          cols="25"
          placeholder="Type Your Bio Here"
          maxLength="1000"
        />
        <input
          className="bioarea"
          name="tags"
          placeholder="Tags"
          onKeyUp={this.handleSubmit}
          onChange={this.handleChange}
          value={tag}
        />
        <ul className="tagsField">
          {tags.map(elm => (
            <div className="tagField" onClick={this.handleDelete} value={elm} key={elm}>#{elm}</div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Bio;
