/*
----------------------------------------------------------
ทำเพือการศึกษา โดย TinnerKung
แจกได้จำหน่ายพ่องตาย
ของมันฟรีเสือกหาพ่อค้าดูด Script เอาไปโมให้เสียตัง
ลูกค้าแม่งก็ควายชิปหาย

- TinnerKung
- Facebook https://www.facebook.com/sycertinnerkung
- GitHub https://github.com/TinnerKung
- Website https://cszteam.tk

----------------------------------------------------------
*/
var Discord = require("discord.js");
var client = new Discord.Client();
client.db = require("quick.db");
client.request = new (require("rss-parser"))();
client.config = require("./config.js");

setInterval(() => {
    console.log(Date())
}, client.config.watchInterval);

client.on("ready", function () {
    console.log("Hololive Haachama No.1");
    Haachama();
    Rushia();
    Shion();
    SoraCh();
    Roboco();
    Miko();
    Suisei();
    Mel();
    フブキ();
    Matsuri();
    アキロゼ();
    Minato();
    Nakiri();
    Yuzuki();
    Oozora();
    Ookami();
    Nekomata();
    Korone();
    Usada();
    Shiranui();
    Shirogane();
    Houshou();
    Amane();
    Kiryu();
    Tsunomaki();
    Tokoyami();
    Himemori();
    Yukihana();
    Momosuzu();
    Shishiro();
    Omaru();
    //Aloe(); Bug
    AZKi();
    Ayunda();
    Moona();
    Airani();
    Kureiji();
    Anya();
    Pavolia();
    Mori();
    Takanashi();
    Ninomae();
    Gawr();
    Watson();
});
function Haachama() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UC1CfXB_kRs3C-zaeTG3oGyg")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Rushia() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCl_gCybOJRIgOXw6Qb4qJzQ")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Shion() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCXTpFs_3PqI41qX2d9tL2Rw")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function SoraCh() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCp6993wxpyDPHUpavwDFqgg")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Roboco() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCDqI2jOz0weumE8s7paEk6g")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Miko() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UC-hM6YJuNYVAmUWxeIr9FeA")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Suisei() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UC5CwaMl1eIgY8h02uZw7u8A")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Mel() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCD8HOxPs4Xvsm8H0ZxXGiBw")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function フブキ() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCdn5BQ06XqgXoAxIhbqw5Rg")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Matsuri() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCQ0UDLQCjY0rmuxCDE38FGg")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function アキロゼ() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCFTLzh12_nrtzqBPsTCqenA")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Minato() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UC1opHUrw8rvnsadT-iGp7Cg")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Nakiri() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UC7fk0CB07ly8oSl0aqKkqFg")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Yuzuki() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UC1suqwovbL1kzsoaZgFZLKg")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Oozora() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCvzGlP9oQwU--Y0r9id_jnA")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Ookami() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCp-5t9SrOQwXMU7iIjQfARg")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Nekomata() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCvaTdHTWBGv3MKj3KVqJVCw")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Korone() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UChAnqc_AY5_I3Px5dig3X1Q")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Usada() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UC1DCedRgGHBdm81E1llLhOQ")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Shiranui() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCvInZx9h3jC2JzsIzoOebWg")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Shirogane() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCdyqAaZDKHXg4Ahi7VENThQ")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Houshou() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCCzUftO8KOVkV4wQG1vkUvg")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Amane() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCZlDXzGoo7d44bwdNObFacg")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Kiryu() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCS9uQI-jC3DE0L4IpXyvr6w")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Tsunomaki() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCqm3BQLlJfvkTsX_hvm0UmA")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Tokoyami() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UC1uv2Oq6kNxgATlCiez59hw")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Himemori() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCa9Y57gfeY0Zro_noHRVrnw")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Yukihana() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCFKOVgVbGmX65RxO3EtH3iw")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Momosuzu() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCAWSyEs_Io8MtpY3m-zqILA")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Shishiro() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCUKD-uaobj9jiqB-VXt71mA")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Omaru() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCK9V2B22uJYu3N7eR_BT9QA")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
/*
function Aloe() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCgZuwn-O7Szh9cAgHqJ6vjw")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, 1);
}
*/
function AZKi() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UC0TXe_LYZ4scaW2XMyi5_kw")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Ayunda() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCOyYb1c43VlX9rc_lT6NKQw")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Moona() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCP0BspO_AMEe3aQqqpo89Dg")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Airani() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCAoy6rzhSf4ydcYjJw3WoVg")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Kureiji() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCYz_5n-uDuChHtLo7My1HnQ")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Anya() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UC727SQYUvx5pDDGQpTICNWg")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Pavolia() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UChgTyjG-pdNvxxhdsXfHQ5Q")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Mori() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCL_qhgtOy0dy1Agp8vkySQg")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Takanashi() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCHsx4Hqa-1ORjQTh9TYDhww")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Ninomae() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCMwGHR0BTZuLsmjY_NT5Pwg")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Gawr() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCoSrY_IQQVpmIRZ9Xf-y93g")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
function Watson() {
    if (client.db.fetch("postedVideos") === null)
        client.db.set("postedVideos", []);
    setInterval(function () {
        client.request.parseURL("https://www.youtube.com/feeds/videos.xml?channel_id=UCyl1z3jo3XHR1riLFKG5UAg")
            .then(function (data) {
            if (client.db.fetch("postedVideos").includes(data.items[0].link))
                return;
            else {
                client.db.set("videoData", data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                var parsed = client.db.fetch("videoData");
                var channel = client.channels.cache.get(client.config.channel);
                if (!channel)
                    return;
                var message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}
client.login(client.config.token);
