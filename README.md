# discord.tsx

Create Discord.js components in JSX.

> Only for TypeScript users atm :D

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

# Example

## Single Row

```tsx
import {
  DiscordComponents,
  MessageActionRow,
  MessageButton,
} from "discord.tsx"; // required

client.on("messageCreate", (message) => {
  if (message.content === "=btn") {
    const componentData = (
      <>
        <MessageActionRow>
          <MessageButton style="PRIMARY" label="Primary" customID="primary" />
          <MessageButton
            style="SECONDARY"
            label="Secondary"
            customID="secondary"
          />
          <MessageButton style="DANGER" label="Danger" customID="danger" />
          <MessageButton style="SUCCESS" label="Success" customID="success" />
          <MessageButton
            style="LINK"
            label="Link"
            url="https://discord.js.org"
          />
        </MessageActionRow>
      </>
    );

    return message.channel.send({ content: "Buttons 🖱", components: componentData });
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
} from "discord.tsx"; // required

client.on("messageCreate", (message) => {
  if (message.content === "=btn") {
    const componentData = (
      <>
        <MessageActionRow>
          <MessageButton style="PRIMARY" label="Primary" customID="primary" />
          <MessageButton
            style="SECONDARY"
            label="Secondary"
            customID="secondary"
          />
          <MessageButton style="DANGER" label="Danger" customID="danger" />
          <MessageButton style="SUCCESS" label="Success" customID="success" />
          <MessageButton
            style="LINK"
            label="Link"
            url="https://discord.js.org"
          />
        </MessageActionRow>
        <MessageActionRow>
          <MessageButton
            style="PRIMARY"
            label="Primary 2"
            customID="primary2"
          />
          <MessageButton
            style="SECONDARY"
            label="Secondary 2"
            customID="secondary2"
          />
          <MessageButton style="DANGER" label="Danger 2" customID="danger2" />
          <MessageButton
            style="SUCCESS"
            label="Success 2"
            customID="success2"
          />
          <MessageButton
            style="LINK"
            label="Link 2"
            url="https://discord.js.org"
          />
        </MessageActionRow>
      </>
    );

    return message.channel.send({ content: "Buttons 🖱" components: componentData });
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
} from "discord.tsx"; // required

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

        return message.channel.send({ content: "Select It", components: componentData });
    }
});
```

### Preview
![](https://i.imgur.com/EmeGYYy.png)