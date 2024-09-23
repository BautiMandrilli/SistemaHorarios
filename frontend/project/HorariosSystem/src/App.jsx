import { useEffect, useState } from "react"
import SideMenuDashboard from "./DashboardSideMenu.jsx"
import { DashboardList } from "./DashboardPage.jsx"
import { MainPage } from "./MainPage.jsx"



const NAVIGATION_EVENT = 'pushstate'

function navigate(where_to_go) {
    window.history.pushState({}, '', where_to_go)
    const navigationEvent = new Event(NAVIGATION_EVENT)
    window.dispatchEvent(navigationEvent)
}





export function App () {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocarionChange = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener(NAVIGATION_EVENT, onLocarionChange)
        window.addEventListener('popstate', onLocarionChange)
        return () => {
            window.removeEventListener(NAVIGATION_EVENT, onLocarionChange)
            window.removeEventListener('popstate', onLocarionChange)
        }
    }, [])

    return (
        <>
        <main>
            {currentPath === '/dashboard' && <SideMenuDashboard />}
            {currentPath === '/welcome' && <MainPage />}
        </main>
        </>
    )
}

