
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
    });
}

function getTotalSupply() {
    console.log(`Total Supply: ${nfts.length}`);
}
mintNFT('Himachal', 'piyush', '2022-01-15', 'A beautiful sunset over the ocean');
mintNFT('kashmir', 'kumar', '2022-02-10', 'The vibrant city lights at night');
mintNFT('shimla', 'ram', '2022-03-05', 'A majestic mountain range during sunrise');
mintNFT('Ocean Wave', 'smith', '2022-04-12', 'A powerful ocean wave crashing on the shore');
mintNFT('Forest Whisper', 'Eva', '2022-05-20', 'A serene forest with whispering trees');

listNFTs();
getTotalSupply();
