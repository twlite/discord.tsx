"use strict";

var _index = require("../out/index");

/** @jsx DiscordComponents.createComponent */

/** @jsxFrag DiscordComponents.Fragment */
var components = _index.DiscordComponents.createComponent(_index.DiscordComponents.Fragment, null, _index.DiscordComponents.createComponent(_index.MessageActionRow, null, Array.from({
  length: 5
}, function (_, i) {
  return _index.DiscordComponents.createComponent(_index.MessageButton, {
    style: "PRIMARY",
    label: "Button ".concat(++i),
    customId: "btn_".concat(i)
  });
})), _index.DiscordComponents.createComponent(_index.MessageActionRow, null, _index.DiscordComponents.createComponent(_index.MessageSelectMenu, {
  customId: "123"
}, Array.from({
  length: 5
}, function (_, i) {
  return _index.DiscordComponents.createComponent(_index.MessageSelectOption, {
    description: "Option number ".concat(++i),
    label: "Option ".concat(i),
    value: i.toString()
  });
}))), _index.DiscordComponents.createComponent(_index.MessageEmbed, {
  color: "BLURPLE",
  title: "Counter"
}, _index.DiscordComponents.createComponent(_index.MessageEmbedFields, null, Array.from({
  length: 10
}, function (_, i) {
  var counter = ++i;
  return _index.DiscordComponents.createComponent(_index.MessageEmbedField, {
    name: "Count ".concat(counter),
    value: "Counting ".concat(counter)
  });
}))));

console.log("BABEL", components);