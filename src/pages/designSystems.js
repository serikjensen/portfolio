import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Article from '../components/article'
import Link from '../components/link'

const DesignSystemsPage = () => (
  <Layout>
    <SEO title="Design Systems" />
    <Article>
      <h1>Design Systems</h1>
      <p>
        From the user-facing components all the way down to the build tooling, I have made contributions to every aspect of a design system. Most of my experience has been with <Link href="https://instructure.design" as="a" target="_blank">Instructure UI</Link>, but I have also leveraged them in <Link as="a" href="https://www.myrelevate.com/styleguide/" target="_blank">side projects</Link>. Here are some of my best projects:
      </p>
      <nav>
        <ul>
          <li><Link to="/otherProjects/">Creating an Accessible DateInput</Link></li>
          <li><Link to="/otherProjects/">Organizing Chaos: Refactoring Instructure Buttons</Link></li>
          <li><Link to="/otherProjects/">Easing the Upgrade Pain: Automated Import Codemods</Link></li>
        </ul>
      </nav>
    </Article>
  </Layout>
)

export default DesignSystemsPage