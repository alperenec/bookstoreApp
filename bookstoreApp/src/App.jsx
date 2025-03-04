import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import BookSearch from './components/BookSearch';
import BookPrice from './components/BookPrice';

function App() {
  return (
    <div className="container is-fluid">
      <BookForm />
      <BookSearch />
      <BookList />
      <BookPrice />
    </div>
  );
}

export default App;
