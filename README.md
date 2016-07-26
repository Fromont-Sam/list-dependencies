# list-dependencies
List the dependencies present in the local npm project's `package.json` file.

The tool lists all dependencies listed explicitly in `package.json` in the
current project/directory. No attempt is made to look at indirect dependencies and it does
not connect to npm, it just reports what is configured locally.

By default it lists all dependencies but you can supply a single
argument to filter the list, which will match using a RegExp against the module
names.

Installation
------------

The module can be installed from the public npm registry, e.g.

    npm install --save-dev @wabson/list-dependencies

Usage
-----

First, reference the `list-dependencies` command script by adding it to your
`package.json`.

    ...
      "scripts": {
        "list-deps": "list-dependencies"
      },
    ...

You can now run commands such as the following to list the configured dependencies
of your project.

    # list all dependencies, one-per-line
    npm run list-deps
    # list selected dependencies matching a regexp
    npm run list-deps "^ng2-alfresco-"

If you are parsing the output of the script with a shell script, you probably want
to add `--loglevel=silent` to the `npm run` command.

The project also exports a single function to fetch the list of dependencies and run
a callback function with the list of matched dependencies as a single argument, so
you can use this directly if you are writing scripts yourself.

    var listDependencies = require('list-dependencies');
    listDependencies('lodash', function(deps) {
      console.log(deps);
    });

Known issues
------------

### There was an error reading the package.json file

The script will only look for `package.json` files in the current directory. You
should always run the command script via `npm run` to ensure that the current
working directory is set correctly.
