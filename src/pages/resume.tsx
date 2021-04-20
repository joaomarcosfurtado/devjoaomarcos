import Head from 'next/head';
import { ResumePage } from '../components/ResumePage'

export default function Resume () {
  return (
    <>
      <Head>
        <title>Dev JM | Currículo</title>
      </Head>
      <ResumePage />
    </>  
  );
}