---
title: "Progressive web apps"
desc: "Make installable web apps"
slug: "make-a-pwa"
type: "others"
date: "11 November 2021"
---

# Make a Progressive Web App

Have you ever opened a website and got an install button? That's a PWA or a progressive web app. Even though the process might seem complicated, it is very easy to build one.

## manifest.json

PWA's have a manifest.json file, which is linked to HTML using a link tag. In simple words, it tells the browser how it should act when installed on a device.

```json
{
  "name": "My App",
  "short_name": "My App",
  "start_url": "/?home=true",
  "icons": [
    {
      "src": "icons/manifest-icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "icons/manifest-icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable any"
    }
  ],
  "theme_color": "#f30f42",
  "background_color": "#f30f42",
  "display": "fullscreen",
  "orientation": "portrait"
}
```

This file might looks super complicated, it's very simple to understand. Most keys are self explanatory, the icons are generated through a library `pwa-asset-generator`.

It outputs different sizes of your logo. It also outputs the array json you need to put in your manifest.

We will now create a file `sw.js` (Our service worker)
Inside our body tag we can put a script tag and register our service worker.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>KeyLink - Save important links</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="manifest" href="manifest.json" />
    <script src="script.js" defer></script>
  </head>
  <body>
    <h1 class="hello">Hello world</h1>

    <script>
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("sw.js")
      }
    </script>
  </body>
</html>
```

Then inside our `sw.js` we will import workbox service worker from cdn, and enable the app to cache.

```js
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js"
)

workbox.routing.registerRoute(
  ({ request }) => request.destination === "image",
  new workbox.strategies.CacheFirst()
)
```

**And it's done! Yes! It's that easy :D**
