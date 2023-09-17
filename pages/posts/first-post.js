import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';


// export const FirsPost = () = {
// 	return<h1>first post</h1>
// }

const FirstPost = () => {
	return(
		<>

			<Layout>

			<Head>
				<title>First post</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
		
			</Layout>
			<h1>first post</h1>
			<h2>
				<Link href="/">back to home</Link>
			</h2>
		</>
	)

}
export default FirstPost

