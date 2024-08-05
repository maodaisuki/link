import { supabase } from "./supabase";

async function saveURL(item: {
    short_url: string,
    long_url: string,
}) {
    return await supabase.from('link').insert(item).select();
}

async function isSavedShortURL(shortLink: string) {
    const data = await searchLongLink(shortLink);
    if(data == null || data == undefined || data.length == 0) {
        return false;
    }
    return true;
}

async function isSavedLongURL(longLink: string) {
    const data = await searchShortLink(longLink);
    if(data == null || data == undefined || data.length == 0) {
        return false;
    }
    return true;
}

async function searchShortLink(longLink: string) {
    const { data, error } = await supabase.from('link').select().eq('long_url', longLink);
    if(data == null || data == undefined || data.length == 0) {
        return null;
    }
    return data[0].short_url;
}

async function searchLongLink(shortLink: string) {
    const { data, error } = await supabase.from('link').select().eq('short_url', shortLink);
    if(data == null || data == undefined || data.length == 0) {
        return null;
    }
    return data[0].long_url;
}

export {
    saveURL,
    isSavedShortURL,
    isSavedLongURL,
    searchShortLink,
    searchLongLink
}