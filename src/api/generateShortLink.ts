export default async function generateShortLink(link: string) {
    return await fetch(`/api?link=${link}`)
        .then((res) => res.json())
        .catch((e) => {
        // console.log(e.message);
        return null;
    });
}
