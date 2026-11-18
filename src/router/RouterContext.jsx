import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const RouterContext = createContext({
  path: '/',
  navigate: () => {},
})

export function RouterProvider({ children }) {
  const [path, setPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/'
    }
    return '/'
  })

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname || '/')
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((to, { replace = false } = {}) => {
    if (typeof window === 'undefined') return
    if (to === window.location.pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      return
    }

    if (replace) {
      window.history.replaceState({}, '', to)
    } else {
      window.history.pushState({}, '', to)
    }
    setPath(to)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter() {
  const context = useContext(RouterContext)
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider')
  }
  return context
}

export function useNavigate() {
  return useRouter().navigate
}

export function Link({
  to,
  children,
  className = '',
  activeClassName = 'active',
  exact = false,
  onClick,
  ...props
}) {
  const { path, navigate } = useRouter()
  const isActive = exact
    ? path === to
    : path === to || (to !== '/' && path.startsWith(to))

  const handleClick = (e) => {
    // Preserve default behavior for open in new tab (Cmd/Ctrl click, right click, etc.)
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.altKey ||
      e.shiftKey
    ) {
      return
    }

    e.preventDefault()
    if (onClick) {
      onClick(e)
    }
    navigate(to)
  }

  const combinedClassName = [
    className,
    isActive ? activeClassName : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <a
      href={to}
      className={combinedClassName}
      onClick={handleClick}
      aria-current={isActive ? 'page' : undefined}
      {...props}
    >
      {children}
    </a>
  )
}
