import './App.css';
import ListadoProductos from './components/ListarProductos';
import AgregarProducto from './components/AgregarProducto';
import { BrowserRouter as Router,Route, Link, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Container>
      <header>
        <nav className="navbar navbar-light bg-light">
          <Link className="navbar" to="/">Inicio</Link>
          <Link className="navbar" to="/Productos">Listar Productos</Link>
          <Link className="navbar" to="/Agregar">Agregar Producto</Link>
        </nav>
      </header>
      </Container>
      <Container>
      <main>
      <Switch>
        <Route path="/Productos">
          <ListadoProductos></ListadoProductos>
        </Route>
        <Route path="/Agregar">
          <AgregarProducto></AgregarProducto>
        </Route>
        
        <Route path="/">
          <h1>DIAVAMEDIC</h1>
        </Route>
      </Switch>
     </main>
     </Container>
     
    </Router>
  );
}

export default App;
