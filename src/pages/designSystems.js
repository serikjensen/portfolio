import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Article from '../components/article'
import Link from '../components/link'
import Note from '../components/note'

const InstDocsLink = ({ href, children }) => (
  <Link as="a" target="_blank" href={`https://instructure.design/#${href}`}>{children}</Link>
)

const InstGitHubLink = ({ href, children }) => (
  <Link as="a" target="_blank" href={`https://github.com/instructure/instructure-ui/tree/master/packages/${href}`}>{children}</Link>
)

const DesignSystemsPage = () => (
  <Layout>
    <SEO title="Design Systems" />
    <Article>
      <h1>Design Systems</h1>
      <Note>This page is under construction! One day it will lead you to lengthy descriptions of projects and beautiful illustrations. For now, it's pretty basic.</Note>
      <h2>Instructure UI</h2>
      <p>While working at Instructure, a Salt Lake based education technology company, I helped build our in-house design system. <Link target="_blank" as="a" href="https://instructure.design/">Instructure UI</Link> is now used by hundreds of engineers and millions of users daily.</p>
      <h3>Components</h3>
      <p>The following are some strong examples of my component contributions. All components are (at a minimum) WCAG AA compliant, are internationalizable, feature thorough documentation, and have exhaustive unit tests.</p>
      <ul>
        <li>
          <b>DateInput</b>
          <ul>
            <li><InstDocsLink href="DateInput">Documentation</InstDocsLink></li>
            <li><InstGitHubLink href="ui-date-input/src/DateInput">Source Code</InstGitHubLink></li>
          </ul>
        </li>
        <li>
          <b>BaseButton</b> (see also the <InstDocsLink href="button-upgrade-guide">upgrade guide</InstDocsLink> for more details on how I refactored our buttons)
          <ul>
            <li><InstDocsLink href="BaseButton">Documentation</InstDocsLink></li>
            <li><InstGitHubLink href="ui-buttons/src/BaseButton">Source Code</InstGitHubLink></li>
          </ul>
        </li>
        <li>
          <b>Button</b>
          <ul>
            <li><InstDocsLink href="Button">Documentation</InstDocsLink></li>
            <li><InstGitHubLink href="ui-buttons/src/Button">Source Code</InstGitHubLink></li>
          </ul>
        </li>
        <li>
          <b>IconButton</b>
          <ul>
            <li><InstDocsLink href="IconButton">Documentation</InstDocsLink></li>
            <li><InstGitHubLink href="ui-buttons/src/IconButton">Source Code</InstGitHubLink></li>
          </ul>
        </li>
        <li>
          <b>Calendar</b>
          <ul>
            <li><InstDocsLink href="Calendar">Documentation</InstDocsLink></li>
            <li><InstGitHubLink href="ui-calendar/src/Calendar">Source Code</InstGitHubLink></li>
          </ul>
        </li>
        <li>
          <b>Responsive</b>
          <ul>
            <li><InstDocsLink href="Responsive">Documentation</InstDocsLink></li>
            <li><InstGitHubLink href="ui-responsive/src/Responsive">Source Code</InstGitHubLink></li>
          </ul>
        </li>
        <li>
          <b>DrawerLayout</b>
          <ul>
            <li><InstDocsLink href="DrawerLayout">Documentation</InstDocsLink></li>
            <li><InstGitHubLink href="ui-drawer-layout/src/DrawerLayout">Source Code</InstGitHubLink></li>
          </ul>
        </li>
        <li>
          <b>View</b>
          <ul>
            <li><InstDocsLink href="View">Documentation</InstDocsLink></li>
            <li><InstGitHubLink href="ui-view/src/View">Source Code</InstGitHubLink></li>
          </ul>
        </li>
      </ul>
      <h3>Accessibility Utilities</h3>
      <p>Creating accessible software is one of my core values as a developer. Some of my proudest contributions to our library involved creating components and utilities that make accessibility easy to implement for our developers.</p>
      <ul>
        <li>
          <b>Focusable</b>
          <ul>
            <li><InstDocsLink href="Focusable">Documentation</InstDocsLink></li>
            <li><InstGitHubLink href="ui-focusable/src/Focusable">Source Code</InstGitHubLink></li>
          </ul>
        </li>
        <li>
          <b>ScreenReaderFocusRegion</b>
          <ul>
            <li><InstDocsLink href="ScreenReaderFocusRegion">Documentation</InstDocsLink></li>
            <li><InstGitHubLink href="ui-a11y-utils/src/ScreenReaderFocusRegion.js">Source Code</InstGitHubLink></li>
          </ul>
        </li>
      </ul>
      <h3>Node Scripting</h3>
      <p>I spent a <i>lot</i> of time thinking about our upgrade process. One of the biggest challenges we faced while implementing our system was being able to improve our codebase while also making changes painless to adopt for our consumers. I created an entire suite of upgrade scripts to keep our consumers on the latest code.</p>
      <ul>
        <li>
          <b>instui-cli</b> - A command line utility with a well documented interface to make upgrade scripts easily executable
          <ul>
            <li><InstDocsLink href="instui-cli">Documentation</InstDocsLink></li>
            <li><InstGitHubLink href="instui-cli">Source Code</InstGitHubLink></li>
          </ul>
        </li>
        <li>
          <b>Prop Name Codemods</b> - I enhanced these to allow for swapping of values, for example changing an enum value of `red` to a boolean value of `true` etc.
          <ul>
            <li><InstDocsLink href="ui-codemods">Documentation</InstDocsLink></li>
            <li><InstGitHubLink href="ui-codemods/lib/helpers/replaceDeprecatedProps.js">Source Code</InstGitHubLink></li>
          </ul>
        </li>
        <li>
          <b>Import Codemods</b> - This allowed us to migrate consumers from default imports to es style named imports.
          <ul>
            <li><InstDocsLink href="ui-codemods">Documentation</InstDocsLink></li>
            <li><InstGitHubLink href="ui-codemods/lib/helpers/replaceDeprecatedImports.js">Source Code</InstGitHubLink></li>
          </ul>
        </li>
      </ul>
      <h2>Relevate</h2>
      <p>It is quite humble, but I learned so much on this project I have to at least mention it. A local non-profit here at Kansas State University was looking for UI help on their <Link as="a" href="http://myrelevate.com" target="_blank">website</Link>.</p>
      <p>I created <Link as="a" href="https://www.myrelevate.com/styleguide/" target="_blank">a small design system</Link> to help scale UI decisions and keep things consistent. I have learned a lot since working on this in past years so don't judge too harshly :) There were some unique challenges integrating components with django, and I ended up creating a custom template tag process that was able to encapsulate markup, styles, and js and deliver it consistently across the site.</p>
      <p>You can see the source for it <Link as="a" href="https://github.com/jhock/Relevate/tree/master/relevate_web_app/apps/components" target="_blank">here</Link>.</p>
    </Article>
  </Layout>
)

export default DesignSystemsPage