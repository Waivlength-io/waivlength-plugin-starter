# 🚀 Waivlength Plugin Starter

Welcome to the **Waivlength Plugin Starter** repository! This repository provides all the necessary tools, templates, and instructions to help you develop, test, and submit plugins for the Waivlength platform.

---

## 📦 Getting Started

### 1️. Clone the Repository

Start by cloning the Waivlength Plugin Starter repository to your local machine:

bash

Copy code

`git clone https://github.com/waivlength/waivlength-plugin-starter.git
cd waivlength-plugin-starter`

### 2️. Install Dependencies

Ensure all necessary dependencies are installed:

bash

Copy code

`npm install`

---

## 🗂 Folder Structure

Here's what each file in the repository does:

- **`manifest.json`**: Defines your plugin's metadata (name, description, permissions, triggers, and entry point).
- **`index.js`**: Contains the main logic of your plugin.
- **`validation.test.js`**: Runs tests to validate your plugin's compliance.
- **`package.json`**: Manages project dependencies and scripts.
- **`.gitignore`**: Specifies files to exclude from Git commits.

---

## 🛠 Development Workflow

### Step 1️: Update `manifest.json`

Customize the `manifest.json` file to define your plugin's metadata.

### Step 2️: Write Plugin Logic in `index.js`

Open `index.js` and implement your plugin's functionality.

### Step 3️: Test Your Plugin

Run the provided tests to ensure your plugin meets Waivlength standards.

### Step 4️: Submit Your Plugin

When your plugin passes all tests, submit it for review using the Waivlength SDK:

bash

Copy code

`npx waivlength-sdk submit ./waivlength-plugin-starter`

- The SDK validates your plugin, runs additional checks, and submits it for review.
- You will receive a response indicating whether your plugin has been **accepted** or **rejected**.

---

## ✅ Validation Details

Your plugin must meet the following requirements:

1.  **Valid Manifest**

    - Ensure `manifest.json` includes all required fields:
      - `name`
      - `description`
      - `permissions`
      - `triggers`
      - `entry`

2.  **Pass All Tests**

    - Run `npm test` to ensure your plugin logic and manifest are valid.

3.  **Logical Integrity**

    - Your plugin logic must adhere to the defined permissions and triggers.

---

## 📚 Additional Resources

Refer to the **Waivlength SDK Documentation** for detailed information on triggers, permissions, and plugin integration:\
[Waivlength SDK Documentation](https://github.com/waivlength/waivlength-sdk)

---

## 📜 License

This repository is licensed under the MIT License.
