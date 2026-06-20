<div align="center">

<img src="images/icon.png" width="128" alt="November icon" />

![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white)
![Version](https://img.shields.io/visual-studio-marketplace/v/kud.november-vscode?style=flat-square&color=CB3837)
![Installs](https://img.shields.io/visual-studio-marketplace/i/kud.november-vscode?style=flat-square&color=ed7249)
![MIT](https://img.shields.io/badge/licence-MIT-22C55E?style=flat-square)

**A dark theme with warm amber accents**

<a href="https://kud.io/projects/november-vscode">Website</a> · <a href="https://kud.io/projects/november-vscode/docs">Documentation</a>

</div>

![November theme screenshot](images/screenshot.png)

## Features

- **Warm amber accents** — a signature amber palette that keeps highlights visible without eye strain
- **Deep slate background** — a rich, near-neutral dark base that reduces glare during long sessions
- **Single focused variant** — one well-tuned `vs-dark` theme rather than a sprawling set of half-finished alternatives
- **Consistent syntax** — carefully mapped token colours across JavaScript, TypeScript, HTML, CSS, and more
- **Soft UI chrome** — activity bar, sidebar, and panel tones chosen to recede and let code take centre stage

## Install

**Via Marketplace** — open the Extensions view (`Cmd+Shift+X`), search **November**, and click Install.

**Via CLI**

```sh
code --install-extension kud.november-vscode
```

## Usage

After installing, open the Command Palette (`Cmd+Shift+P`), run **Preferences: Color Theme**, and select **November**.

## Development

```sh
git clone https://github.com/kud/november-vscode.git
cd november-vscode
npm install
```

Edit `themes/november.json` to adjust colours. Press `F5` in VS Code to open an Extension Development Host and preview changes live.

| Script                  | Description                                 |
| ----------------------- | ------------------------------------------- |
| `npm run package`       | Build a `.vsix` package into `build/`       |
| `npm run install-ext`   | Package and install locally                 |
| `npm run release:patch` | Bump patch version, tag, and push           |
| `npm run marketplace`   | Open the VS Code Marketplace publisher page |

📚 **Full documentation → [november-vscode/docs](https://kud.io/projects/november-vscode/docs)**
