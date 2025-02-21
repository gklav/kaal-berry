export default function Footer()
{
    return (
        <footer className="relative z-1 w-full flex pb-3 text-xs justify-center items-center text-align-center">
            <p>© {new Date().getFullYear()} Kaal Berry</p>
        </footer>
    );
}