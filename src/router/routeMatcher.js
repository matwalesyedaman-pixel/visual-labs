import { getExperiment } from '../data/experimentsData.js'

const SUPPORTED_CLASSES = new Set(['11'])
const SUPPORTED_SUBJECTS = new Set(['physics', 'chemistry', 'biology'])

/**
 * URL Route Parser for Visual Labs Educational Platform
 * Matches paths to distinct page views and strictly validates URL parameters.
 */
export function parseRoute(pathname) {
  // Normalize path (strip trailing slash unless root)
  const path = pathname.length > 1 && pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname

  // 1. Home
  if (path === '' || path === '/') {
    return { name: 'home', params: {} }
  }

  // 2. Class Selection
  if (path === '/classes') {
    return { name: 'classes', params: {} }
  }

  // 3. Match /classes/:classId
  const classMatch = path.match(/^\/classes\/([^/]+)$/)
  if (classMatch) {
    const classId = classMatch[1]
    if (!SUPPORTED_CLASSES.has(classId)) {
      return { name: 'not-found', params: { path } }
    }
    return { name: 'subjects', params: { classId } }
  }

  // 4. Match /classes/:classId/:subjectId
  const subjectMatch = path.match(/^\/classes\/([^/]+)\/([^/]+)$/)
  if (subjectMatch) {
    const [, classId, subjectId] = subjectMatch
    if (!SUPPORTED_CLASSES.has(classId) || !SUPPORTED_SUBJECTS.has(subjectId)) {
      return { name: 'not-found', params: { path } }
    }
    return { name: 'experiment-library', params: { classId, subjectId } }
  }

  // 5. Match /classes/:classId/:subjectId/:experimentId
  const expMatch = path.match(/^\/classes\/([^/]+)\/([^/]+)\/([^/]+)$/)
  if (expMatch) {
    const [, classId, subjectId, experimentId] = expMatch
    if (!SUPPORTED_CLASSES.has(classId) || !SUPPORTED_SUBJECTS.has(subjectId)) {
      return { name: 'not-found', params: { path } }
    }
    const experiment = getExperiment(subjectId, experimentId)
    if (!experiment) {
      return { name: 'not-found', params: { path } }
    }
    return {
      name: 'experiment-dashboard',
      params: { classId, subjectId, experimentId },
    }
  }

  // 6. 404 Not Found
  return { name: 'not-found', params: { path } }
}
