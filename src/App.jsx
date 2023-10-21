import './App.scss';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {

  return (
    <div className="container">
      <Header />

      <Content />

      <Footer />
    </div>
  )
}

export default App
