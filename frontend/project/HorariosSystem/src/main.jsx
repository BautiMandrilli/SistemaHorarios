import React from 'react'
import { createRoot } from 'react-dom/client'
import {  MainPage } from './MainPage.jsx'
import { Dashboard } from './DashboardPage.jsx'
import './MPStyles.css'
import './DashboardStyles.css'




createRoot(document.getElementById('root')).render(
  <>
  <MainPage />
  <Dashboard />
  </>
  

)
