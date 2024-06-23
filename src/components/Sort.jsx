import React from "react";

export default function Sort({ handleFilter }) {
  return (
    <div className="flex items-stretch space-x-3">
      <select
        className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600 bg-white"
        name="sortBy"
        id="sortBy"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="">Publising Year</option>
        <option value="2008"> 2008</option>
        <option value="2009"> 2009</option>
        <option value="2010"> 2010</option>
        <option value="2012"> 2012</option>
        <option value="2013"> 2013</option>
        <option value="2014"> 2014</option>
      </select>
    </div>
  );
}
