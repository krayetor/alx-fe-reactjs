import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostComponents';
import { useState } from 'react';

// Create a client
const queryClient = new QueryClient();

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>React Query Demo</h1>
        
        {/* Toggle Button to simulate navigating away and back */}
        <button 
          onClick={() => setShowPosts(!showPosts)}
          style={{ marginBottom: '20px', padding: '10px', cursor: 'pointer' }}
        >
          {showPosts ? 'Hide Posts' : 'Show Posts (Test Cache)'}
        </button>

        {showPosts && <PostsComponent />}
      </div>
    </QueryClientProvider>
  );
}

export default App;