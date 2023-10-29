import Footer from './components/frontend/Layouts/Footer/Footer';
import Header from './components/frontend/Layouts/Header/Header';
function App(props) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
}

export default App;
