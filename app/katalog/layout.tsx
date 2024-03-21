import Navbar from "../components/Navbar"

export default function KatalogLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <Navbar isLandingPage={false}/>
        {children}
      </section>
    )
  }