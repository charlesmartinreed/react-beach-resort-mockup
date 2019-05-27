import React, { Component } from "react";
import { RoomContext } from "../context";

// set up the static context type - values are stored in context object on this component
// we're pulling state from our RoomContext, in context.js, attaching to a context property in this component

class FeaturedRooms extends React.Component {
  static contextType = RoomContext;

  render() {
    const { greeting, name } = this.context;

    return (
      <div>
        {greeting} from {name} in featured rooms component
      </div>
    );
  }
}

export default FeaturedRooms;
