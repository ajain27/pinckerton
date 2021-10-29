/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./Search.css";
import Results from "./Results";

export default function SearchResults() {
  const [searchTerm, setSearchTerm] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const URL = "https://pinkerton-api.azurewebsites.net/search";
  const body = {
    searchText: searchTerm,
    // filter: [{"name": "CategoryId", "value": "6516"}, {"name": "City", "value": "Melbourne"}]
  };

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }

  const handleSearch = async () => {
    const data = await axios.post(URL, body).then((res) => {
      return res.data;
    });
    clear();
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