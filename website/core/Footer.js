/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>How tos / Tips</h5>
            <a href={this.docUrl('javascript/build-chrome-extn')}>
              How to build a chrome Extension
            </a>
            <a href={this.docUrl('setup-coder-wiki')}>
              How to setup Coder Wiki locally
            </a>
            <a href={this.docUrl('tech-trends')}>
              Tech Trends / Tips
            </a>
            <a href={this.docUrl('ielts/speaking-strategies')}>
              IELTS Tips
            </a>
            <a href={this.docUrl('coder-health')}>
              Coder Health
            </a>
          </div>
          <div>
            <h5>Tools / Links</h5>
            <a href={this.docUrl('javascript/frameworks-converters')}>
              Frameworks &amp; Converters
            </a>
            <a href={this.docUrl('useful-links')}>
              Useful Links
            </a>
            <a href={this.docUrl('popular-github-repos')}>
              Popular Github Repos
            </a>
            <a href={this.docUrl('javascript/resources')}>
              Other Development Resources
            </a>
          </div>
          <div>
            <h5>Cheatsheet</h5>
            <a href={this.docUrl('cheatsheet/programming')}>
              Programming Cheatsheet
            </a>
            <a href={this.docUrl('cheatsheet/markdown')}>
              Markdown Cheatsheet
            </a>
            <br/>
            <h5>Connect</h5>
            {/* <a href={`${this.props.config.baseUrl}blog`}>Blog</a> */}
            <a href="https://github.com/coder-selvarajan" target="_blank">GitHub</a>
            
          </div>
        </section>

        {/* <a
          href="https://opensource.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/oss_logo.png`}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a> */}
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
