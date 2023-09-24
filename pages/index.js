import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';

//この関数の中で、外部データを最初に読み込む
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
	props: {
	  allPostsData,
	},
  };
}


export default function Home({allPostsData}) {
	console.log('やあ')
	return (
	<Layout home>
		<Head>
			<title>{siteTitle}</title>
		</Head>
		<Link href="/posts/first-post">back to post</Link>


	  <section className={utilStyles.headingMd}>
		<p>[Your Self aIntroduction]</p>
		<p>
		  (This is a sample website - you’ll be building a site like this on{' '}
		  <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
		</p>
	  </section>
	  <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
	</Layout>
  );
}