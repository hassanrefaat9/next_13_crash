import Link from "next/link";
import Test from "@/app/components/Test";

export default function HomePage() {
   return (
      <div>
         <h1>Welcome to Hassan Repo</h1>
         <ul>
            <li>
               <Link href="/">Home</Link>
            </li>
            <li>
               <Link href="/about">About</Link>
            </li>
            <li>
               <Link href="/about/team">Team</Link>
            </li>
         </ul>
         <Test />
      </div>
   );
}
