import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../components/nav/Layout'
import UserNames from '../components/UserNames'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-red-300'> 
      <Layout>
        <div className="flex justify-center bg-primary">
          <UserNames />
        </div>
      </Layout>
    </div>
  )
}
