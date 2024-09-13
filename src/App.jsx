import Header from "./components/Header";
import Main from './components/Main';
import {useEffect, useState} from "react";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    };
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      <Header isMobile={isMobile}/>
      <Main />
    </>
  )
}

export default App
