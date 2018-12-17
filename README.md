# owners
Github: POC [github repo]
Author: Rekha Gupta (guptar8jan@gmail.com)

# shared-components

The goal of this library is to publish shared components that are built to satisfy commonly occuring use cases. Primary focus of library is encapsulate base feature and provide uniform customization options. Given the complexity and customization involved in UI/UX design, this librray component shys away from exact layout prescription and leaves room for customization via extension.

Other goals of this library are establish best practices & guidelines, and foster a culture of openness and team contributers. Owners/Maintainers [github repo] of this library aspire to publish a new version on regular cadence and as demand arises.

# versions

We follow sementic versioning, please check [semver]semver for guidelines.
Library is deployed and publish as npm package and can be installed same as other npm packages.
`npm install shared-components`

**There is probably a case for low fidelty option to provide transpiled version which could be installed into node_modules with a script in POC stages. Private NPM repo should be recommended as some point at project reaches maturity. Setting up a private npm repo is infrastructure project of considerable undertaking.**

# usage

### install the NPM package (if deploying as npm package)
`npm install shared-components`
### import the component and start using it.
```
import Histogram from 'shared-components/ui'
import Star from 'shared-component/ui';

class Summary extends React.Component {
  render() {
    const { reviewCounts, emptyColor, fillColor } = this.props;
    const star = <Star emptyColor={emptyColor} fillColor={fillColor} />

    return <Histogram reviewCounts={reviewCounts} star={star} />;
  }
}
```
### customization

#### customized css
Shared components uses [emotion js] for css customization. Emotion allows shared component to provide base css and override css in a clean and user friendly pattern.
```
import css from 'emotion';
import Star from 'shared-component/ui';

const customStar = css`
  background-color: grey;
  color: orange;
`;

....
....
const star = <Star css={customStar} emptyColor={emptyColor} fillColor={fillColor} />
```
#### customized events
Shared component offer featureset to bind all events passed in as `eventHandler` prop. Component would bind each event and handler provided. This is feature to alter the component functionality to desired handler code.
```
import Star from 'shared-component/ui';

const eventHandlers = [ {onHover: e => console.log('star on hover', e)} ]
`;
....
....
const star = <Star eventHandlers={eventHandlers} emptyColor={emptyColor} fillColor={fillColor} />
```

#### customized component
Shared component can be significantly customized. It is recommended to extend the shared component when making major customization. This would help with easier maintainence and testing of the code.
```
import css from 'emotion';
import Star from 'shared-component/ui';

const customStar = css`
  background-color: grey;
  color: orange;
`;
const eventHandlers = [ {onHover: e => console.log('star on hover', e)} ];

class SummaryStar extends Star {
  ....
  ....
  const star = <Star eventHandlers={eventHandlers} css={customStar} />
  ....
}
```

### preview and testing shared components locally

1. Download the github repo[1]. Checkout master.
2. Run `npm run preview` to run the Storybook demo. Storybook should auto-load on preferred browser on preview. All components with stories should auto load and should be ready for testing and interaction. 
3. Run `npm run test` to execute the unit tests for the project.


# tooling

1. css: [emotion js]
Emotion is a performant and flexible CSS-in-JS library. Building on many other CSS-in-JS libraries, it allows you to style apps quickly with string or object styles. It has predictable composition to avoid specificity issues with CSS.
2. preview and ui testing: [storybook]
Storybook is a UI development environment and playground for UI components. The tool enables users to create components independently and showcase components interactively in an isolated development environment.
3. unit testing: [jest] 
4. snapshot testing: shared component also use jest for [jest snapshot testing]

# contributing

Want to contribute? 
1. Please open a github issue and discuss with owners, including any and all use case and design details.
2. Once the need is identified, feel free to post a PR when you feel the code is mature and should be included in shared components. Please make sure patterns laid down are being followed, each component is required to be accompanied by README.md outiling goal and usage, story.js outlining common visual use cases, and spec.js outlining functional test. For simpler components, snapshot testing is acceptable instead of functional testing.

## preact

This library is developed with React, components themselves should work just fine under Preact. Famous last words! :)

[github repo]: https://github.com/guptar8jan/poc
[semver]: https://semver.org
[emotion js]: https://github.com/emotion-js/emotion
[storybook]: https://github.com/storybooks/storybook
[jest]: https://facebook.github.io/jest/
[jest snapshot testing]: https://jestjs.io/docs/en/snapshot-testing
