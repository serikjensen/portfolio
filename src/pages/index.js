import React from 'react'

import Layout from '../components/layout'
import Blurb from '../components/blurb'
import Hero from '../components/hero'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      heading="Hello! I'm Steve Jensen"
      caption="I like helping designers and engineers build cool stuff that can be used by everyone."
    />
    <Blurb
      background="primary-inverse"
      heading={`Solving problems with systems`}
      caption={`Over the past four years I have helped to grow a React based component library from a Spinner, TabList, and a couple of Buttons to a world-class design system used daily by hundreds of engineers and millions of users.`}
      href="/designSystems/"
      linkText="My work with Design Systems"
    />
    <Blurb
      heading={`I also make websites from the ground up`}
      caption={`Creating things is something I deeply enjoy. I usually have something going on the side whether it's a local project or building the best colorized sudoku app on the internet.`}
      href="/otherProjects/"
      linkText="Some of my favorite projects"
    />
    <Blurb
      background="secondary-inverse"
      heading={`Get to know a little more about me`}
      caption={`I hope you'll just stop by for coffee, but here's a more formal introduction featuring my work history if you can't make it. Believe me, the coffee would be more fun.`}
      href="/resume/"
      linkText="My bio and resume"
    />
  </Layout>
)

export default IndexPage
