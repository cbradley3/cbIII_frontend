/*
 *
 * Home
 *
 */

import React from 'react';
import Responsive from 'react-responsive';
import Helmet from 'react-helmet';

export default class Home extends React.PureComponent {
  render() {
    const divStyle1={
      width:"100%",
      height:"900px",
    }
    const divStyle2={
      width:"25%",
      height:"900px",
      background:"rgba(0, 168, 39, 0.88)",
      zIndex:"100",
      WebkitTransform:"perspective(300px) rotateX(-30deg)",
      OTransform:"perspective(300px) rotateX(-30deg)",
      MozTransform:"perspective(300px) rotateX(-30deg)",
      WebkitTransformOrigin:"0% 50%",
      MozTransformOrigin:"0% 50%",
      OTransformOrigin:"0% 50%",
      transformOrigin:"0% 50%",
      /*transition:"all 1s ease-in-out",
      WebkitTransition:"all 1s ease-in-out",
      MozTransition:"all 1s ease-in-out",
      OTransition:"all 1s ease-in-out",
      msTransition:"all 1s ease-in-out",
      position:"absolute",
      transform:"translate(3em,0)",
      WebkitTransform:"translate(3em,0)",
      MozTransform:"translate(3em,0)",
      OTransform:"translate(3em,0)",
      msTransform:"translate(3em,0)",*/

    }
    const divStyle3={
      width:"10%",
      height:"900px",
      background:"rgba(0, 168, 39, 0.66)",
      zIndex:"0",
      display:"flex",
      flexDirection:"column",
      alignSelf:"right",
      WebkitTransform:"perspective(300px) rotateX(10deg)",
      OTransform:"perspective(300px) rotateX(10deg)",
      MozTransform:"perspective(300px) rotateX(10deg)",
      WebkitTransformOrigin:"0% 50%",
      MozTransformOrigin:"0% 50%",
      OTransformOrigin:"0% 50%",
      transformOrigin:"0% 50%",
    }
    const divStyle4={
      width:"100%",
      height:"600px",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
    }
    const mainStyle={
      display:"flex",
      flexDirection:"column",
    }
    const logoStyle={
      marginTop:"20%",
      marginLeft:"75%",
      height:"auto",
      width:"10%",
      display:"flex",
      flexDirection:"column",
    }

    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

      <main style={mainStyle}>

      <Responsive minDeviceWidth={1024}>
        <div style={divStyle1}>
          <img style={logoStyle} src="http://h4z.it/Image/7f303b_III_logo.jpg"/>
        </div>
      </Responsive>

      <Responsive minDeviceWidth={1024}>
        <div style={divStyle2}>
        </div>
      </Responsive>

      <Responsive minDeviceWidth={1024}>
        <div style={divStyle3}>
        </div>
      </Responsive>

      </main>

      </div>
    );
  }
}
