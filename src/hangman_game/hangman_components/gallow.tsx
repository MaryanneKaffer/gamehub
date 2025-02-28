export default function Gallow({ tries }: { tries: number }) {
    return (
        <svg
            width="150"
            height="150"
            viewBox="0 0 150 150"
            xmlns="http://www.w3.org/2000/svg"
            stroke="white"
            stroke-width="5"
            fill="none"
        >

            {tries <= 10 && <line x1="30" y1="140" x2="120" y2="140" />}
            {tries <= 9 && <line x1="60" y1="140" x2="60" y2="20" />}
            {tries <= 8 && <line x1="60" y1="20" x2="100" y2="20" />}
            {tries <= 7 && <line x1="100" y1="20" x2="100" y2="40" />}


            {tries <= 6 && <circle cx="100" cy="50" r="10" />}
            {tries <= 5 && <line x1="100" y1="60" x2="100" y2="90" />}
            {tries <= 4 && <line x1="100" y1="70" x2="85" y2="80" />}
            {tries <= 3 && <line x1="100" y1="70" x2="115" y2="80" />}
            {tries <= 2 && <line x1="100" y1="90" x2="90" y2="110" />}
            {tries <= 1 && <line x1="100" y1="90" x2="110" y2="110" />}
        </svg>
    )
}