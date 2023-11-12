import Link from "next/link"

export const PageFooter = () => {
  return (
      <footer className="text-center p-8 bg-rose-300 text-rose-800">
        <div>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by <Link href='https://sahanthenuwara.vercel.app/' target="_blank" className="text-rose-950 hover:underline hover:underline-offset-2">t-Studio</Link></p>
        </div>
      </footer>
  )
}
