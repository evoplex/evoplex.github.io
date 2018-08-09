/**
 * Copyright 2018-present Evoplex
 * This source code is licensed under the GPL license found in
 * the LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const siteConfig = require(process.cwd() + '/siteConfig.js');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

class Download2 extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <Block layout="threeColumn" background="light">
      {[
        {
          imageLink: docUrl('download-linux.html', language),
          image: imgUrl('linux-logo.png'),
          imageAlign: 'top',
          title: 'Linux',
        },
        {
          imageLink: docUrl('download-windows.html', language),
          image: imgUrl('windows-logo.png'),
          imageAlign: 'top',
          title: 'Windows',
        },
        {
          imageLink: docUrl('download-mac.html', language),
          image: imgUrl('apple-logo.svg'),
          imageAlign: 'top',
          title: 'Mac OS',
        },
      ]}
      </Block>
    );
  }
}

const DownloadBlock = props => (
  <div className="blockElement alignCenter imageAlignTop threeByGridBlock">
    <div className="blockImage">
      <a href={props.link}><img src={props.imgurl} /></a>
    </div>
    <div className="blockContent">
      <a className="downloadBtn" href={props.link}>
        <img
          className="download-icon"
          src={imgUrl('download.svg')}
          width="18px"
          height="18px"
          alt="Download Evoplex"
        />
        {props.os}
      </a>

    </div>
  </div>
);

const Download = props => (
  <div className="container lightBackground paddingBottom paddingTop">
    <div className="wrapper">
      <div className="gridBlock">
        <DownloadBlock
          os="Linux"
          link={docUrl('download-linux.html', props.language)}
          imgurl={imgUrl('linux-logo.png')}>
        </DownloadBlock>
        <DownloadBlock
          os="Windows"
          link={docUrl('download-windows.html', props.language)}
          imgurl={imgUrl('windows-logo.png')}>
        </DownloadBlock>
        <DownloadBlock
          os="Mac OS"
          link={docUrl('download-mac.html', props.language)}
          imgurl={imgUrl('apple-logo.svg')}>
        </DownloadBlock>
      </div>
    </div>
  </div>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <div>
        <div className="splash">
          <div className="content">
            <h1>agent-based modeling,
            the right way!</h1>
            <h2>
              Evoplex is a fast, robust and extensible platform to implement
              either Agent&#8209;Based Models (ABM) or Multi-Agent Systems (MAS)
              imposing a theoretical-graph approach.
            </h2>
            <div className="row">
              <a className="btn primary" href="#download">
              <img className="download-icon" src={imgUrl('download.svg')}
                width="18px" height="18px" alt="Download Evoplex"
              />
                download
              </a>
              <a className="btn" href={docUrl('intro.html', language)}>
                get started
              </a>
            </div>
            <img
              src="/img/splash.png"
              srcSet="/img/splash.png 1x, /img/splash@2x.png 2x"
              className="splashScreen"
            />
            <div className="shadow" />
          </div>
        </div>
        <div className="content row">
          <div className="col">
            <img
              src="/img/evoplex0.1.0_project.jpg"
              srcSet="/img/evoplex0.1.0_project.jpg 1x, /img/evoplex0.1.0_project@2x.jpg 2x"
            />
          </div>
          <div className="col">
            <h4>Features</h4>
            <h3>Really Fast</h3>
            <p>
              Evoplex is simple, user-friendly and was built with performance
              in mind from the start. Just select a model, list your experiments
              and click on run. Evoplex will automatically distribute the experiments
              in parallel on multiple cores.
              It also provides a bunch of useful tools including interactive
              graph and grid views.
            </p>
            <a className="learnmore" href={docUrl('intro.html', language)}>
              Learn more
            </a>
          </div>
        </div>
        <div className="content row">
          <div className="col">
            <h4>Plugins</h4>
            <h3>Code Once, Run Everywhere</h3>
            <p>
              Have you ever had to run the same model for a wide range of
              different settings? Or had to run the same experiment multiple
              times to investigate the effects of randomness?
              If so, you might be tired of having to change your code or having
              to write ugly scripts to make simple things work.
              Evoplex changes the paradigm of implementing models
              by allowing you to do it only once and never touch it again.
            </p>
            <a className="learnmore" href="/docs/understand.html">
              Learn more
            </a>
          </div>
          <div className="col center">
            <img
              src="/img/evoplex0.1.0_plugins.jpg"
              srcSet="/img/evoplex0.1.0_plugins.jpg 1x, /img/evoplex0.1.0_plugins@2x.jpg 2x"
            />
          </div>
        </div>
        <div className="content row">
          <div className="col">
            <img
              src="/img/contribute.png"
              srcSet="/img/contribute.png 1x, /img/contribute@2x.png 2x"
            />
          </div>
          <div className="col">
            <h4>Open Source</h4>
            <h3>Contributing to Evoplex</h3>
            <p>
              Evoplex is a free and open-source software licensed under the
              GPLv3 terms. We encourage you to join the community and help
              us to improve Evoplex. There are many ways that you can contribute,
              beyond writing code.
            </p>
            <a className="learnmore" href="/docs/js-setup.html">
              Learn more
            </a>
          </div>
        </div>
        <div id="download">
            <Download language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
