import isUrl from "@/lib/isUrl";
import shortenUrl from "@/lib/shortenUrl";
import { isSavedLongURL, saveURL, searchShortLink } from "@/lib/database";
export async function GET(request: any) {
    // console.log("It works!");
    const { searchParams } = new URL(request.url);
    const link: string = searchParams.get('link')?.toString() || "";
    if(link == undefined || link == "" || !isUrl(link)) {
        return new Response(JSON.stringify({
            code: 400,
            message: 'error',
            shortLink: null
        }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    else {
        if(await isSavedLongURL(link)) {
            let shortLink = await searchShortLink(link);
            return new Response(JSON.stringify({
                code: 200,
                message: 'successful',
                shortLink: shortLink,
            }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        const shortLink = shortenUrl(link);
        await saveURL({
            short_url: shortLink,
            long_url: link
        });
        return new Response(JSON.stringify({
            code: 200,
            message: 'successful',
            shortLink: `${shortLink}`
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}