import Link from "next/link";

export default function ApiPage() {
    const code = "const link = \"https://bilibili.com\"\;\n" + 
        "  await fetch(`https://link.nyanpasu.space/api?link=${link}`\)\n" +
        "    .then((res) => res.json())\n" +
        "    .catch((e) => {\n" +
        "      return null;\n" + 
        "  });\n";
    return (
        <main className="m-0 min-h-screen min-w-screen box-border flex flex-col items-center">
            <div className="md:w-full max-w-xl flex flex-col mt-20 w-11/12">
                <div className="breadcrumbs text-sm w-full mb-[10px] text-base">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li>API Document</li>
                    </ul>
                </div>
                <div className="w-full space-y-4">
                    <div>
                        <div>
                            <h2 className="text-xl font-bold">API</h2>
                            <p className="mt-1">
                                <span>URL: </span>
                                <span className="text-primary ">{process.env.NEXT_PUBLIC_BASE_URL}/api</span>
                            </p>
                            <p className="mt-1">
                                <span>Method: </span>
                                <span className="text-primary ">GET</span>
                            </p>
                            <p className="mt-1">
                                <span>Response format: </span>
                                <span className="text-primary ">JSON</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Paramters</h2>
                        <p className="mt-1">
                            <span>link*: </span>
                            <span>long link need to converted<span className="text-primary">*(required)</span>.</span>
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Example</h2>
                        <div className="mockup-code mt-[10px] border-radius-[4px]">
                            <pre><code>{code}</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}