import { useState } from "react";

type ButtonCopyProps = {
    copyText: string;
};

function ButtonCopy({ copyText }: ButtonCopyProps) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(copyText);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 3000);
        } catch {
            alert("복사에 실패했습니다. 계좌번호를 길게 눌러 복사해 주세요.");
        }
    };

    return (
        <button className="button-copy" onClick={handleCopy}>
            {
                isCopied ?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>

            }
            <span>{isCopied ? "복사됨" : "복사"}</span>
        </button>
    );
}

export default ButtonCopy;
