import { useParams } from 'react-router-dom';

const BlogPost = () => {
  // Extract the 'id' from the URL
  const { id } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Blog Post</h2>
      <p>Now viewing post ID: <strong>{id}</strong></p>
      <p>Content for blog post {id}...</p>
    </div>
  );
};

export default BlogPost;