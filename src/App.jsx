import { RouterProvider, useRouter } from './router/RouterContext'
import { parseRoute } from './router/routeMatcher'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Page Components
import HomePage from './pages/HomePage'
import ClassSelectionPage from './pages/ClassSelectionPage'
import SubjectSelectionPage from './pages/SubjectSelectionPage'
import ExperimentLibraryPage from './pages/ExperimentLibraryPage'
import ExperimentDashboardPage from './pages/ExperimentDashboardPage'
import NotFoundPage from './pages/NotFoundPage'

import './App.css'

function AppContent() {
  const { path } = useRouter()
  const route = parseRoute(path)

  const renderCurrentPage = () => {
    switch (route.name) {
      case 'home':
        return <HomePage />
      case 'classes':
        return <ClassSelectionPage />
      case 'subjects':
        return <SubjectSelectionPage classId={route.params.classId} />
      case 'experiment-library':
        return (
          <ExperimentLibraryPage
            classId={route.params.classId}
            subjectId={route.params.subjectId}
          />
        )
      case 'experiment-dashboard':
        return (
          <ExperimentDashboardPage
            classId={route.params.classId}
            subjectId={route.params.subjectId}
            experimentId={route.params.experimentId}
          />
        )
      default:
        return <NotFoundPage path={path} />
    }
  }

  return (
    <div className="visual-labs-app">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Dynamic Page Content based on URL */}
      <div className="app-main-viewport">
        {renderCurrentPage()}
      </div>

      {/* 3. Global Academic Colophon */}
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  )
}
