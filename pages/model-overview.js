import React from 'react';
import LayoutModelOverview from '../components/LayoutModelOverview';
import Navigation from '../components/Navigation'


class Modeloverview extends React.PureComponent {
    state = {  }
    render() { 
        return ( 
<>
    <Navigation />
    <LayoutModelOverview />
</>
         );
    }
}
 
export default Modeloverview;