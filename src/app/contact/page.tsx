export default function Page() {
    return (
        <>
            <main className={`md:w-full justify-center justify-items-center`}>
                <div className="w-full h-screen justify-items-center pt-5">
                    <h1 className={`text-center text-4xl`}>Contact</h1>
                    <div className={`justify-items-center pt-20`}>
                        <p>Booking/Management</p>
                        <a href={`mailto:kaalberry@gmail.com`} className={`text-teal`}>kaalberry@gmail.com</a>
                    </div>
                </div>
            </main>
        </>
    );
}