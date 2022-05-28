import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";

export default function Main({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}