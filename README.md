# paste
serverless, dead-simple, paste text/binary blob pastebin

# Usage
+ Use my ppaste script to use my worker for your pastes, if you're okay with the fact that I could see your pastes. I don't plan on checking it beyond debugging my code. Paste TTL's default to 30 days.


# Self-host on Cloudflare

+ `npx wrangler2 login` if you haven't already
+ `npx wrangler2 kv:namespace create "pastebin"`
+ `npx wrangler2 kv:namespace create "pastebin" --preview`
+ Replace my KV keys with yours
+ `npx wrangler2 publish`
+ Change `./ppaste` to use your URL instead of mine


# TODO
+ Simple web interface with a textbox/upload button to save a paste
