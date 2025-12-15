import { useQuery } from 'react-query';

// 1. Define the fetch function
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // 2. Use the useQuery hook
  // 'posts' is the unique key for caching
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    // Optional: Keep data fresh for 5 seconds to demonstrate caching vs refetching
    staleTime: 5000, 
    cacheTime: 1000 * 60 * 10, // Keep in cache for 10 mins
  });

  // 3. Handle Loading State
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // 4. Handle Error State
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // 5. Render Data
  return (
    <div className="posts-container">
      <h2 style={{ color: '#333' }}>Posts from JSONPlaceholder</h2>
      
      <button 
        onClick={() => refetch()} 
        style={{ 
          marginBottom: '20px', 
          padding: '10px 15px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Refetch Data
      </button>

      {/* List the posts */}
      {data.map(post => (
        <div key={post.id} style={{ 
          backgroundColor: '#f9f9f9', 
          border: '1px solid #ddd', 
          padding: '15px', 
          marginBottom: '10px',
          borderRadius: '8px' 
        }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', color: '#2c3e50' }}>{post.title}</h3>
          <p style={{ margin: 0, color: '#555' }}>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;