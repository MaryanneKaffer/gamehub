import { Input } from "@heroui/react";
interface InputProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    onSubmit: () => void;
}

export function LetterInput({ value, setValue, onSubmit }: InputProps) {
    return (
        <Input
            label="Guess the letter"
            className="lg:w-[400px] w-[80dvw] justify-self-center mb-5"
            onKeyDown={(e) => {
                if (/\d/.test(e.key)) {
                    e.preventDefault();
                } else if (e.key === "Enter") {
                    onSubmit();
                }
            }}
            value={value}
            onChange={(e) => setValue(e.target.value.slice(0, 1))}
        />
    );
}

export function WordInput({ value, setValue, onSubmit }: InputProps) {
    return (
        <Input
            label="Guess the word"
            className="lg:w-[400px] w-[80dvw] justify-self-center mb-5"
            onKeyDown={(e) => {
                if (/\d/.test(e.key)) {
                    e.preventDefault();
                } else if (e.key === "Enter") {
                    onSubmit();
                }
            }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}
