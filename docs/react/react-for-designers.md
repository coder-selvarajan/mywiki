---
id: react-for-designers
title: REACT for Designers
sidebar_label: For Designers
---

## Pre-requisites & Setup

#### NodeJS

to install node you may need homebrew on mac.. install brew and run this command to install node
```sh
brew install node
```

#### Gatsby

Install Gatsby since it has good react starter project with router and all.. 
```sh
npm install --global gatsby-cli 
```

Create a new site with the below command
```sh
gatsby new my-app https://github.com/mengto/gatsby-starter-default/

cd my-app

//to start the server
gatsby develop
```
#### Design tool - Figma

Figma is good designer tool.. install that locally since the design assets for this course is provided in figma.. 

### Styles

#### Google fonts

Goto google fonts site and search for 'Open sans' font - select the font.. the site owuld show the popup with information on adding that font in our web app.. 

Just look for @import info and grab the specific import line and paste it in our css file.. 
then there will be usage sample.. just use it in our code..

### Tools

If you find error in loading urls in css.. you can install url-loader module.. 

```sh
npm install --save url-loader
```

#### Styled components

Styled Components have a unique syntax that mixes with the javascript and CSS

```sh
npm install --save styled-components@3.3.3
```

### CSS Tips

To display the background image in apt way
```css
.bgclass {
    background: url('../images/bghome.jpg');
    height: 920px;
    background-size: cover; /*to cover the sceen*/
    background-position: center; /*to position centre of the screen*/
}
```

### React Components

React components can be created in two ways

```

// First method (stateless)
import React from 'react'

const Section = props => { 
    <div>Hello welcome to Features section</div>
}
export default Section


// Second method (Statefull)
import React from 'react'
class Section extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>Hello welcome to Features section</div>
        )
    }
}
export default Section
```

### React States & Events

Following sample demonstrates the usage of 'State' in React. Basically it creates a top header menu and cover it with black background when the page is scrolled. 

```js
// components/header.js
import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hasScrolled: false
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = (event) => {
        const scrollTop = window.pageYOffset

        if (scrollTop > 50) {
            this.setState({ hasScrolled: true })
        } else {
            this.setState({ hasScrolled: false })
        }
    }

    render() {
        return (
        <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
            <div className="HeaderGroup">
                <Link to="/"><img width="30" /></Link>
                <Link to="/courses">Courses</Link>
                <Link to="/downloads">Downloads</Link>
                <Link to="/workshops">Workshops</Link>
                <Link to="/buy"><button>Buy</button></Link>
            </div>
        </div>
        )
    }
}


```

### Styled Components

Below sample demonstrates the waves at top and bottom of the section component by using styled component approach.

<!--DOCUSAURUS_CODE_TABS-->
<!--HTML-->
```html
<Section
  image={require('../images/wallpaper2.jpg')}
  logo={require('../images/logo-react.png')}
  title="React for Designers"
  text="Learn how to build a modern site " />
```

<!--Section.js-->
```js
import styled from 'styled-components';

const SectionGroup = styled.div`
    margin: 100px 0 0;
    background: url(${props => props.image});
    background-size: cover;
    height: 720px;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;
 
    @media (max-width: 640px) {
        height: 820px;
    }
`
const SectionLogo = styled.img`
    width: 128px;
    margin: 0 auto;
    align-self: end;
`

const SectionTitleGroup = styled.div`
    max-width: 800px;
    margin: 0 40px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 300px auto;
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;
 
    @media (max-width: 640px) {
        font-size: 40px;
    }
`

const SectionText = styled.p`
    color: white;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg)
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

const Section = props => (
    <SectionGroup image={props.image}>
        <WaveBottom><Wave /></WaveBottom>
        <WaveTop><Wave /></WaveTop>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)
export default Section
```

<!--Wave.js-->

```js
// Wave Component 
import React from 'react'

const Wave = () => (
    <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none">
        <path fill="white">
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s"
            values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

            M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
         
            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;" />
        </path>
    </svg>
)

export default Wave
```
<!--END_DOCUSAURUS_CODE_TABS-->

### JSON Data Usage

<!--DOCUSAURUS_CODE_TABS-->


<!--JS File-->
```js
import staticdata from '../../staticdata.json'

//within the render method you may use something like this..
{staticdata.cells.map(cell => (
  <Cell title={cell.title} image={cell.image} />
))}
```

<!--JSON File-->
```json
// staticdata.json
{
    "cells": [
        {
            "title": "Intro to React",
            "image": "https://cl.ly/1U1F170x3D0L/download/logo-react-small.png"
        },
        {
            "title": "Basic Styling in CSS",
            "image": "https://cl.ly/1U1F170x3D0L/download/logo-react-small.png"
        }
    ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

