import { Container } from 'react-bootstrap'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ContatoScreen from './screens/ContatoScreen'
import OquefazemosScreen from './screens/OquefazemosScreen'
import EnderecoScreen from './screens/EnderecoScreen'
import MassagemScreen from './screens/MassagemScreen'
import PedrasScreen from './screens/PedrasScreen'
import NumerologiaScreen from './screens/NumerologiaScreen'
import DrenagemScreen from './screens/DrenagemScreen'
import ReflexologiaScreen from './screens/ReflexologiaScreen'
import BarrasScreen from './screens/BarrasScreen'
import TantricaScreen from './screens/TantricaScreen'
import ReikeScreen from './screens/ReikeScreen'
import CromoterapiaScreen from './screens/CromoterapiaScreen'


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/contato' component={ContatoScreen} exact />
          <Route path='/oquefazemos' component={OquefazemosScreen} exact />
          <Route path='/endereco' component={EnderecoScreen} exact />
          <Route path='/massagem-relaxante' component={MassagemScreen} exact />
          <Route path='/pedras-quentes' component={PedrasScreen} exact />
          <Route path='/taro-com-numerologia' component={NumerologiaScreen} exact />
          <Route path='/drenagem' component={DrenagemScreen} exact />
          <Route path='/reflexologia' component={ReflexologiaScreen} exact />
          <Route path='/barras-de-access' component={BarrasScreen} exact />
          <Route path='/terapia-tantrica' component={TantricaScreen} exact />
          <Route path='/reike' component={ReikeScreen} exact />
          <Route path='/cromoterapia' component={CromoterapiaScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
