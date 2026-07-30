# Getting started with boosty

Boosty MCP servers for DeFi - Volume generation, trading, and wallet management

## Install

```bash
npm install -g @boosty/mcp-defi
```

## Verify the install

Clone the repository and run its checks to confirm everything works on your machine:

```bash
git clone https://github.com/nirholas/boosty.git
cd boosty
```

Available commands:

| Command | Runs |
|---|---|
| `npm run build` | `pnpm -r build` |
| `npm run test` | `pnpm -r test` |
| `npm run lint` | `pnpm -r lint` |
| `npm run typecheck` | `pnpm -r typecheck` |
| `npm run dev` | `pnpm --filter @boosty/mcp-server dev` |
| `npm run start` | `pnpm --filter @boosty/mcp-server start` |

## Next steps

- [Examples](./examples.md) shows runnable snippets.
- The [README](https://github.com/nirholas/boosty#readme) is the complete reference.
- Found a problem? [Open an issue](https://github.com/nirholas/boosty/issues).
