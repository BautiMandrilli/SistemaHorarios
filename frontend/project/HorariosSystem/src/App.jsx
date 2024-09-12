import { useEffect, useState } from "react"
import SideMenuDashboard from "./DashboardSideMenu.jsx"
import { DashboardList } from "./DashboardPage.jsx"



const NAVIGATION_EVENT = 'pushstate'

function navigate(where_to_go) {
    window.history.pushState({}, '', where_to_go)
    const navigationEvent = new Event(NAVIGATION_EVENT)
    window.dispatchEvent(navigationEvent)
}

function HomePage() {
    return(
        <>
        <h1>Hola!</h1>
        <p>Esta es la pagina principal</p>
        <button onClick={() => navigate('/about')}>Ir a sobre nosotros</button>
        </>
    )
}

function About() {
    return(
        <>
        <h1>Hola!</h1>
        <p>Esta es mi informacion personal!</p>
        <span>-------------------------</span>
        <button onClick={() => navigate('/home')}>Ir a la home page</button>
        </>
    )
}
function Hola() {
    return(
        <h1>Hola</h1>
    )
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
            {currentPath === '/' && <SideMenuDashboard />}

        </main>
        </>
    )
}

