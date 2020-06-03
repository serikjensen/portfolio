import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Article from '../components/article'

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
    <Article>
      <h1>Work history</h1>
      <ul>
        <li>
          Instructure - Salt Lake City, Utah
          <ul>
            <li>Senior UI Developer | March 2020 – Present</li>
            <li>UI Developer | May 2016 – March 2020</li>
            <li>UX Intern | May 2015 – August 2015</li>
          </ul>
        </li>
        <li>
          Tava Health - Salt Lake City, Utah
          <ul>
            <li>Contract UI Developer | November 2019 – February 2020</li>
          </ul>
        </li>
        <li>
          Relevate - Manhattan, Kansas
          <ul>
            <li>Volunteer UI Developer | October 2017 – September 2019</li>
          </ul>
        </li>
        <li>
          CS256 Designing the User Experience - Provo, Utah
          <ul>
            <li>Teaching Assistant | January 2016 – April 2016</li>
          </ul>
        </li>
      </ul>
    </Article>
  </Layout>
)

export default ResumePage
