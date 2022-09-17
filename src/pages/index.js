import React from 'react'

import Layout from '../components/layout'
import Blurb from '../components/blurb'
import Hero from '../components/hero'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      caption="I like helping designers and engineers build cool stuff that can be used by everyone."
    />
    <Blurb
      background="primary-inverse"
      heading={`Solving problems with systems`}
      caption={`Over the past six years I have helped build React based design systems at multiple companies with components used daily by hundreds of engineers and millions of users.`}
      href="/designSystems/"
      linkText="My work with Design Systems"
    />
    <Blurb
      heading={`I love working on websites`}
      caption={`Creating things is a passion of mine. I usually have something going on the side whether it's a local project or building the best colorized sudoku app on the internet.`}
      href="/otherProjects/"
      linkText="Some of my favorite projects"
    />
    <Blurb
      background="secondary-inverse"
      heading={`Get to know a little more about me`}
      caption={`I work full-time from beautiful Denver Colorado. I hope you'll swing by for coffee sometime. Here's a more formal introduction featuring my work history if you can't make it.`}
      href="/resume/"
      linkText="My bio and resume"
    />
  </Layout>
)

export default IndexPage
