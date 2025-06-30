import { useEffect, useState } from "react";
import "./autocomplete.css";
export default function CustomeAutocomplete() {
  const [dataList, setDataList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [cache, setCache] = useState({});
  async function fetchSearchRecord(searchInput) {
    if (cache[searchInput]) {
      setDataList(cache[searchInput]);
      return;
    }
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${searchInput}`
    );
    const data = await response.json();
    setDataList(data.recipes);
    setCache((prev) => ({ ...prev, [searchInput]: data.recipes || [] }));
  }
  useEffect(() => {
    if (!searchInput.trim()) {
      setDataList([]);
      return;
    }
    const timer = setTimeout(() => {
      fetchSearchRecord(searchInput);
    }, 200);
    return () => clearTimeout(timer);
  }, [searchInput]);
  const onKeyDownHandler = (e) => {
    console.log(e);
  };
  const onBlurHandler = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, 50);
  };
  return (
    <div>
      <div
        style={{ textAlign: "center", fontWeight: "700", paddingTop: "5px" }}
      >
        Autocomplete Search
      </div>
      <div className="container-parent">
        <div>
          <input
            value={searchInput}
            className="input-search"
            placeholder="Search..."
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={() => setIsVisible(true)}
            onBlur={onBlurHandler}
          />
        </div>

        {isVisible && (
          <div className="list-parent">
            {dataList.length > 0 &&
              dataList.map((item) => {
                return (
                  <div
                    className="list-item"
                    key={item.id}
                    onClick={() => {
                      setSearchInput(item.name);
                      setIsVisible(false);
                    }}
                    onKeyUp={onKeyDownHandler}
                  >
                    {item.name}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}
