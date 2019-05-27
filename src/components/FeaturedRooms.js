import React from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

// set up the static context type - values are stored in context object on this component
// we're pulling state from our RoomContext, in context.js, attaching to a context property in this component

class FeaturedRooms extends React.Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => <Room key={room.id} room={room} />);

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading === true ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
