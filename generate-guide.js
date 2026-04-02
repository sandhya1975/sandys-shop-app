const fs = require("fs");

const data = JSON.parse(fs.readFileSync("topics.json", "utf8"));

const output = `
TOPIC: ${data.topic}
KEYWORD: ${data.keyword}

PUBLIC COMMENT REPLY:
Sent you the guide in DMs 🍌

OPENING DM:
Hi lovely 🍌

Here’s your evidence-based guide on ${data.topic}:
[PASTE LINK HERE]

Save it for later and send me "MORE" if you want another one.

SECOND DM WITH LINK:
Here’s the trusted guide 🍌
Tap below to open it.

BUTTON LABEL:
Open guide
`;

fs.writeFileSync("guide-output.txt", output.trim());
console.log("guide-output.txt created");
