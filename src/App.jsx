import './App.scss';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AppProvider from './context/AppContext';

function App() {

  return (
    <AppProvider>
      <div className="container">
        <Header />

        <Content />

        <Footer />
      </div>
    </AppProvider>
  )
}

export default App
