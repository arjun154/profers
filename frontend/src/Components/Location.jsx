import React from "react";
import NodeGeocoder from "node-geocoder";

var options = {
  provider: "opencage",
  httpAdapter: "https",
  apiKey: "7d87f0d5a48f43b28198c3502c802704",
  formatter: "json",
};

var geocoder = NodeGeocoder(options);

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const showPosition = (position) => {
      geocoder.reverse(
        { lat: position.coords.latitude, lon: position.coords.longitude },
        function (err, res) {
          console.log(res);
        }
      );
    };
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  render() {
    return <div></div>;
  }
}

export default Home;
