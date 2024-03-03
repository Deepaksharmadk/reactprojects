import axios from "axios";
import "./github.css";
import { useState, useEffect } from "react";

function Github() {
  // const data = useLoaderData()
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Deepaksharmadk")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div>
      Github
      <img src={data.avatar_url} alt="" />
    </div>
  );
}

export default Github;
