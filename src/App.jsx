import React, { useEffect, useState } from 'react';

function Card({ title, body }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Posts</h1>
      {posts.map(post => (
        <Card key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default App;
