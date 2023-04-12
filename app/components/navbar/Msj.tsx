'use client';
import userLoginModal from '@/app/hooks/useLoginModal';
import userRegisterModal from '@/app/hooks/useRegisterModal';
import { SafeUser } from '@/app/types';

import { BiEnvelope } from 'react-icons/bi';

interface UserMenuProps {
    currentUser?: SafeUser | null;
}


const Msj: React.FC<UserMenuProps> = ({
    currentUser
}) => {
    const loginModal = userLoginModal();
    const registerModal = userRegisterModal();

    return (
        <>
            {currentUser ? (
                <>
                    <div
                        onClick={loginModal.onOpen}
                        className="
            py-2
            px-4
            rounded-full
            shadow-sm
            hover:shadow-md
            hover:bg-gray-500
            transition
            cursor-pointer
            bg-sky-900
            "
                    >
                        <div
                            className="
                flex
                flex-row
                items-center
                justify-between
            "
                        >
                            <div
                                className="
                        hidden
                        sm:block
                        md:block
                        tex-sm
                        font-light
                        pr-3
                        text-white
                        italic
                    "
                            >
                                Mensajes a Hebe
                            </div>
                            <div className="text-white">
                                <BiEnvelope size={22} />
                            </div>

                        </div>

                    </div>
                </>
            ) : (
                <>
                    <div
                        onClick={registerModal.onOpen}
                        className="
            py-2
            px-4
            rounded-full
            shadow-sm
            hover:shadow-md
            hover:bg-gray-500
            transition
            cursor-pointer
            bg-sky-900
            "
                    >
                        <div
                            className="
                flex
                flex-row
                items-center
                justify-between
            "
                        >
                            <div
                                className="
                        hidden
                        sm:block
                        md:block
                        tex-sm
                        font-light
                        pr-3
                        text-white
                        italic
                    "
                            >
                                Mensajes a Hebe
                            </div>
                            <div className="text-white">
                                <BiEnvelope size={22} />
                            </div>

                        </div>

                    </div>
                </>
            )}

        </>
    );
}

export default Msj;