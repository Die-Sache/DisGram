import db from '../db/models/index.js';
import { discordBot } from '../bots/index.mjs'


let set = {
    execute: async interaction => {
        db.DiscordChannel.create({
            channelId: interaction.channelId,
            channelName: discordBot.channels.cache.get(interaction.channelId).name,
            subscriptionIdentifier: interaction.options.getString("id") ?? discordBot.channels.cache.get(interaction.channelId).name
        });
        await interaction.reply({
            content: "Dieser Kanal ist nun abonnierbar!",
            ephemeral: true
        }
        );
    }
}

export default set;