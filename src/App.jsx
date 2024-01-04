import ModeToggle from '@/theme/modal-toggle'
import useDummyData from './services/dummyData'
import { Link, Outlet } from '@tanstack/react-router'
import { Button } from './components/ui/button'

const App = () => {
  const { data } = useDummyData()
  console.log(data)

  return (
    <div className='flex p-4 flex-col max-w-[600px] m-auto items-center gap-2'>
      <span className='text-4xl'>Solid Starter Kit</span>
      <div className='flex flex-col gap-2'>
        <span>SSK is a solid (not the JS library) starter kit template to get up and running as quickly as possible.</span>
        <span>Use this starter kit if your application will be behind a login, and you have no need for SSR and SEO.</span>
        <p>Fork the template on
        <Button variant='link' className='text-xl'><Link to='https://github.com/Nderim1/solid-starter-kit' target='_blank'>Github</Link></Button>
        </p>
        <span className='text-sm'>{"Created with <3 by"}<Button variant='link'><Link to='https://twitter.com/nderim_top' target='_blank'>Nderim!</Link></Button></span>
        <p className='mt-8 mb-4 text-xl'>SSK provides:</p>
        <ul className='flex flex-col gap-3'>
          <li>- Authentication (Signin/Signup)</li>
          <li>- DB connection</li>
          <li>- Router</li>
          <li>- State management</li>
          <li>- Query/mutations management</li>
          <li>- Mobile/Offline mode (PWA)</li>
          <li>- Design system</li>
          <li className='flex gap-2'>- Dark/Light mode  <ModeToggle /></li>
        </ul>
        <p className='mt-8 mb-4 text-xl'>SSK uses:</p>
        <ul className='flex flex-col gap-3'>
          <li><a href="http://vitejs.dev" target='_blank' rel='noreferrer' className='underline'>- Vite</a></li>
          <li><a href="https://vite-pwa-org.netlify.app" target='_blank' rel='noreferrer' className='underline'>- Vite PWA Plugin</a></li>
          <li><a href="http://supabase.com" target='_blank' rel='noreferrer' className='underline'>- Supabase</a></li>
          <li><a href="http://react.dev" target='_blank' rel='noreferrer' className='underline'>- React</a></li>
          <li><a href="http://jotai.org" target='_blank' rel='noreferrer' className='underline'>- Jotai</a></li>
          <li><a href="http://tanstack.com/query/latest" target='_blank' rel='noreferrer' className='underline'>- Tanstack Query</a></li>
          <li><a href="http://tanstack.com/router/v1" target='_blank' rel='noreferrer' className='underline'>- Tanstack Router</a></li>
          <li><a href="http://tailwindcss.com" target='_blank' rel='noreferrer' className='underline'>- TailwindCSS</a></li>
          <li><a href="http://ui.shadcn" target='_blank' rel='noreferrer' className='underline'>- Shadcn</a></li>
        </ul>
        <span className='mt-6 text-sm mb-4'>SSK does not include: Typescript, testing, meta frameworks (Next, SvelteKit, etc), analytics.</span>
        
      </div>
      <Outlet />
    </div>
  )
}

export default App
