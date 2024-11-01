const { Client } = require("discord.js-selfbot-v13");
const client = new Client();

BUMP_CHANNEL = "1181785543818883164";

client.on("ready", async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    const channel = await client.channels.fetch(BUMP_CHANNEL);

    async function bump() {
        await channel.sendSlash("302050872383242240", "bump");
        console.count("Bumped!");
    }

    function loop() {
        setTimeout(
            function () {
                bump();
                loop();
            },
            7200000 + Math.random() * 80000,
        );
    }

    bump();
    loop();
});

client.login(process.env["token"]);
