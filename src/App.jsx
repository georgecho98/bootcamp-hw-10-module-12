import { useState } from 'react'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('About Me')

  const renderPage = () => {
    if (currentPage ==='About Me') {
      return <About Me/>;
    }

    if (currentPage === 'Project') {
      return <Project />;

    }
    if (currentPage === ' ') {
      return < sss />;

    }

  }

  return (
    <>
    <header />
    <renderPage />
    <Footer />
    </>
  )
}

export default App