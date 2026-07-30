# boosty examples

Boosty MCP servers for DeFi - Volume generation, trading, and wallet management

## Example 1

```text
You: "Buy $500 worth of BONK using Jupiter, split across 3 transactions over the next hour"

Boosty: ✅ Created campaign with 3 scheduled buys
        - Trade 1: $166.67 at 2:00 PM (completed)
        - Trade 2: $166.67 at 2:20 PM (pending)
        - Trade 3: $166.66 at 2:40 PM (pending)
```

## Example 2

```text
You: "Start a volume campaign for my token at address Abc123... 
      Generate $50k daily volume with organic patterns, 
      use 200 wallets, vary transaction sizes between $50-500"

Boosty: 📊 Volume Campaign Started
        - Token: ABC/SOL
        - Daily Target: $50,000
        - Active Wallets: 200
        - Pattern: Organic (gaussian distribution)
        - Duration: 7 days
        - Estimated Cost: 2.3 SOL (fees + rent)
```

## Example 3

```text
You: "Show me all my positions across all wallets"

Boosty: 💼 Portfolio Summary (47 wallets)
        Total Value: $234,567.89
        
        Top Holdings:
        - SOL: $89,234 (38.0%)
        - USDC: $45,678 (19.5%)
        - BONK: $23,456 (10.0%)
        
        DeFi Positions:
        - Raydium USDC/SOL LP: $34,567
        - Marinade stSOL: $12,345
```

## Example 4

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CLAUDE DESKTOP                                  │
│                         (Model Context Protocol)                             │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                            @boosty/mcp-server                                │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────────┐   │
│  │  Resources   │ │    Tools     │ │   Prompts    │ │  Subscriptions   │   │
│  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
          ┌──────────────────────────┼──────────────────────────┐
          ▼                          ▼                          ▼
┌──────────────────┐    ┌──────────────────────┐    ┌──────────────────────┐
│ @boosty/prices   │    │ @boosty/orchestrator │    │ @boosty/wallets      │
│                  │    │                      │    │                      │
│ • Token Prices   │    │ • Campaign Manager   │    │ • Portfolio View     │
│ • Gas Prices     │    │ • Task Queue         │    │ • Balance Tracking   │
│ • Market Data    │    │ • Bot Coordinator    │    │ • NFT Holdings       │
│ • Fear/Greed     │    │ • Pattern Generator  │    │ • DeFi Positions     │
└────────┬─────────┘    └──────────┬───────────┘    └──────────┬───────────┘
         │                         │                           │
         ▼                         ▼                           ▼
┌──────────────────┐    ┌──────────────────────┐    ┌──────────────────────┐
│  CoinGecko API   │    │ @boosty/trading      │    │   Alchemy API        │
│  DefiLlama API   │    │                      │    │   DeBank API         │
│  Alternative.me  │    │ • Jupiter V6         │    │   Helius API         │
└──────────────────┘    │ • Raydium V2         │    └──────────────────────┘
                        │ • Orca Whirlpools    │
                        │ • PumpFun            │
                        └──────────┬───────────┘
                                   │
                                   ▼
                        ┌──────────────────────┐
                        │ @boosty/solana-core  │
                        │                      │
                        │ • RPC Connection     │
                        │ • Transaction Build  │
                        │ • Jito Bundles       │
                        │ • Priority Fees      │
                        └──────────┬───────────┘
                                   │
                                   ▼
                        ┌──────────────────────┐
                        │@boosty/wallet-manager│
                        │                      │
                        │ • HD Derivation      │
                        │ • Key Encryption     │
                        │ • Fund Distribution  │
                        └──────────────────────┘
                                   │
          ┌────────────────────────┼────────────────────────┐
          ▼                        ▼                        ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────────┐
│   PostgreSQL     │    │      Redis       │    │   Solana Mainnet     │
│                  │    │                  │    │                      │
│ • Wallets        │    │ • Task Queue     │    │ • Transactions       │
│ • Campaigns      │    │ • Rate Limits    │    │ • Token Accounts     │
│ • Trade History  │    │ • Session Cache  │    │ • Program Calls      │
│ • Positions      │    │ • Pub/Sub        │    │                      │
└──────────────────┘    └──────────────────┘    └──────────────────────┘
```

## Example 5

```text
Master Seed (BIP39)
    └── Purpose (44')
        └── Coin Type (501' for Solana)
            └── Account Index
                └── Change
                    └── Address Index
```

## Example 6

```text
@boosty/mcp-server
    ├── @boosty/orchestrator
    │   ├── @boosty/trading-engine
    │   │   ├── @boosty/solana-core
    │   │   └── @boosty/mcp-shared
    │   ├── @boosty/wallet-manager
    │   │   ├── @boosty/solana-core
    │   │   └── @boosty/mcp-shared
    │   └── @boosty/mcp-shared
    ├── @boosty/mcp-prices
    │   └── @boosty/mcp-shared
    ├── @boosty/mcp-wallets
    │   └── @boosty/mcp-shared
    └── @boosty/mcp-yields
        └── @boosty/mcp-shared
```

## Example 7

```bash
# 1. Clone the repository
git clone https://github.com/nirholas/boosty-mcp-servers.git
cd boosty-mcp-servers

# 2. Install dependencies
pnpm install

# 3. Set up environment
cp .env.example .env
# Edit .env with your API keys

# 4. Start infrastructure (Docker)
docker-compose up -d postgres redis

# 5. Run database migrations
pnpm db:migrate

# 6. Build all packages
pnpm build

# 7. Start the MCP server
pnpm start
```

## Example 8

```text
"What's the current price of SOL?"
"Show me the top 10 yield opportunities on Solana"
"Get gas prices for Ethereum and Arbitrum"
```


Every snippet above is taken from the [repository documentation](https://github.com/nirholas/boosty#readme).
