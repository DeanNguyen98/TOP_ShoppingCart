import Navbar from "./Navbar"
import "../styles/Header.scss"

export default function Header() {
    return (
        <>
            <header className="header">
                <h1>NICE.</h1>
                <Navbar/>
            </header>
        </>
    )
}