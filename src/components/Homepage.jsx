import "../styles/Homepage.scss"
import Header from "./Header"
export default function Homepage () {
    return (
        <section className="main">
            <Header/>
            <div className="hero-content">
                <h2>Let&apos;s get stylish.</h2>
                <a href="#">SHOP NOW</a>
            </div>
        </section>
    )
}