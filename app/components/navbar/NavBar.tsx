'use client';
import Container from "../Container";
import Links from "./Links";
import Logo from "./Logo";
import Msj from "./Msj";
import Avatar from "../Avatar";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";


interface NavbarProps {
    currentUser?: SafeUser | null;
  }
  
  const Navbar: React.FC<NavbarProps> = ({
    currentUser,
  }) => {
    return ( 
        <div className="fixed w-full bg-sky-700 z-10 shadow-sm">
            <div
            className="
            pt-4
            pb-0
            
            "
            >
            <Container>
                <div
                className="
                flex
                flex-row
                items-center
                justify-between
                gap-3
                md:gap-0
                "
                >
                <Logo />
                
                <Links />
                
                <div className="flex">
                  
                <Msj currentUser ={currentUser} />
                
                <UserMenu currentUser ={currentUser} />
                
                </div>
                </div>
            </Container>
            </div>
        </div>
     );
}
 
export default Navbar;