import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

/*
const Task = (values) => {
  return values.map((value) => <li>{value}</li>);
};
*/

function App() {
  // return Task([1, 2, 3, 4]);
  return (
    <div className="App">
      <Header className="Header" />
      <Content className="Content" />
      <Footer />
    </div>
  );
}

export default App;
