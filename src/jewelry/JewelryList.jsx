import { Link } from "react-router";

import useQuery from "../api/useQuery";

import { jewels as test } from "./JewelryDummyData.js";

import { useState, useEffect } from "react";

export default function JewelryList() {
    const {
      data: jewels = test,
      loading,
      error,
    } = useQuery("/jewelry", "jewelry");
  
    return (
      <ul>
        {jewels.map((jewel) => (
          <JewelryListItem key={jewel.id} jewel={jewel} />
        ))}
      </ul>
    );
  }
  
function JewelryListItem({ jewel }) {
    return (
        <li>
            <h2><Link to={"/jewelry/" + jewel.id}>{jewel.name}</Link></h2>
        </li>
      );
    }