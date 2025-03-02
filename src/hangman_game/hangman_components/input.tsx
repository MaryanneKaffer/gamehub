import { Input } from "@heroui/react";
interface InputProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export function LetterInput({ value, setValue }: InputProps) {
    return (
        <Input
            label="Guess the letter"
            className="w-[400px] mb-5"
            onKeyDown={(e) => {
                if (/\d/.test(e.key)) {
                    e.preventDefault();
                }
            }}
            value={value}
            onChange={(e) => setValue(e.target.value.slice(0, 1))}
        />
    )
} export function WordInput({ value, setValue }: InputProps) {
    return (
        <Input
            label="Guess the word"
            className="w-[400px] mb-5"
            onKeyDown={(e) => {
                if (/\d/.test(e.key)) {
                    e.preventDefault();
                }
            }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}