import App from "@/App"
import { RootRoute, Route, Router } from "@tanstack/react-router"

const rootRoute = new RootRoute({
  component: App,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
})

const routeTree = rootRoute.addChildren([indexRoute])
const router = new Router({ routeTree })

export default router
