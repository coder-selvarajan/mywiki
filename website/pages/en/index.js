/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.sitetitle}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            {/* <Button href="#try">Try It Out</Button> */}
            <Button href={docUrl('javascript/basics')}>Javascript</Button>
            <Button href={docUrl('swift/swift-basics-part1')}>Swift</Button>
            <Button href={docUrl('python/basics')}>Python</Button>
            <Button href={docUrl('nodejs-overview')}>Node JS</Button>
            {/* <Button href={docUrl('hadoop-overview')}>Hadoop</Button>
            <Button href={docUrl('linux-commands')}>Linux</Button> */}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h3><a href="/docs/developer-roadmap">Web Developer Roadmap 2019</a></h3>
        <MarkdownBlock>Click on the title to see the roadmap that details the inner components of frontend, backend and devops development process.</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              `Tasky: https://github.com/coder-selvarajan/tasky   
              TechieTab: https://github.com/coder-selvarajan/techie-tab  
              Build Vocabulary: https://github.com/coder-selvarajan/build_vocabulary  
              Grocery 2 Home: https://github.com/coder-selvarajan/grocery2home  
              MyWiki: https://github.com/coder-selvarajan/mywiki`,
            // image: `${baseUrl}img/undraw_code_review.svg`,
            image: `${baseUrl}img/project-list2.png`,
            imageAlign: 'left',
            contentAlign: 'left',
            title: 'My projects on Github',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: `Learn basic linux commands <a href="${baseUrl}\docs\\linux-commands">HERE</a>`,
            image: `${baseUrl}img/linux.jpg`,
            imageAlign: 'top',
            title: 'Linux',
          },
          {
            content: `Learn the basics of git & github <a href="${baseUrl}\docs\\git">HERE</a>.`,
            image: `${baseUrl}img/git.png`,
            imageAlign: 'top',
            title: 'Git',
          },
          {
            content: `Get started with Docker <a href="${baseUrl}\docs\\docker-overview">HERE</a>`,
            image: `${baseUrl}img/docker.png`,
            imageAlign: 'top',
            title: 'Docker',
          },
          {
            content: `Get started with Bigdata-Hadoop <a href="${baseUrl}\docs\\hadoop-overview">HERE</a>`,
            image: `${baseUrl}img/hadoop.png`,
            imageAlign: 'top',
            title: 'Hadoop',
          },
          
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          
          <Features />
          <LearnHow />
          <FeatureCallout />
          
          {/* <TryOut /> */}
          {/* <Description /> */}
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
