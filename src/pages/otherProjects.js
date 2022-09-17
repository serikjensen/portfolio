import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Article from '../components/article'
import Link from '../components/link'

const OtherProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Article>
      <h1>Projects</h1>
      <h2>Vivian Landing Pages</h2>
      <p>Not a personal project, but I always enjoy the challenge and attention to detail required to match marketing's vision for our most high profile pages. Over time I developed a reputation for precision when working with design that made me sought after for implementing these projects.</p>
      <ul>
        <li>
          <Link as="a" href="https://vivian.com" target="_blank">Vivian homepage</Link>
        </li>
        <li>
          <Link as="a" href="https://vivian.com/about" target="_blank">Vivian about page</Link>
        </li>
        <li>
          <Link as="a" href="https://vivian.com/careers" target="_blank">Vivian careers page</Link>
        </li>
      </ul>
      <h2>Sudoku Color</h2>
      <p>Back in my college days, I would occasionally go to my roommate's house on the weekend. He had a Sudoku board game where all of the tiles were colors instead of numbers. This project was a love letter to those evenings spent solving puzzles</p>
      <p>As it turns out, conveying information solely by color isn't great practice for accessibility. So this board has numbers in addition to colors. A lot of my work on design systems is stateless, so this whole project was an exercise in using redux. I also was able to use emotion for dynamic styling. Be sure to open the sidebar and select a theme you like :) Also, there are fabulous prizes for completing puzzles.</p>
      <Link as="a" href="https://colorfulpuzzles.com" target="_blank">Sudoku Color</Link>
    </Article>
  </Layout>
)

export default OtherProjectsPage