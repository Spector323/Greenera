import Header from "../components/Header";
import CategoriesItem from "../components/CategoryItem";
import "../styles/home.css";
import OrderPage from "./OrderPage";

export default function Home() {
    return (
        <div className="home">

            <Header />
            <main className="main">
                <div className="block-main">
                    <div className="cn-bl-main">
                        <h1>
                            Amazing Discounts <br />
                            on Garden Products!
                        </h1>
                        <a href="/products">
                            <button className="btn-bl-main">Check out</button>
                        </a>
                    </div>
                </div>
            </main>
            <CategoriesItem />
            <OrderPage />
            <
        </div>
    )
}