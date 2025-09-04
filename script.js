

function generateMeaningfulString() {
    const adjectives = [
        "Happy", "Bright", "Clever", "Calm", "Brave",
        "Quick", "Lucky", "Fresh", "Cool", "Smart"
    ];
    const nouns = [
        "Tiger", "Sky", "River", "Mountain", "Star",
        "Ocean", "Dream", "Cloud", "Eagle", "Flower"
    ];

    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNum = Math.floor(Math.random() * 1000); // adds uniqueness

    const meaningfulString = randomAdj + randomNoun + randomNum;
    document.getElementById("result").textContent = meaningfulString;
}

function copyString() {
    const text = document.getElementById("result").textContent;
    if (text && text !== "Your meaningful string will appear here...") {
        navigator.clipboard.writeText(text).then(() => {
            alert("✅ Copied to clipboard!");
        });
    }
}