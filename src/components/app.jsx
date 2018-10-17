import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: []
    };
  }

  componentDidMount() {
    axios.get("/images").then(images => {
      console.log(images.data[0].bigImg.data);
      this.setState({ imgs: images.data[0].bigImg });
    });
  }

  render() {
    var bufferBase64 = new Buffer(this.state.imgs, "binary").toString("base64");
    return (
      <div>
        <h1>Hello there react is working</h1>
        <img src={"data:image/jpg;" + { bufferBase64 }} />
      </div>
    );
  }
}

export default App;
