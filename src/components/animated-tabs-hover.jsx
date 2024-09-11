import { useEffect, useState } from 'react'
import AnimatedBackground from './navbar/animated-background'

export function Tabs() {
  const TABS = ['Inicio', 'Proyectos', 'Sobre mí', 'Contacto']
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`flex flex-row rounded-[8px] p-2 transition-colors duration-700 border ${
        scrolled
          ? 'bg-zinc-900 border-zinc-800'
          : 'bg-zinc-950 border-transparent'
      }`}>
      <AnimatedBackground
        defaultValue={TABS[0]}
        className='rounded-lg bg-zinc-800'
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.3
        }}
        enableHover>
        {TABS.map((tab, index) => (
          <a
            key={index}
            data-id={tab}
            href={`#${tab.toLowerCase().replace(/\s+/g, '-')}`}
            className='px-2 py-0.5 transition-colors duration-300  text-zinc-400 hover:text-zinc-50'>
            {tab}
          </a>
        ))}
      </AnimatedBackground>
    </div>
  )
}
