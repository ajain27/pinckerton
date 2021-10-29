
  /* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./Search.css";
import Results from "./Results";
export default function SearchResults({ filters }) {
  const [searchTerm, setSearchTerm] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [body, setBody] = useState();
  const URL = "https://pinkerton-api.azurewebsites.net/search";
  const { BuildingId, CategoryId, City } = filters;
  const bObj = {
    name: "BuildingId",
    value: BuildingId?.toString(),
  };
  const cObj = {
    name: "CategoryId",
    value: CategoryId?.toString(),
  };
  const cityObj = {
    name: "City",
    value: City?.toString(),
  };
  useEffect(() => {
    const localBody = {
      searchText: searchTerm,
      filter: [],
    };
    console.log("effect");
    if (bObj.value !== undefined) {
      localBody.filter.push(bObj);
    }
    if (cObj.value !== undefined) {
      localBody.filter.push(cObj);
    }
    if (cityObj.value !== undefined) {
      localBody.filter.push(cityObj);
    }
    if (localBody.filter.length === 0) {
      delete localBody.filter;
    }
    setBody({ ...localBody });
  }, [BuildingId, CategoryId, City, searchTerm]);
console.log(body);
function handleSearchTermChange(e) {
  setSearchTerm(e.target.value);
}
const handleSearch = async () => {
  const data = await axios.post(URL, body).then((res) => {
    return res.data;
  });
  // clear();
  setSearchResults(data.results);
};
function clear() {
  setSearchTerm(null);
}
return (
  <>
    <div className="minWidth300">
      <input
        type="text"
        className="mx-2 txtSearch"
        onChange={handleSearchTermChange}
        placeholder="Willow Search"
      />
      <Button
        type="button"
        variant="secondary"
        className="btnSearch"
        onClick={handleSearch}
      >
Search
</Button>
</div>
<div fluid className="willowSearch">
{searchResults && searchResults.length > 0 && (
  <Results data={searchResults} />
)}
</div>
</>
);
}