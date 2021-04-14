import './App.css';
import Header from './components/Header'
import MainContianer from './components/MainContainer';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchForm />
      <MainContianer/>
    </div>
  );
}

export default App;
