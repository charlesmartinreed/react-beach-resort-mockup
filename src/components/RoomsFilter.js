import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

// get all the unique values
const getUniqueVals = (items, valType) => {
  return [...new Set(items.map(item => item[valType]))];
};

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  let types = getUniqueVals(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, idx) => {
    return (
      <option value={item} key={idx}>
        {item}
      </option>
    );
  });

  let guests = getUniqueVals(rooms, "capacity");
  guests = guests.map((item, idx) => {
    return (
      <option value={item} key={idx}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            className="form-control"
            name="type"
            id="type"
            value={type}
            onChange={handleChange}
          >
            {types}
          </select>
          {/* end select type */}

          {/* guests */}
          <label htmlFor="capacity">guests</label>
          <select
            className="form-control"
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handleChange}
          >
            {guests}
          </select>
          {/* end guests */}
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
