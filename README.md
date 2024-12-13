Welcome to the Waivlength Plugin Starter! This repository provides a simple and guided way for developers to create, test, and submit plugins for the Waivlength SDK.

**Getting Started:**

1.  Clone this repository:

```bash
git clone https://github.com/Waivlength-io/waivlength-plugin-starter.git
```

2.  Install dependencies:

````bash
npm install
```

3.  Create a Plugin:

```bash
npm run create
````

**Available Commands:**

- **Test the Plugin:**

Validate your plugin's `manifest.json` file and run the plugin's logic using mock data provided by the Waivlength SDK.

```bash
npm run test
```

- **Submit the Plugin:**

Submit your plugin for inclusion in the Waivlength SDK. This process copies your plugin files (`manifest.json` and `index.js`) to the SDK's `community-plugins` directory.

```bash
npm run submit
```

**Plugin File Structure:**

- `manifest.json`: This file defines your plugin's metadata, including its name, triggers, permissions, and outcomes.
- `index.js`: The main entry point for your plugin's logic. This file contains the `execute` function that the Waivlength SDK will call.

**Notes:**

- For plugin testing, the Waivlength SDK provides mock data for permissions and other contextual information.
- Plugins must pass all tests before they can be submitted to the SDK.

For any questions or additional help, please reach out to the Waivlength developer support team or visit our documentation.
