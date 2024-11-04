import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import ProfilePhoto from './components/ProfilePhoto';
import ProjectList from './components/ProjectList';
import ProjectCarousel from './components/ProjectCarousel';
import ToggleTheme from './components/ToggleTheme';

function App() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <header className="header grid">
        <ToggleTheme />
        <div>
          <button onClick={() => i18next.changeLanguage('en')}>EN</button>
          <button onClick={() => i18next.changeLanguage('es')}>ES</button>
        </div>
      </header>
      <div className="main-content">
        <div className="photo-section">
            <ProfilePhoto />
            <h2 className="name-title">{t('name')}</h2>
        </div>
        <div className="description-section">
            <h2>{t('profile')}</h2>
            <p>{t('profile_text')}</p>
            <h3>{t('education_title')}</h3>
            <p>{t('education_text')}</p>
        </div>
        <div className="characteristics-section">
            <h2>{t('characteristics_title')}</h2>
            <p>{t('characteristics_text')}</p>
        </div>
        <div className="projects-gallery-section">
            <div className="projects-section">
            <h2>{t('projects')}</h2>
            <ProjectList />
            </div>
            <div className="carousel-section">
            <h2>{t('project_gallery')}</h2>
            <ProjectCarousel />
            </div>
        </div>
        </div>

    </div>
  );
}

export default App;
