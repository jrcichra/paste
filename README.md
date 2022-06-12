# paste
serverless dead-simple pastebin

# Usage
+ Use my ppaste script to use my worker for your pastes, if you're okay with the possibility that I could see your pastes


# Self-host on Cloudflare

+ `npx wrangler2 login` if you haven't already
+ `npx wrangler2 kv:namespace create "pastebin"`
+ `npx wrangler2 kv:namespace create "pastebin" --preview`
+ Replace my KV keys with yours
+ `npx wrangler2 publish`
+ Change `./ppaste` to use your URL instead of mine


# TODO
+ Simple web interface with a textbox and a button / enter to save a paste
