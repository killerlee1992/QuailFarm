import React, { Component } from 'react';

 class Cages extends Component {
   constructor(){
      super();
  }
   render() {
     return(
     <div>
     <div className='Titles'>Cages</div>
        <div className='cages'>
            
            <div><button>Cage 1</button></div>
            <div><button>Cage 2</button></div>
            <div><button>Cage 3</button></div>
            <div><button>Cage 4</button></div>
            <div><button>Cage 5</button></div>
            <div><button>Cage 6</button></div>
            
        </div>
     
        </div>
            );
        }
    }
export default Cages