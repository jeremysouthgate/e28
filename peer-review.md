## P3 Peer Review

+ Reviewer's name: Jeremy Southgate
+ Reviwee's name: Mihika Shilpi
+ URL to reviewee's Github repo: *<https://github.com/mihika-shilpi/e28/tree/master/p3>*


### Are you able to produce any errors or unexpected results?
+ On a particular **album** page, App does not check for duplicate likes of an album and prevent further input.
+ On the **like** page, clicking on "remove" does not provide user feedback and unexpectedly redirects to the particular **album** page (because clicking "remove" fires the event intended for clicking on the artwork).
+ On narrow window resize, the minified navigation is an incomplete feature.
+ On narrow window resize, the **home** page main photo of headphones becomes extremely small and unbalances the view.
+ On narrow window resize, the **album** page, likewise, has photos with no minimum width, so they become small and unbalance the page.
+ On mobile, the **home** page top-left logo lacks the margin it has on desktop.
+ On mobile, the site cannot properly function without the minified nav bar implemented.


### Were there any parts of the interface that you found confusing or unclear?

+ The current **Home** page could look a little more like a homepage i.e. make the splash image even bigger and feature the logo. Right now the navigation, the description, and the photo of headphones dominate the home view in equal parts. While this is not an interface-focused class, "Single Page Application" sites typically revolve strongly around a *unified*, distinctive interface. It's important to establish what the unifying characteristic is. And it's probably the logo.


### Are there aspects of the code that you feel were not self-evident and would benefit from comments?

#### --> Comments (as Documentation)

+ In general, more commenting is needed. For code, group code into blocks and comment the blocks. Even for html, add comments to help other devs see blocks and hierarchy. See: [JS Commenting Example 1](https://github.com/jeremysouthgate/e28/blob/master/mymusic/src/main.js). [JS Commenting Example 2](https://github.com/jeremysouthgate/e28/blob/master/p2/src/script.js). [HTML Commenting Example](https://github.com/jeremysouthgate/e28/blob/master/mymusic/public/index.html).

#### --> Functions (as Documentation)

+ The code is devoid of comments except for in the global Like class, which identifies each function with a comment. Even so, these comments are less useful for documentation purposes than the use of more descriptive function names would be...count, update, add, remove, and getItem are such common descriptors that -- especially in a global class -- they will almost certainly be duplicated in a larger application. This will cause unexpected conflicts. e.g. "remove" from a shopping cart v. "remove" from a wishlist. *For a **global** class*, as here: reverse comments and function names to be more concise in the former and descriptive in the latter. Use longer comments for more complex functions...

```javascript
/* Count */
count_liked_items() {}

/* Update */
update_localstorage() {}

/*
 *  Favorite Albums
 */

/* Add */
add_fav_album() {}

/* Remove */
remove_fav_album() {}


/*
 *  do_something_complicated()
 *
 *  Description: This function adds, removes, and spins around X times
 *  Input: the number of times to spin
 *  Output: the level of dizziness
 */
do_something_complicated(x) {
    /*
     *  Do complicated stuff.
     */
    return level_of_dizziness;
}
```

+ However, the global class of functions should be broken-up and contained by components. Thus, if I had a "FavoriteAlbums.vue" component I could omit the above "\_fav_album" part of the function name because it would be clear that "remove_album" method in the "FavoriteAlbums.vue" component will remove an album from favorite albums. That's the beauty of components.


### Are there any parts of the code that you found interesting or taught you something new?

+ Interestingly, this site globally relies on "UIKit" for its interface (imported in App.vue), so all component style elements are empty. **HomePage.vue** and **LikePage.vue** omit style tags entirely. This explains the window-size scaling issues. But, it seems to break the Vue design pattern for a *self-contained* component: template, script, *and style*. If the style tag has to be empty of custom css, at least add a *comment* with a citation to the framework. Devs need to know that the particular component has a dependency.


### Are there any best practices discussed in course material that you feel were not addressed in the code?

+ This site is written more like a traditional multi-page javscript application than a component-based Single Page Application.

#### Discussion
As a matter of design, the "App.js" constants should be *contained within* the **App.vue** component. App.vue = your Single Page Application site.

Likewise, the "Like.js" state properties and methods should be *contained within* the appropriate *parent component*. Right now, App.vue (at line 50) imports app.js, which in turn (at line 1) imports Like.js. Is this really necessary?

In a much larger application than this, one *might* need to break-out functions into another file or create a dedicated global service class. But, if so, I would name the file "App_Functions.js" to go with "App.vue" in the root "src" directory (probably not though) or put a "FavoriteAlbum-Services.js" in a new "services" directory in the root "src".

Here, there is no consistency among App.vue, the lowercase "app.js", and the otherwise-named "Like.js." For Like.js, I understand it's capitalized b/c it's a class and it's global b/c it's in the root of the "src" directory. But, it doesn't seem to fit. It doesn't leverage component methods and [event emitters](https://hesweb.dev/e28/notes#/vue/components-events) to invoke parent component methods. **[[office hour recommended on this topic]]**


### Do you have any additional comments not covered in the above questions?

+ Consider making the top-left logo a clickable link to the homepage.

+ On the **albums** page, the heights of the white containter divs
(having the album artwork and album name) could align.

+ After liking an album, a green message flash-confirms "Your like has been updated!" and then disappears. Feedback about this: (1) Does the message as stated really give useful feedback to the user? A more direct, useful message is "Album added to favorites." In other words, inform the user of the actual *state* of the application rather than just 'something happened.' (2) It's not necessary to have the message disappear? Once an album is added to favorites, any time the user visit's that album's page, it could be useful to know that the album is already favorited. (3) It *might* (author's design choice) be useful to have a link such as "Go to favorites" within/proximate to this message?
