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
      <h2>Vivian</h2>
      <Note><b>Note:</b> Vivian is a private repo so I am unable to show you quite as much of the source code compared to Instructure which is open source.</Note>
      <br />
      <p>I was hired at Vivian as the first UX Engineer, charged with implementing a design system for a startup that helps healthcare professionals find work. With sustained success saving developers time, standardizing UI, and expediting feature work, the company allocated more and more resources. Today, our UX Engineering team is composed of four full time developers maintaining components across both web and mobile platforms.</p>
      <Link as="a" target="_blank" href="https://vivian-storybook.s3.amazonaws.com/master/index.html">Storybook docs for our design system at Vivian</Link>
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
            <li><InstGitHubLink href="ui-a11y-utils/src/ScreenReaderFocusRegion.ts">Source Code</InstGitHubLink></li>
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
            <li><InstGitHubLink href="ui-codemods/lib/helpers/replaceDeprecatedProps.ts">Source Code</InstGitHubLink></li>
          </ul>
        </li>
        <li>
          <b>Import Codemods</b> - This allowed us to migrate consumers from default imports to es style named imports.
          <ul>
            <li><InstDocsLink href="ui-codemods">Documentation</InstDocsLink></li>
            <li><InstGitHubLink href="ui-codemods/lib/helpers/replaceDeprecatedImports.ts">Source Code</InstGitHubLink></li>
          </ul>
        </li>
      </ul>
    </Article>
  </Layout>
)

export default DesignSystemsPage