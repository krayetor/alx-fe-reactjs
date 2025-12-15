import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

// 1. Create a client instance
const queryClient = new QueryClient();

function App() {
  return (
    // 2. Wrap your app with the Provider and pass the client
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>React Query Data Fetching</h1>
        
        {/* 3. Render your component */}
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;