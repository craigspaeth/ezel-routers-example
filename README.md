# Ezel Routers Example

This is an example app bootstrapped from [Ezel](ezeljs.com) that shows how one can link together multiple apps with Backbone routers to create a more single-page-app experience where there are no page refreshes between apps, but initial rendering still happens on the server-side.

## Getting Started

1. Clone the repo `git clone git@github.com:craigspaeth/ezel-routers-example.git`
2. `cd` to the directory and install node modules `npm install`
3. Start the example `make s`

## What's Happening in Here?

In this example there are two apps. A [commit](https://github.com/craigspaeth/ezel-routers-example/tree/master/apps/commit) app that shows the detail page of a single Github commit, and a [commits](https://github.com/craigspaeth/ezel-routers-example/tree/master/apps/commits) app that shows the list of commits for an Artsy Github repository. Each page is rendered on the server via the route handler in their respective [`index.js`](https://github.com/craigspaeth/ezel-routers-example/blob/master/apps/commits/index.js#L13) files. The [layout component](https://github.com/craigspaeth/ezel-routers-example/tree/master/components/layout) is a component that both apps use containing a layout template, some general styles, and a [`client.js`](https://github.com/craigspaeth/ezel-routers-example/blob/master/components/layout/client.js) file.

In the layout's `client.js` file we are [instantiating each app's client-side Backbone router](https://github.com/craigspaeth/ezel-routers-example/blob/master/components/layout/client.js#L12), and hijacking links to use push-state instead of page refreshes. These routers do the rendering on the client-side and can be found in each app's `client.js` files [here](https://github.com/craigspaeth/ezel-routers-example/blob/master/apps/commit/client.js#L6) and [here](https://github.com/craigspaeth/ezel-routers-example/blob/master/apps/commits/client.js#L26). This turns the experience into a single page application at this point by gluing together each app through their Backbone routers.

## Caveats

This example is more of a conversation starter. There are some known caveats that may want to be addressed in this solution including:

* Duplicated route declarations and fetching code between server/client
* Setup/teardown of long-lived Backbone views
* Having a component require into apps seems like an anti-pattern
* In more complex apps treating the body as the main region that gets re-rendered won't always fly