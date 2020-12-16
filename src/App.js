import React from 'react';
import './App.css';
import Footer from './components/Home/Footer';
import Home from './components/Home/Home';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/Admin/Login';
import AboutUs from './components/AboutUs/AboutUs';
import BlogPage from './components/BlogPage/BlogPage';
import Restaurants from './components/Restaurants/Restaurants';
import Wines from './components/Wines/Wines';
import Formations from './components/Formations/Formations';
import Experiencies from './components/Experiencies/Experiencies';
import Contact from './components/Contact/Contact'
import UserService from './Services/UserService'
import WineService from './components/Wines/WineService'
import Admin from './components/Admin/Admin'
import CreateWine from './components/Wines/CreateWine'
import CreatePost from './components/CreatePost';




class App extends React.Component {

  state = {
    userLogged: {},
    user: {
      username: '',
      password: ''
    },
    wine: {
      image: '',
      name: '',
      year: '',
      origin: '',
      wineType: '',
      grapeType: '',
      wineSensation: '',
      cellar: '',
      pvp: ''
    }
  }

  service = new UserService();

  wineService = new WineService();

  submitLogin = (event) => {
    event.preventDefault();



    this.service.login(this.state.user.username, this.state.user.password)
      .then((loginUser) => {
        this.checkIfLoggedIn()
      })
      .catch((err) => {
        console.log(err);
      })

  };


  checkIfLoggedIn = () => {
    this.service.loggedin()
      .then((result => {
        this.setState({ userLogged: result });
      }))
      .catch((err) => {
        console.log(err);
      })
  };

  logOut = () => {
    this.service.logout()
      .then((result) => {
        this.checkIfLoggedIn();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  changeHandler = (_eventTarget) => {
    this.setState({ user: { ...this.state.user, [_eventTarget.name]: _eventTarget.value } });
  };

  changeUser = (_eventTarget) => {
    this.setState({ user: { ...this.state.user, username: _eventTarget.value } });
  }

  changeWine = (_eventTarget) => {
    this.setState({ wine: { ...this.state.wine, [_eventTarget.name]: _eventTarget.value } });
  }

  submitWine = (event) => {
    event.preventDefault();
    const wine = this.state.wine;
  


    this.wineService.createWine(wine)
      .then((wine) => {
        console.log(wine)
        
      })
      .catch((err) => {
        console.log(err);
      })


  }

  componentDidMount() {
    this.checkIfLoggedIn();
    console.log(this.checkIfLoggedIn())

  }



  render() {
    return (
      <div className="App">


        <Link to='/'>Inicio</Link>
        <br />
        <Link to='/blog'>Críticas Gastronomicas</Link>
        <br />
        <Link to='/restaurants'>Restaurantes</Link>
        <br />
        <Link to='/wines'>Vinos</Link>
        <br />
        <Link to='/formations'>Formaciones</Link>
        <br />
        <Link to='/experiencies'>Experiencias</Link>
        <br />
        <Link to='/aboutUs'>Sobre Nosotros</Link>
        <br />
        <Link to='/contact'>Contacto</Link>
        <br />
        <Link to='/admin'>Admin</Link>
        <br />
        <h3>{this.state.userLogged.username && `Welcome, ${this.state.userLogged.username}`}</h3>
        <br />
        {this.state.userLogged.username && <button onClick={() => this.logOut()}>Log Out</button>}



        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/blog' component={BlogPage} />
          <Route exact path='/restaurants' component={Restaurants} />
          <Route exact path='/wines' render={() => (
            <Wines userLogged={this.state.userLogged} />
          )} />
          <Route exact path='/formations' component={Formations} />
          <Route exact path='/experiencies' component={Experiencies} />
          <Route exact path='/aboutUs' component={AboutUs} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/admin' render={() => (
            this.state.userLogged.username
              ? <Admin userLogged={this.state.userLogged} />
              : <Redirect to='/login' />)
          } />
          <Route exact path='/login' render={() =>
            this.state.userLogged.username
              ? <Redirect to='/' />
              : <Login
                submitLogin={this.submitLogin}
                user={this.state.user}
                changeHandler={this.changeHandler}
              />

          } />


          <Route exact path='/post' render={() =>
            this.state.userLogged.username
              ? <CreatePost
              />
              : <Redirect to='/wines'
              />

          } />


          <Route exact path='/wines/create' render={() =>
            this.state.userLogged.username
              ? <CreateWine

              submitWine={this.submitWine}
                changeWine={this.changeWine}
              />
              : <Redirect to='/wines'
              />

          } />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
