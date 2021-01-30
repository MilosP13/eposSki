import React from 'react';
import Meni from './delovi/Meni';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './delovi/Stranice/Home'
import SkiPass from './delovi/Stranice/SkiPass'
import Info from './delovi/Stranice/Info'
import ZaVas from './delovi/Stranice/ZaVas';
import Forma from './delovi/Stranice/Forma';
import Footer from './delovi/Footer';
import FormaK1 from './delovi/FormaK1';



function App() {
  return (
  <>
    <Router>
      <Meni />
      <Switch>
        
        <Route path='/' exact component={Home}/>
    
        <Route path='/ski-pass' exact component={SkiPass}/>
        <Route path='/info' exact component={Info}/>
        
        <Route path='/zaVas' exact component={ZaVas}></Route>
        <Route path='/forma' exact component={Forma}></Route>
        <Route path='/formak1' exact component={FormaK1}></Route>
        

        
      </Switch>
      <Footer />
    </Router>
    
  </>
  );
}

export default App;
