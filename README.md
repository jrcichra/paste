# paste

serverless, dead-simple, paste text/binary blob pastebin

## Usage

Use the `ppaste` script to paste to your worker. Paste TTLs default to 30 days.

```bash
echo "hello world" | ppaste
# Returns URL like https://worker-pastebin.jrcichra.workers.dev/<id>
```

## Development

```bash
npm install
npx wrangler dev
```

## Deployment

Connected via Cloudflare GitHub App - deploys automatically on push to `main`.

To set up auto-deploy:
1. Go to Cloudflare Dashboard → Workers & Pages
2. Select your worker → Settings → Git
3. Connect your GitHub repository

## Self-host (manual)

```bash
npx wrangler login
npx wrangler kv:namespace create "pastebin"
npx wrangler kv:namespace create "pastebin" --preview
# Update kv_namespaces in wrangler.toml with your IDs
npx wrangler deploy
```