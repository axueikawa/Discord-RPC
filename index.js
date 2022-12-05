const RPC = require("discord-rpc");
const client = new RPC.Client({transport: "ipc"});
require('dotenv').config();

const activity = {
    // Made by Rubenn
    details: "discord.gg/acc-shop",
    assets: {
        // Made by Rubenn
        // U can upload your image in PNG/GIF in https://imgbb.com/ 
        large_image: "https://i.ibb.co/sVybWhP/a-c2485d3aae20cf6b43369f53a3d6b576.gif",
        small_image: "https://i.ibb.co/wRWXpKL/3763-verified-green.png"
    },
    buttons: [{
        label: "Account Shop",
        url: "https://discord.gg/acc-shop"
    }, {
        label: "Account Shop Telegram",
        url: "https://t.me/ogacc"
    }],
    timestamps: {start: Date.now()},
    instance: true
}

// Made by Rubenn
client.on("ready", () => {
    client.request("SET_ACTIVITY", {pid: process.pid, activity: activity});
    // console.log(client.on)
    // console.log("Discord RPC is on.")
})

// Made by Rubenn
client.login({ clientId: "1049246992498442280" }) // Discord Bot ID which can be found on Discord developer Portal https://discord.com/developers/applications
client.login(process.env.TOKEN)