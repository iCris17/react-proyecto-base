import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LandingPageBody from "../LandingPageBody/LandingPageBody";
/*import CategoryFilters from "../CategoryFilters/CategoryFilters";
import Products from "../Products/Products"*/

const LandingPage = () => {
    return(
        <>
            <Header></Header>
            <LandingPageBody></LandingPageBody>
            <Footer></Footer>
            {/*<CategoryFilters></CategoryFilters>
            <Products></Products>*/}
        </>
    );
}

export default LandingPage;