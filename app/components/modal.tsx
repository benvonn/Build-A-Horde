import { ReactNode, MouseEvent } from "react";

interface ModalProps {
    onClose: () => void;
    children: ReactNode;
    isOpen?: boolean;
    className?: string;
}

export default function Modal({ onClose, children, className }: ModalProps) {
    return (
        <div
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-black/60"
        >
            <div
                id="container"
                onClick={(e: MouseEvent) => e.stopPropagation()}
                className={`fixed left-0 top-0 h-full w-64 bg-[#0d0d0d] border-r border-white/10 p-3 flex flex-col gap-1 ${className ?? ""}`}
            >
                <div className="flex items-center justify-between px-2 pb-3">
                    <span className="text-white/90 font-semibold text-sm">Menu</span>
                    <button
                        onClick={(e: MouseEvent) => {
                            e.stopPropagation();
                            onClose();
                        }}
                        className="text-white/50 hover:text-white/90 hover:bg-white/10 rounded-md w-7 h-7 flex items-center justify-center transition-colors"
                    >
                        X
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}