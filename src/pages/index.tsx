import Head from 'next/head'
import { ExperienceList } from '../components/ExperienceList'
import { Header } from '../components/Header'
import { JobsDone } from '../components/JobsDone'
import { RepositoryList } from '../components/RepositoryList'
import { ContactMe } from '../components/ContactMe'

export default function Home() {
  return (
    <>
    <Head>
      <title>Dev | João Marcos</title>
    </Head>
    <Header />
    <main>
      <JobsDone />
      <RepositoryList />
      <ExperienceList />
      <ContactMe />
    </main>
    </>
  )
}
