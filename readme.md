# Proof of Concept for [axe-core refactor/restructure](https://github.com/dequelabs/axe-core/issues/189)

## Why refactor/restructure?

axe-core codebase is hard to follow from a new contributor's perspective.
The code structure is highly coupled with the [build taks](https://github.com/dequelabs/axe-core/blob/master/Gruntfile.js#L237),
as it depends on "magic" of file concatenation and intermediate file generation from configuration files ("*.json").

Since it is file concatenation, [it heavily relies on the location of the file system (file path)](https://github.com/dequelabs/axe-core/blob/master/Gruntfile.js#L46-L73)

Grunt build process is a magic, specially [grunt:configure](https://github.com/dequelabs/axe-core/blob/master/Gruntfile.js#L74-L85).


## Few thing worth considering, prior refactoring axe-core.

>axe-core is a lint engine executing certain rules against a given DOM and reporting the output.

If the above statement seems correct, then I feel axe-core can function similar to `eslint`.

- engine
- rules
- config
- reporter

`engine` is the core that runs the `rules` specified in the `config` and `reports` the `result`.

- For extending consumers can create plugins. These plugins information needs to be passed as part of the configuration. (_functionality not yet developed in the PoC_)
- For customizing consumer can update the config file accordingly.

Consider plugins and config something similar to [eslint plugins](http://eslint.org/docs/developer-guide/working-with-plugins) and [eslint config](http://eslint.org/docs/user-guide/configuring) respectively.

The consumer can also use a custom reporter, the reporter is basically a callback function.

The messaging and internationalization of the messaging is managed by rules. However, a consumer decides the locale, which is passed during the instantiation to the engine.
Engine passes the locale to the rule factory (rules/index.js) so that it can generate internationalized messages.


## What will be achieved by this?

- Three main pillars are completely de-coupled and do not mandate one to comprehend the whole code base, as long as one understands and respects the interfaces.
  - the engine:rule interface relies upon rules schema, which is predefined
  - the reporter:engine interface relies upon the engine output schema.
- Development can be performed in an independent way.

## Build

No more magic! See the [webpack.config.js](webpack.config.js).

To see it in action clone the repos, install the dependency, build the bundle, open up [test/index.html](test/index.html) for verification.
