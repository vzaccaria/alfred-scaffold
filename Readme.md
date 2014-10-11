
This is just some scaffolding code for creating a simple **filter then open url** alfred workflow.

# Install

    npm install alfred-scaffold -g

# Use

    new-alfred-workflow --name <name>

This creates a new directory with all the files needed to build your extension.

# Instructions to build your extension 

To create a simple `filter -> openurl` workflow:

* edit `src/workflow.js`; use the `alfredo` module to generate candidate items for feedback.
* put your filter and workflow icons into the `images` folder
* Update `package.json` with name, author, description and relative icon paths.
* `make -f makefile.mk pack` to create the alfred workflow in the same directory. It will use package.json information




