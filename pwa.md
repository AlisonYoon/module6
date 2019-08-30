### Workshop guide


Start by installing the [PWA workshop repo](https://github.com/Mayden-Academy/PWA-workshop).

Follow the repo readme to start the application and go to [0.0.0.0:8888](0.0.0.0:8888) to view the app.

Start with the manifest file. There is one pre-made in `public/`, link this to the `templates/index.phtml` file in the head.

If this works you should be able to see the manifest data come through into the Chrome dev tools under `Application > Manifest` - this can take a few hard refreshes to pull the data through, the tools are still a bit flakey.

Next we need to create a service worker. 

In the PWA workshop repo is a second branch called pwa-working. This has all the working code you need.

Start by going pointing your `index.phtml` file at a empty `service-worker.js` file as [shown here](https://github.com/Mayden-Academy/PWA-workshop/blob/pwa-working/templates/index.phtml)

Then navigate to [this folder](https://github.com/Mayden-Academy/PWA-workshop/tree/pwa-working/public) where there are stepped versions of the service worker file for you to guide the students through. When working on the service worker you need to tick `Update on reload` in Chrome ev tools under the Application > Service Workers in order for the browser to refresh the service worker when you refresh the page as it auto cahces it (not really but thats how to explain it).

#### steps:

service-worker-1.js:
This file hooks into the SW install event and caches all the files in the `filesToCache` variable. The version numbering at the top is required as once you fill your cache you cannot change it again later, so if you want to change the list of files in the cache, increment the version number which will create a new cache.

service-worker-2.js:
The file listens for the `fetch` event which fires on every HTTP Request from the browser. It hooks into the request and checks if the file being requested is in the cache, if it is it returns it from the cache, it it isnt it forwards the request onto the network to get it from the server.

At this point you should be able to disable your network connection (Application > Service Workers > offline checkbox) and the page should still load but without any data from the server. Thats the next steps.

service-worker-3.js:
This time we are adding an if statement to the fetch event listener to look at GET requests for todos from the API. This bit of code then grabs the HTTP response, clones it and stores the data in IndexedDB using a library called localForage.
IndexedDB is a browserside JSON database, it is limited in size by your browser but is VERY fast and great for storing API response data for quick retrieval, like caching files.

> This will not yet work!!

service-worker-4.js:
The only line on change here is line 17 `importScripts('js/localforage.js');` which imports the localForage library. This is important because you cannot import the library into the HTML. Js loaded into the HTML is run in the browsers JS execution thread, but the service worker runs it its own execution thread and so does not have access to browser libraries (or the DOM) so any libraries must be imported in this way. Weird.

> This should now work! Turn your network on and refresh the page a few times, you should see data appear in Application > IndexedDB.

service-worker-5.js:
Now that we have data in IndexedDB we can get the data back ut if the network is not available. In this step we add a catch to the fetch request so that if it fails, we can get the data out of IndexedDB using localForage, create a fake HTTP Response, fillit with data and return it as if the data had come from the network.

> You can now disable your network and the page should reload exactly the same. The add new Todo will not work however.

service-worker-6.js:
Now that our index page works offline we can make the done page work offline. This page is server-side rendered, no ajax request to get the todos. To make this page work offline we just have to cache the html in the same way we did the static assets of the index page. The only change to the service worker is to add the `/done` page into the array of files to cache.

final step:
When building offline applications its important to inform the user that the data may not be current. We can do this using the `online` and `offline` events from our front-end JavaScript. If you look in `/public/js/app.js` is some code for displaying a message when the user goes offline and removing the message when they come online. It also disabled the add todo input.