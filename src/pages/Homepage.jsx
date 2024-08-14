import { Link } from "react-router-dom";
import "../styles/Homepage.scss";

export default function Homepage () {
    return (
        <section className="main">
            <div className="hero-content">
                <h2>Let&apos;s get stylish.</h2>
                <Link to="shop">SHOP NOW</Link>
            </div>
        </section>
    )
}