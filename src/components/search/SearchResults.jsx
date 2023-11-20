import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getProjectID } from "../../utils/getProjectID";
import NoSearchResults from "./NoSearchResults";

const SearchResults = () => {

    const {searchterm} = useParams();
  const [listOfResults, setListOfResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://academics.newtonschool.co/api/v1/linkedin/post?search={"content":${searchterm}}`,
        {
          headers: {
            projectID: `${getProjectID()}`,
          },
        }
      )
      .then((res) => setListOfResults(res.data))
      .catch((err) => console.log(err.response.data.message));
  },[]);

  return (<div style={{marginTop:"5rem"}}>
    {listOfResults.length>0?listOfResults.map((data,i)=>{
        <p key={i}>{data.author.name}</p>
    }):<NoSearchResults/>}
    </div>);
};

export default SearchResults;
