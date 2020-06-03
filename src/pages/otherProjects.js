import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Article from '../components/article'
import Note from '../components/note'
import Link from '../components/link'

const OtherProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Article>
      <h1>Projects</h1>
      <Note>This page is under construction! One day it will lead you to lengthy descriptions of projects and beautiful illustrations. For now, it's pretty basic.</Note>
      <h2>Sudoku Color</h2>
      <p>Back in my college days, I would occasionally go to my roommate's house on the weekend. He had a Sudoku board game where all of the tiles were colors instead of numbers. This project was a love letter to those evenings spent solving puzzles</p>
      <p>As it turns out, conveying information solely by color isn't great practice for accessibility. So this board has numbers in addition to colors. A lot of my work on design systems is stateless, so this whole project was an exercise in using redux. I also was able to use emotion for dynamic styling. Be sure to open the sidebar and select a theme you like :) Also, there are fabulous prizes for completing puzzles.</p>
      <Link as="a" href="https://colorfulpuzzles.com" target="_blank">Sudoku Color</Link>
      <h2>Tava Health</h2>
      <p>Tava is a startup that is working to make mental health more inclusive. I gave them a hand with some feature work as well as making their application fully responsive. I also spent time teaching and implementing accessibility best practices. The application requires registration to use and the repo is private so I actually don't have much to show you. But I <i>can</i> at the very least point you to the responsive <Link as="a" href="https://app.tavahealth.com/" target="_blank">login page</Link>. Isn't it a beautiful?</p>
    </Article>
  </Layout>
)

export default OtherProjectsPage