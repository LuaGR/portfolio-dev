import AnimatedBackground from './navbar/animated-background'

export function Tabs() {
  const TABS = ['Inicio', 'Proyectos', 'Sobre mí', 'Contacto']

  return (
    <div className='flex flex-row rounded-[8px] p-2 bg-zinc-950'>
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
