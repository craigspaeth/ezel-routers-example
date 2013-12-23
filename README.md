# Ezel Routers Example

This is an example app bootstrapped from [Ezel](ezeljs.com) that shows how one can link together multiple apps with Backbone routers to create a more single-page-app experience where there are no page refreshes between apps, but initial rendering still happens on the server-side.

## Getting Started

1. Clone the repo `git clone git@github.com:craigspaeth/ezel-routers-example.git`
2. `cd` to the directory and install node modules `npm install`
3. Start the example `make s`

## What's Happening in Here?

In this example there are two apps. A "commit" app that shows the detail page of a single Github commit, and a "commits" app that shows the list of commits for an Artsy Github repository. Each page is rendered on the server via the route handler in their respective `index.js` files. The "layout" component is a component that both apps include containing a layout template, some general styles, and a `client.js` file.

In the layout's `client.js` file we are instantiating each app's client-side Backbone router and hijacking links to use push-state instead of page refreshes. These routers do the rendering on the client-side and can be found in each app's `client.js` files. This turns the experience into a single page application at this point by gluing together each app through their Backbone routers.

## Caveats

This example is more of a conversation starter. There are some known caveats that may want to be addressed in this solution including:

* Duplicated route declarations and fetching code between server/client
* Setup/teardown of long-lived Backbone views
* Having a component require into apps seems like an antipattern
* In more complex apps treating the body as the main region that gets re-rendered won't always fly