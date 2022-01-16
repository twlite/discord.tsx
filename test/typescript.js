"use strict";
exports.__esModule = true;
// @ts-nocheck
var index_1 = require("../out/index");
var components = (index_1.DiscordComponents.createComponent(index_1.DiscordComponents.Fragment, null,
    index_1.DiscordComponents.createComponent(index_1.MessageActionRow, null, Array.from({ length: 5 }, function (_, i) { return (index_1.DiscordComponents.createComponent(index_1.MessageButton, { style: "PRIMARY", label: "Button " + ++i, customId: "btn_" + i })); })),
    index_1.DiscordComponents.createComponent(index_1.MessageActionRow, null,
        index_1.DiscordComponents.createComponent(index_1.MessageSelectMenu, { customId: "123" }, Array.from({ length: 5 }, function (_, i) { return (index_1.DiscordComponents.createComponent(index_1.MessageSelectOption, { description: "Option number " + ++i, label: "Option " + i, value: i.toString() })); }))),
    index_1.DiscordComponents.createComponent(index_1.MessageEmbed, { color: "BLURPLE", title: "Counter" },
        index_1.DiscordComponents.createComponent(index_1.MessageEmbedFields, null, Array.from({ length: 10 }, function (_, i) {
            var counter = ++i;
            return (index_1.DiscordComponents.createComponent(index_1.MessageEmbedField, { name: "Count " + counter, value: "Counting " + counter }));
        })))));
console.log("TYPESCRIPT", components);
