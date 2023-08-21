// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _type, _ammo, _magCapacity) {
   const NFT ={
      "Name": _name,
      "Type": _type,
      "Ammo": _ammo,
      "MagazineCapacity": _magCapacity
   }
   NFTs.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let i =0; i<NFTs.length; i++){
      console.log("\nNo:\t " + (i+1));
      console.log("Name:\t" + NFTs[i].Name);
      console.log("Type:\t" + NFTs[i].Type);
      console.log("Ammo:\t" + NFTs[i].Ammo);
      console.log("MagazineCapacity:" + NFTs[i].MagazineCapacity);
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("Total NFTs : " + NFTs.length);
}

// call your functions below this line
mintNFT("M416", "Assault Rifle", "5.56mm", "30");
mintNFT("M24", "Sniper Rifle", "7.62mm", "5");
mintNFT("AKM", "Assault Rifle", "7.62mm", "30");
mintNFT("UMP45", "SMG", "45acp", "25");
listNFTs();
getTotalSupply();
