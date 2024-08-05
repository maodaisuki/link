import Link from "next/link";

export default function Help() {
    return (
        <main className="m-0 min-h-screen min-w-screen box-border flex flex-col items-center">
            <div className="md:w-full max-w-xl flex flex-col items-center mt-20 w-11/12">
                <div className="breadcrumbs text-sm w-full mb-[10px] text-base">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className="flex flex-col w-full space-y-4">
                    <div>
                        <h2 className="text-lg font-bold">What&apos;s this?</h2>
                        <p className="mt-1">
                            This is a web application for generating short link from long link. 
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">How to use this?</h2>
                        <p className="mt-1">
                            You can use this directly in web page or use it by <Link className="hover:underline link-primary" href="/api/docs">api</Link>.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">About this project</h2>
                        <p className="mt-1">
                            The project is open source in Github, and this demo site is powered by <a className="hover:underline link-primary" target="_blank" href="https://vercel.com/">Vercel</a> + <a className="hover:underline link-primary" target="_blank" href="https://supabase.com/">Supabase</a>.
                        </p>
                    </div>
                    <div>
                        <Link href="/" className="underline text-sm">Go back</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}