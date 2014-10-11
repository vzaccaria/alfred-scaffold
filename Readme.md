
This is just some scaffolding code for creating a simple **filter then open url** alfred workflow. I am using npm just for dependencies. You should checkout the source on github and work on that to create your own.

You have everything you need for creating a `.alfredworkflow` package.

# Instructions

To create a simple `filter -> openurl` workflow:

* edit `lib/workflow.ls` (Livescript); use the `alfredo` library to generate candidate items for feedback.
* put your filter and workflow images into the `images` folder
* Update `package.json` with name, author, description and relative icon paths.
* `make -f makefile.mk pack` to create the alfred workflow in the same directory.


