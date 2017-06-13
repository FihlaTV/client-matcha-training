import React, { Component } from 'react';

class UploadImage extends Component {
  state = {
    data: '',
  };

  handleFileSelect = (e) => {
    this.setState({ error: null });
    const [file] = e.target.files;
    const img = new Image();
    img.onerror = () => {
      // this.setState({ error: 'Invalid image' });
    };

    img.onload = () => {
      // const URL = window.URL || window.webkitURL;
      // img.src = URL.createObjectURL(file);
      this.setState({ image: file });
    };
  };

  render() {
    console.log(this.state);
    const { data } = this.state;
    return (
      <div>
        <div className="drop_zone">
          Drop image here
          <input
            type="file"
            name="img"
            accept="image/*"
            className="fileinput"
            onChange={this.handleFileSelect}
          />
        </div>
        <img src={data} alt="img" />
        <input type="submit" value="Submit!" />
        {/* <Ui.InputText name="img" placeholder="Imf" /> */}
      </div>
    );
  }
}

export default UploadImage;
