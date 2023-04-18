'use client'

import ClientOnly from "./components/ClientOnly"
import Container from "./components/Container"

export default function Home() {
  return (
    <ClientOnly>
      <Container>
      <div>A Ve</div>
      <div>A Ve</div>
      <div>A Ve</div>
      <div>A Ve</div>
      <div>A Ve</div>
      <div>A Ve</div>
      <div>A Ve</div>
      <div>A Ve</div>
      <div>A Ve</div>
      <div>A Ve</div>
      <div>A Ve</div>
      </Container>
    </ClientOnly>
  )
}
