/**
 * Copyright (c) 2017i-2018, Facebook, Inc.
 * Copyright (c) 2018-present, Evoplex
 *
 * This source code is licensed under the GPL license found in
 * the LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

class Help extends React.Component {
  render() {
    let language = this.props.language || '';
    const supportLinks = [
      {
        title: 'Browse Docs',
        content: `Learn more about Evoplex using the [official documentation.](${docUrl('intro.html', language)})`,
      },
      {
        title: 'Join the community',
        content: `
  * Ask questions in the [mailing list](https://groups.google.com/group/evoplex) or send an email to evoplex@googlegroups.com

  * You can follow and contact us on [Twitter](https://twitter.com/EvoplexOrg).

  * If chat is more your speed, you can join us on [Gitter](https://gitter.im/EvoplexOrg/evoplex).`,
      },
      {
        title: 'Bugs and Requests',
        content: `At our [GitHub repository](https://github.com/evoplex/evoplex), browse and submit [issues](https://github.com/evoplex/evoplex/issues) or [pull requests](https://github.com/evoplex/evoplex/pulls) for bugs you find or any new features you may want implemented. Be sure to also check out our [contributing guidelines](https://github.com/evoplex/evoplex/blob/master/CONTRIBUTING.md).`,
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Need help?</h1>
            </header>
            <p>If you need help with Evoplex, you can try one of the channels below.</p>
            <GridBlock contents={supportLinks} layout="threeColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Help;
