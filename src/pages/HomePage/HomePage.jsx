import Header from "../../components/Header"
import { Outlet } from "react-router-dom"
import "./HomePage.css"

const HomePage = () => {
  return (
    <>
        <Header/>
        <section className="page">
            <Outlet/>
        </section>
    </>
  )
}
export default HomePage