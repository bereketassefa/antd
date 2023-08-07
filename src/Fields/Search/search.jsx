import React, { useState } from 'react'

export default function Search({val, onChange, onKeyPress}) {
  const [searchInput,  setSearchInput] = React.useState("");
  const [results, setResults] = useState([]);
  const fetchData = (value) => {
    // console.log('Fetching data for:', value);
  
    fetch("http://localhost:8071/partially", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: value }) // Sending the search query in the request body
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        let results;
  
        if (json.length === 0) {
          results = "Not Found";
        } else {
          results = json.filter((item) => {
            return (
              value &&
              item &&
              item._source &&
              item._source.body &&
              item._source.body.party &&
              item._source.body.party.businessname &&
              item._source.body.party.businessname.toLowerCase().includes(value.toLowerCase())
            );
          });
        }
  
        setResults(results);
        console.log(results);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        // Handle errors, for example, set an error state or show a notification
      });
  };
  
  const handleChange = (value) => {
    setSearchInput(value);
    fetchData(value);
  };

  return (
    <div className='bg-red-100'>
        <input type="text" placeholder="Type to search..." value={searchInput} onChange={(e) => handleChange(e.target.value)}/>
       
    </div>
  )
}

