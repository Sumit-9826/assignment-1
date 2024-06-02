/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold NFTs
const NFTs = [];

// This function will take in some values as parameters, create an NFT object using the parameters passed to it for its metadata, and store it in the variable.
function mintNFT(Name, HairColor, ShirtType, FaceShape) {
    let NFT = {
        name: Name,
        hairColor: HairColor,
        shirtType: ShirtType,
        faceShape: FaceShape,
    };
    NFTs.push(NFT);
    console.log("---NFT " + Name + " saved in directory---");
}

// create a "loop" that will go through an "array" of NFTs and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nNFT : " + (i + 1));
        console.log("Name:\t\t" + NFTs[i].name);
        console.log("Hair Color:\t" + NFTs[i].hairColor);
        console.log("Shirt Type:\t" + NFTs[i].shirtType);
        console.log("Face Shape:\t" + NFTs[i].faceShape);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("------------------------");
    console.log("NFT Directory: " + NFTs.length);
    console.log("------------------------");
}

// call your functions below this line
mintNFT("Randheer", "Black", "Suit", "Round");
mintNFT("Ayush", "Red", "Polo", "Oval");
mintNFT("Deepu", "Black", "Casuals", "Oval");
mintNFT("Sumit", "Brown", "Formal", "Round");

listNFTs();
getTotalSupply();
