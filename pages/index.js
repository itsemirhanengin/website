import { Layout } from '../components';

import { Blogs, Hero } from '../components';

function Home() {
  return (
    <Layout name="home">
      <Hero />
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