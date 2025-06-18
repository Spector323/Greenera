import "../styles/header.css"


export default function Header() {
    return (
        <header className="header">
            <div className="cn-header">
                <a href="/">
                    <img src="./logo.svg" alt="" className="header-logo" />
                </a>

                <div className="header-nav">
                    <a href="">Main Page</a>
                    <a href="/categories">Categories</a>
                    <a href="">All products</a>
                    <a href="">All sales</a>
                </div>

                <a href="/">
                    <img src="./assets/icons/basket.svg" alt="" className="header-basket" />
                </a>

            </div>

            
        </header>
    )
}