# discord.js-jsx-components
Create Discord.js components in JSX, inspired by **[Harmony](https://harmony.mod.land)** TSX.

> Only for TypeScript users :D

# Setup
## Install discord.js master

```sh
$ npm i discordjs/discord.js
```

## Add these in your **`tsconfig.json`#compilerOptions**

```json
"jsxFactory": "DiscordComponents.createComponent",
"jsx": "react",
"jsxFragmentFactory": "fragment"
```

> Currently, only Buttons are supported!

# Example
## Single Row

```tsx
import {
    DiscordComponents,
    MessageActionRow,
    MessageButton,
    fragment
} from "discord.js-jsx-components"; // required

client.on("message", (message) => {
    if (message.content === "!button") {
        const componentData = (
            <>
                <MessageActionRow>
                    <MessageButton style="PRIMARY" label="Primary" customID="primary" />
                    <MessageButton style="SECONDARY" label="Secondary" customID="secondary" />
                    <MessageButton style="DANGER" label="Danger" customID="danger" />
                    <MessageButton style="SUCCESS" label="Success" customID="success" />
                    <MessageButton style="LINK" label="Link" url="https://discord.js.org" />
                </MessageActionRow>
            </>
        );

        return message.channel.send("Buttons 🖱", { components: componentData });
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
    fragment
} from "discord.js-jsx-components"; // required

client.on("message", (message) => {
    if (message.content === "!button") {
        const componentData = (
            <>
                <MessageActionRow>
                    <MessageButton style="PRIMARY" label="Primary" customID="primary" />
                    <MessageButton style="SECONDARY" label="Secondary" customID="secondary" />
                    <MessageButton style="DANGER" label="Danger" customID="danger" />
                    <MessageButton style="SUCCESS" label="Success" customID="success" />
                    <MessageButton style="LINK" label="Link" url="https://discord.js.org" />
                </MessageActionRow>
                <MessageActionRow>
                    <MessageButton style="PRIMARY" label="Primary 2" customID="primary2" />
                    <MessageButton style="SECONDARY" label="Secondary 2" customID="secondary2" />
                    <MessageButton style="DANGER" label="Danger 2" customID="danger2" />
                    <MessageButton style="SUCCESS" label="Success 2" customID="success2" />
                    <MessageButton style="LINK" label="Link 2" url="https://discord.js.org" />
                </MessageActionRow>
            </>
        );

        return message.channel.send("Buttons 🖱", { components: componentData });
    }
});
```

### Preview
![](https://i.imgur.com/KxHMgn2.png)