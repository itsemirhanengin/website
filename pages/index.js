import { Layout } from '../components';

import { Blogs, Hero } from '../components';

function Home() {
  return (
    <Layout name="home">
      <Hero
        image="/wallpaper.png"
        smallTitle="Hi! I'm Emirhan Engin"
        title={(<h3>I work at <a href="https://basework.studio" target="_blank">Basework Studio</a> and I'm a Front-End Developer</h3>)}
        technologies={[
          {
            link: 'https://developer.mozilla.org/tr/docs/Web/JavaScript',
            icon: '/javascript.svg',
          },
          {
            link: 'https://graphql.org/',
            icon: '/graphql.svg',
          },
          {
            link: 'https://reactjs.org/',
            icon: '/react.svg',
          }
        ]}
      />
      <Blogs title="Blogs" items={[
        {
          slug: 'blog-hello-world',
          title: 'Hello World',
          introduction: 'As every developer/engineer knows, everything starts with “Hello World”. There is have many cha...',
          image: '/blog-detail.jpg',
        }
      ]} />
    </Layout>
  )
}

export default Home;