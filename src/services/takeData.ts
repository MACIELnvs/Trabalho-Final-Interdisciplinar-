export async function fetchYuGiOh() {

    const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
    const responseJSON = await response.json();
    console.log(responseJSON);
}