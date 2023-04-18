'use client'
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";

import MenuItem from "./MenuItem";
import Avatar from "../Avatar";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative  flex items-center">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="
            items-center 
            gap-3 
            rounded-full 
            cursor-pointer 
            hover:shadow-md 
            transition
            h-10
            w-10
          "
        >
          <div className="pt-2 pl-3">
            <Avatar src={currentUser?.image} />
          </div>
        </div>

        {currentUser && (
          <div className="flex items-center gap-3">
            <MenuItem label="Mis mensajes" onClick={() => {}} />
          </div>
        )}
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            whitespace-nowrap
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem label="Mis mensajes" onClick={() => {}} />
                <MenuItem label="Mi cuenta" onClick={() => {}} />
                <hr />
                <MenuItem label="Salir" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label="Ingresá" onClick={loginModal.onOpen} />
                <hr />
                <MenuItem label="Registrate" onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;