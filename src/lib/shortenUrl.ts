import { SnowflakeId } from "@akashrajpurohit/snowflake-id";

export default function shortenUrl(longLink: string) {
    let shortLink = process.env.NEXT_PUBLIC_BASE_URL + '/s/';
    const snowflake = SnowflakeId();
    const snowId = snowflake.generate();
    shortLink = shortLink + encodeLink(parseInt(snowId));
    return shortLink;
}

function encodeLink(snowId: number) {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let radix = chars.length;
    let arr = [];
    let qutient = snowId;
    do {
        let mod = qutient % radix;
        qutient = (qutient - mod) / radix;
        arr.unshift(chars[mod]);
    } while(qutient);
    return arr.join('');
}