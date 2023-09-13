const routes = [
  {
    name: 'home' as const,
    path: '/'
  },
  {
    name: 'login' as const,
    path: `/login?redirect=${encodeURIComponent(location.href)}`
  }
]

export default routes
