# discord.tsx

Create Discord.js components in JSX.

# Setup

## Install discord.js master

```sh
$ npm i discord.js@dev
```

## Add these in your **`tsconfig.json`#compilerOptions**

```json
"jsxFactory": "DiscordComponents.createComponent",
"jsx": "react",
"jsxFragmentFactory": "DiscordComponents.fragment"
```

# Components Available

- MessageButton
- MessageSelectMenu
- MessageEmbed

## Root Fragment Data
Root fragment: `<>...</>` returns `{ embeds: MessageEmbed[], components: MessageActionRow[] }`.

# Example

## Single Row

```tsx
import {
  DiscordComponents,
  MessageActionRow,
  MessageButton,
} from "discord.tsx";

client.on("messageCreate", (message) => {
  if (message.content === "=btn") {
    const componentData = (
      <>
        <MessageActionRow>
          <MessageButton style="PRIMARY" label="Primary" customId="primary" />
          <MessageButton style="SECONDARY" label="Secondary" customId="secondary" />
          <MessageButton style="DANGER" label="Danger" customId="danger" />
          <MessageButton style="SUCCESS" label="Success" customId="success" />
          <MessageButton style="LINK" label="Link" url="https://discord.js.org" />
        </MessageActionRow>
      </>
    );

    return message.channel.send({ ...componentData, content: "Buttons 🖱" });
  }
});
```

### Preview

![](https://i.imgur.com/IuEqtdy.png)

## Or Multiple

```tsx
import {
  DiscordComponents,
  MessageActionRow,
  MessageButton,
} from "discord.tsx";

client.on("messageCreate", (message) => {
  if (message.content === "=btn") {
    const componentData = (
      <>
        <MessageActionRow>
          <MessageButton style="PRIMARY" label="Primary" customId="primary" />
          <MessageButton style="SECONDARY" label="Secondary" customId="secondary" />
          <MessageButton style="DANGER" label="Danger" customId="danger" />
          <MessageButton style="SUCCESS" label="Success" customId="success" />
          <MessageButton style="LINK" label="Link" url="https://discord.js.org" />
        </MessageActionRow>
        <MessageActionRow>
          <MessageButton style="PRIMARY" label="Primary 2" customId="primary2" />
          <MessageButton style="SECONDARY" label="Secondary 2" customId="secondary2" />
          <MessageButton style="DANGER" label="Danger 2" customId="danger2" />
          <MessageButton style="SUCCESS" label="Success 2" customId="success2" />
          <MessageButton style="LINK" label="Link 2" url="https://discord.js.org" />
        </MessageActionRow>
      </>
    );

    return message.channel.send({ ...componentData, content: "Buttons 🖱" });
  }
});
```

### Preview

![](https://i.imgur.com/KxHMgn2.png)

## Select Menu

```tsx
import {
    DiscordComponents,
    MessageActionRow,
    MessageSelectMenu,
    MessageSelectOption
} from "discord.tsx";

client.on("messageCreate", (message) => {
    if (message.content === "=select") {
        const componentData = (
            <>
                <MessageActionRow>
                    <MessageSelectMenu>
                        <MessageSelectOption default={true} description="This is the first option" label="First" value="first" />
                        <MessageSelectOption description="This is the second option" label="Second" value="second" />
                        <MessageSelectOption description="This is the third option" label="Third" value="third" emoji="🥉" />
                    </MessageSelectMenu>
                </MessageActionRow>
            </>
        );

        return message.channel.send({ ...componentData, content: "Select It" });
    }
});
```

### Preview
![](https://i.imgur.com/EmeGYYy.png)

## Message Embed

```tsx
import {
    DiscordComponents,
    MessageEmbed,
    MessageEmbedAuthor,
    MessageEmbedFields,
    MessageEmbedField,
    MessageEmbedFooter,
    MessageEmbedImage,
    MessageEmbedThumbnail
} from "discord.tsx";

client.on("messageCreate", (message) => {
    if (message.content === "=embed") {
        const componentData = (
            <>
                <MessageEmbed color="RANDOM" timestamp={Date.now()} description="Hello World" url="https://github.com" title="Title">
                    <MessageEmbedAuthor name="Author" iconURL="https://cdn.discordapp.com/emojis/828572926525177887.png?v=1" url="https://discord.com" />
                    <MessageEmbedFields>
                        <MessageEmbedField name="Hello" value="world" />
                        <MessageEmbedField name="Goodbye" value="world" inline />
                    </MessageEmbedFields>
                    <MessageEmbedThumbnail url="https://cdn.discordapp.com/emojis/828572926525177887.png?v=1" />
                    <MessageEmbedImage url="https://cdn.discordapp.com/emojis/828572926525177887.png?v=1" />
                    <MessageEmbedFooter text="Footer" iconURL="https://cdn.discordapp.com/emojis/828572926525177887.png?v=1" />
                </MessageEmbed>
            </>
        );

        return message.channel.send(componentData);
    }
});
```

### Preview
![](https://i.imgur.com/eaqub2x.png)