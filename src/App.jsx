import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DisclaimerModal from './components/DisclaimerModal.jsx'
import Home from './components/Home.jsx'
import TeamMemberPage from './components/TeamMemberPage.jsx'
import InsightArticlePage from './components/InsightArticlePage.jsx'

// The disclaimer is intentionally NOT persisted to sessionStorage or
// localStorage — per the firm's requirement, it must be shown again
// every time the site is loaded or refreshed, not just once per browser
// session. React state simply resets to "not accepted" on every load.
export default function App() {
  const [accepted, setAccepted] = useState(false)

  function handleAgree() {
    setAccepted(true)
  }

  useEffect(() => {
    document.body.style.overflow = accepted ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [accepted])

  if (!accepted) {
    return <DisclaimerModal onAgree={handleAgree} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team/:slug" element={<TeamMemberPage />} />
        <Route path="/insights/:slug" element={<InsightArticlePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}