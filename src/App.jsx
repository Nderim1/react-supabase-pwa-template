import ModeToggle from '@/theme/modal-toggle'
import useDummyData from './services/dummyData'
import { Outlet } from '@tanstack/react-router'

const App = () => {
  const { data } = useDummyData()
  console.log(data)

  return (
    <div className='flex flex-col w-[600px] m-auto items-center gap-2'>
      <span className='text-4xl'>Hi!</span>
      <div className='flex flex-col gap-1'>
        <span>I have created this starter kit to get up and running as quickly as possible for with project where SSR and SEO are not relevant.</span>
        <span>You can customize it however it suits your case best.</span>
        <span>Please consider contributing to the project on Github.</span>
        <p className='mt-8 mb-4 text-xl'>The tech:</p>
        <ul className='flex flex-col gap-3'>
          <li>- Vite</li>
          <li>- Supabase</li>
          <li>- ReactJS</li>
          <li>- Jotai</li>
          <li>- Tanstack Query</li>
          <li>- Tanstack Router</li>
          <li>- TailwindCSS</li>
          <li>- Shadcn</li>
          <li>- PWA mode</li>
          <li>- Signin/Signup</li>
          <li className='flex gap-2'>- Dark/Light mode  <ModeToggle /></li>
        </ul>
        <span className='mt-6 text-sm'>This kit does not include: Typescript, testing, meta frameworks (Next, SvelteKit, etc), analytics.</span>
      </div>
      <Outlet />
    </div>
  )
}

export default App
