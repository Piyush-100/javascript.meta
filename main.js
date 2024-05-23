
let nfts = [];

function mintNFT(name, artist, dateCreated, description) {
    const nft = {
        name: name,
        artist: artist,
        dateCreated: dateCreated,
        description: description
    };
    nfts.push(nft);
}
function listNFTs() {
    nfts.forEach(nft => {
        console.log(`Name: ${nft.name}`);
        console.log(`Artist: ${nft.artist}`);
        console.log(`Date Created: ${nft.dateCreated}`);
        console.log(`Description: ${nft.description}`);
        console.log('-------------------------');
    });
}

function getTotalSupply() {
    console.log(`Total Supply: ${nfts.length}`);
}
mintNFT('Sunset Bliss', 'Alice', '2023-01-15', 'A beautiful sunset over the ocean');
mintNFT('City Lights', 'Bob', '2023-02-10', 'The vibrant city lights at night');
mintNFT('Mountain Majesty', 'Charlie', '2023-03-05', 'A majestic mountain range during sunrise');
mintNFT('Ocean Wave', 'David', '2023-04-12', 'A powerful ocean wave crashing on the shore');
mintNFT('Forest Whisper', 'Eva', '2023-05-20', 'A serene forest with whispering trees');

listNFTs();
getTotalSupply();
