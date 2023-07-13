import Header from "./components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer";

const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const metadata = {
    title: "Nerd Repo",
    description: "This is the nerd portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Header />
                <main className="container">{children}</main>
                <Footer/>
            </body>
        </html>
    );
}
