import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'profile':
        return <ProfilePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === 'home' && <Header />}
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}

export default App;