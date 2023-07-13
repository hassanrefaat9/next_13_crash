"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [count, setCount] = useState(0);

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link href="/">Hassan Repo</Link>
                </div>
            </div>
            <div className="links">
                <Link href="/about">About</Link>
                <Link href="/about/team">Out Team</Link>
                <Link href="/code/repos">Code</Link>
            </div>
        </header>
    );
}
