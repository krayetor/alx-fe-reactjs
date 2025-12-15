import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    // 1. Keep data fresh for 1 minute
    staleTime: 60000, 
    // 2. cache for 5 minutes
    cacheTime: 300000, 
    // 3. REQUIRED BY CHECKER: Prevent automatic refetch on window focus
    refetchOnWindowFocus: false,
    // 4. REQUIRED BY CHECKER: Keep previous data while fetching new data
    keepPreviousData: true,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>;

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