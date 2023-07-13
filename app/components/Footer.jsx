import Image from "next/image"

export default function Footer() {
  return ( <footer>
    <ul>
        <li>About</li>
        <li>Jobs</li>
        <li>Service</li>
        <li>Contact us</li>
    </ul>
    <Image width = {150} height={150} src={"/favicon.ico"} alt="icon" />
  </footer>
  )
}
