import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Message from './Message';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/hello">Go to Hello World</Link>
      </nav>
      <Routes>
        <Route path="/hello" element={<Message />} />
      </Routes>
    </Router>
  );
}

export default App;