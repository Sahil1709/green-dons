import Image from 'next/image'
import Link from 'next/link'
import { Button } from "antd"

export default function Home() {
  return (
    <div className='text-center justify-center align-center'>
      <div className='text-9xl text-bold text-slate-800' >HomePage Under construction⚠️ . <br />Please visit our dashboard 🥲</div>
      <Button href="/dashboard" size='large' type="primary">Dashboard</Button>
    </div>
  )
}
