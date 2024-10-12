"use client"
import Image from 'next/image'
import { ModeToggle } from './ui/toggle-mode'
import Link from 'next/link'

export default function Nav() {
    return (
        <header>
            <nav>
                <ul className="flex items-center justify-between">
                <div className="w-24"></div>
                    <li className='flex items-center justify-between'>
                        <Link className="mx-2" href="/">
                            <button>Accueil</button>
                        </Link>
                        <Link className="mx-2" href="/">
                            <span className='nav-logo-container flex p-2 flex-col items-center '>
                                <span className='nav-logo tracking-wider font-bold text-3xl'>Theramade</span>
                                <span className='nav-sublogo tracking-widest text-xs'>NATURO</span>
                            </span>
                        </Link>
                        <Link className="mx-2" href="/blog">
                            <button>Blog</button>
                        </Link>
                    </li>
                    
                    <li>
                        <ModeToggle />
                    </li>
                </ul>
            </nav>
        </header>
    )
}