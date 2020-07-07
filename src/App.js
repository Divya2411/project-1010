import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Resume from './components/Resume';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import './App.css';



function App() {
  return(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div className='app-container'>
          <Nav />
            <Route path='/contact' component={Container} 
                onEnter={function(){
                    document.getElementById("contact").scrollIntoView();
                    }
                }
            />
            <Route path='/work' component={Container} 
                onEnter={function(){
                    document.getElementById("work").scrollIntoView();
                    }
                }
            />
            <Route path='/about' component={Container} 
                onEnter={function(){
                    document.getElementById("about").scrollIntoView();
                    }
                }
            />
            <Route path='/' component={Container} 
                onEnter={function(){
                    document.getElementById("home_id").scrollIntoView();
                    }
                }
            />
        </div>
      </BrowserRouter>
    </Provider>,
    document.querySelector('#app')
  );

//   return (
//     <BrowserRouter>
    
//     <Navbar/>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/about" component={About} />
//       <Route exact path="/services" component={Services} />
//       <Route exact path="/resume" component={Resume} />
//       <Route exact path="/work" component={Work} />
//       <Route exact path="/contact" component={Contact} />
//       <Footer/>
            
    
    
// </BrowserRouter>
//  );
}

export default App;
