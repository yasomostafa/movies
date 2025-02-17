import React from "react";
import axios from "axios";
import { useQuery } from '@tanstack/react-query';

function FetchOnClick() {
  // Function to fetch posts data
  const fetchData = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data;
  };

  // useQuery hook to fetch data
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['posts'], // unique query key
    queryFn: fetchData, // the fetchData function that will be called when refetch is triggered
    enabled: false, // disable automatic fetching on mount, to allow manual fetching
    staleTime: 5000, // optional: time to consider data fresh
  });

  // Handle button click to trigger fetch manually
  const handleFetchClick = () => {
    refetch(); // Trigger the fetchData function
  };

  if (isLoading) {
    return <div>טוען נתונים...</div>;
  }

  if (error) {
    return <div>אירעה שגיאה: {error.message || "שגיאה כלשהי"}</div>;
  }

  return (
    <div>
      <h1>פוסטים</h1>
      {/* Button to trigger data fetching */}
      <button onClick={handleFetchClick}>הבא פוסטים</button>

      {/* Render posts when data is fetched */}
      {data && (
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchOnClick;
