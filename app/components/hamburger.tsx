"use client"
import Modal from "./modal"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiMenu } from "@react-icons/all-files/hi/HiMenu";

interface HamburgerButtonProps {
    className?: string;
}

const navButtonStyle = "text-left w-full text-sm px-3 py-2 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors";

export default function HamburgerButton({ className }: HamburgerButtonProps) {
    const [isOpened, setIsOpened] = useState(false);
    const router = useRouter();

    return (
        <div className={className}>
            <button
                onClick={() => setIsOpened(!isOpened)}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-md p-2 transition-colors"
            >
                <HiMenu />
            </button>
            {isOpened && (
                <Modal onClose={() => setIsOpened(false)}>
                    <button className={navButtonStyle}><a href="/hordebuilder">Build a Horde</a></button>
                    <button className={`${navButtonStyle} text-red-400`}><a href="/unitinfo">Unit Wiki</a></button>
                    <button className={navButtonStyle}><a href="/faction">Faction Info</a></button>
                    <button className={navButtonStyle}><a href="/builtarmies">Armies</a></button>
                </Modal>
            )}
        </div>
    )
}