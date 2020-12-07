import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import 'antd/dist/antd.css'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

import { Menu } from 'antd';
import { RocketOutlined, ContainerOutlined, TagOutlined, ContactsOutlined} from '@ant-design/icons';

const { SubMenu } = Menu;

class Navi extends React.Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home" icon={<RocketOutlined />}>
          首页
        </Menu.Item>
        <Menu.Item key="ariticles" icon={<ContainerOutlined />}>
          归档
        </Menu.Item>
        <Menu.Item key="tags" icon={<TagOutlined />}>
          标签
        </Menu.Item>
        <Menu.Item key="about" icon={<ContactsOutlined />}>
          <a href="https://github.com/ics091" target="_blank" rel="noopener noreferrer">
            关于
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   )
// }

export default function Home() {
  return(
    <Layout>
      <Navi />
      <Content>
        Content
      </Content>
      <Footer>
        Footer
      </Footer>
    </Layout>
  )
}
