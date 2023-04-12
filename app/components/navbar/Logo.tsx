'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
    <Image
        onClick={() => router.push('/')}
        alt="Hebe Eterna Siempre"
        className="cursor-pointer"
        height="200"
        width="150"
        src="/images/logohe.svg"
        />
        )
}

export default Logo;