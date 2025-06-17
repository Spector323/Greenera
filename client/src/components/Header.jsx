import "../styles/header.css"


export default function Header() {
    return (
        <header className="header">
            <div className="cn-header">
                <img src="./logo.svg" alt="" className="header-logo" />
                <div className="header-nav">
                    <a href="">Main Page</a>
                    <a href="">Categories</a>
                    <a href="">All products</a>
                    <a href="">All sales</a>
                </div>
                <div className="header-basket">
                    <img src="./assets/icons/basket.svg" alt="" />
                </div>
            </div>
        </header>
    )
}