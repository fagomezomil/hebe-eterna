

import { Source_Sans_Pro } from "next/font/google";
import './globals.css'
import NavBar from "./components/navbar/NavBar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata = {
  title: 'Hebe Eterna',
  description: 'Esta aplicación web fue creada para practica de programación con la finalidad de mantener la memoria de Hebe de Bonafini para la eternidad',
}

const font = Source_Sans_Pro ({
  subsets: ["latin"],
  weight: ["900","700","600","400","300","200"],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <NavBar currentUser={currentUser} />
        </ClientOnly>
        <div className="
        pt-28
        ">
        {children}
        </div>
        </body>
    </html>
  )
}
