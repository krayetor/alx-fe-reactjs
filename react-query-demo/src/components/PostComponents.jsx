import { useQuery } from 'react-query';

// Define the fetch function
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

const PostsComponent = () => {
  // Use the useQuery hook
  // 'posts' is the unique key for this query
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 5, // Data stays in cache for 5 minutes
    staleTime: 1000 * 60, // Data is considered "fresh" for 1 minute (no background refetch)
    keepPreviousData: true,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="posts-container">
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => refetch()} 
          style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Refetch Data
        </button>
        <p>
           {/* Helper text to see caching in action */}
           <small>Notice that clicking "Refetch" triggers a network call, but toggling the component (in App.js) reads from cache instantly.</small>
        </p>
      </div>

      {data.map(post => (
        <div key={post.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
          <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>{post.title}</h3>
          <p style={{ margin: 0, color: '#666' }}>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;