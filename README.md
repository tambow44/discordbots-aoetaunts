# discordbots-aoetaunts

Current iteration is just the aoe2de chat taunts. In future I may extend to other Age of Empires game taunts (I - IV + Mythology).

## Setup

`config.json` requires a bot token, bot client ID, and the guild ID (aka Server ID). 

Detailed here: [Discord Docs](https://discord.com/developers/docs/getting-started)

## Deploy with:

`node deploy-commands.js && node .`

## Usage:

`/taunt 55` returns the string  `Build a wall around your town.`

If the taunt number is invalid it will state as such: `Taunt not found`
