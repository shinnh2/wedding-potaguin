import type { ReactNode } from "react";
import { useState } from "react";

type AccordionItemProps = {
	side: string;
	children: ReactNode;
}

function AccordionItem({ side, children }: AccordionItemProps) {
    const [isOpen, setIsOpen]=useState(false);

	return (
        <div className={`accordion-item ${isOpen ? "opened" : ""}`}>
            <div className="accordion-item-title">
                <span className="side">{side}</span>
                <span>마음 전하실 곳</span>
                <button className="accordion-toggle-button" onClick={()=>setIsOpen(prev=>!prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                </button>
            </div>
            <div className="accordion-item-content">
                <div className="accordion-item-content-inner">{children}</div>
            </div>
        </div>
	);
}

export default AccordionItem;
