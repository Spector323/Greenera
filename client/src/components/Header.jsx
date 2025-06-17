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
                    <a href="">Categories</a>
                    <a href="">All products</a>
                    <a href="">All sales</a>
                </div>

                <a href="/">
                    <img src="./assets/icons/basket.svg" alt="" className="header-basket" />
                </a>

            </div>

            <nav className="nav">
                <div className="block-nav">
                    <div className="cn-bl-nav">
                        <h1>Amazing Discounts <br />
                             on Garden Products!
                        </h1>
                        <a href="/products">
                            <button className="btn-bl-nav">Check out</button>
                        </a>
                    </div>
                </div>
            </nav>
        </header>

    )
}