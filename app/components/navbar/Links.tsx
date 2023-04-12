'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState, useCallback } from 'react'
import CollapseItems from './CollapseItems';
import { useRouter } from "next/navigation";


const Links = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);
    const router = useRouter();

    return (
        <div className="relative"
        >
            <div
                className='lg:block hidden'
            >
                <div className="flex flex-row">
                    <div
                        onClick={() => router.push("/mivida")}
                        className="
                        font-semibold
                        px-4
                        mr-3
                        text-white
                        hover:text-sky-700
                        w-full
                        md:w-auto
                        py-2
                        rounded-full
                        shadow-sm
                        hover:shadow-md
                      hover:bg-slate-100
                        transition
                        cursor-pointer
                    "
                    >
                        Mi Vida
                    </div>
                    <div
                        onClick={() => { }}
                        className="
                        font-semibold
                        px-4
                        mr-3
                        text-white
                        hover:text-sky-700
                        w-full
                        md:w-auto
                        py-2
                        rounded-full
                        shadow-sm
                        hover:shadow-md
                      hover:bg-slate-100
                        transition
                        cursor-pointer
                    "
                    >
                        Mis Hijos
                    </div>
                    <div
                        onClick={() => { }}
                        className="
                        font-semibold
                        px-4
                        mr-3
                        text-white
                        hover:text-sky-700
                        w-full
                        md:w-auto
                        py-2
                        rounded-full
                        shadow-sm
                        hover:shadow-md
                      hover:bg-slate-100
                        transition
                        cursor-pointer
                    "
                    >
                        La Lucha
                    </div>
                    <div
                        onClick={() => { }}
                        className="
                        font-semibold
                        px-4
                        mr-3
                        text-white
                        hover:text-sky-700
                        w-full
                        md:w-auto
                        py-2
                        rounded-full
                        shadow-sm
                        hover:shadow-md
                      hover:bg-slate-100
                        transition
                        cursor-pointer
                    "
                    >
                        Las Madres
                    </div>
                    <div
                        onClick={() => { }}
                        className="
                        font-semibold
                        px-4
                        mr-3
                        text-white
                        hover:text-sky-700
                        w-full
                        md:w-auto
                        py-2
                        rounded-full
                        shadow-sm
                        hover:shadow-md
                      hover:bg-slate-100
                        transition
                        cursor-pointer
                    "
                    >
                        Nuestra Plaza
                    </div>
                </div>
            </div>
            <div
                onClick={toggleOpen}
                className="
                        flex
                        flex-row
                        items-center
                        sm:flex
                        md:flex
                        lg:hidden
                        text-lg
                        font-semibold
                        px-6
                        text-white
                        hover:text-sky-700
                        w-auto
                        py-2
                        rounded-full
                        shadow-sm
                        hover:shadow-md
                      hover:bg-slate-100
                        transition
                        cursor-pointer
                    "
            >
                <AiOutlineMenu />
                <div className='px-3'>Menú</div>
            </div>
            {isOpen && (
                <div
                    className='
                    absolute
                    rounded-sm
                    shadow-md
                    w-100
                    w-full
                    justify-center
                    bg-slate-100
                    overflow-hidden
                    right-0
                    top-12
                    text-md
                '
                >
                    <div className='flex flex-col cursor-pointer'>
                        <CollapseItems
                            onClick={() => { }}
                            label='Mi Vida'
                        />
                        <CollapseItems
                            onClick={() => { }}
                            label='Mi Vida'
                        />
                        <CollapseItems
                            onClick={() => { }}
                            label='Mi Vida'
                        />
                        <CollapseItems
                            onClick={() => { }}
                            label='Mi Vida'
                        />
                        <CollapseItems
                            onClick={() => { }}
                            label='Mi Vida'
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Links;