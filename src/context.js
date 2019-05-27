import React, { Component } from "react";

// gives access to Provider and Consumer
// Provider allows all components in tree to access shared information
// Consumer accesses shared information
const RoomContext = React.createContext();

// We'll be passing stateful values to the Provider
class RoomProvider extends React.Component {
  state = {
    greeting: "hello",
    name: "john"
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
