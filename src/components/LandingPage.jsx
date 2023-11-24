import Beneficios from "./Beneficios";
import Conteudo from "./Conteudo";
import Cursos from "./Cursos";
import Depoimentos from "./Depoimentos";
import Duvidas from "./Duvidas";
import Footer from "./Footer";
import Informativo from "./Informativo";
import Hero from "./Hero";
import Header from "./Header";
import Pagamento from "./Pagamento";


function LandingPage() {

    return (
        <>
            <Header />
            <Hero />
            <Conteudo />
            <Informativo />
            <Cursos />
            <Depoimentos />
            <Beneficios />
            <Pagamento />
            <Duvidas />
            <Footer />

        </>
    )
}

export default LandingPage;