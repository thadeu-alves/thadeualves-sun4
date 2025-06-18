export default function Q4EstruturaHtmlCss() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-violet-900 text-white p-4">
                <h1 className="text-2xl font-bold">
                    Thadeu Alves - Teste SUN4
                </h1>
            </header>

            <main className="flex-1 p-4">
                <div className="container mx-auto grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-200 p-4 rounded">
                        <h2 className="text-xl font-semibold">
                            Coluna 1
                        </h2>
                        <p>Content</p>
                    </div>

                    <div className="bg-gray-200 p-4 rounded">
                        <h2 className="text-xl font-semibold">
                            Coluna 2
                        </h2>
                        <p>Content</p>
                    </div>

                    <div className="bg-gray-200 p-4 rounded">
                        <h2 className="text-xl font-semibold">
                            Coluna 3
                        </h2>
                        <p>Content</p>
                    </div>
                </div>
            </main>

            <footer className="bg-violet-900 text-white p-4">
                <p>
                    Developed by{" "}
                    <a
                        href="www.thadeualves.site"
                        className="text-gray-300 underline"
                    >
                        Thadeu Alves
                    </a>
                </p>
            </footer>
        </div>
    );
}
