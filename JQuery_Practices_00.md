# [jQuerry](https://jquery.com/) -- New Wave JavaScript

![license scan](https://camo.githubusercontent.com/5d9de981d9d8bac0704c88c883fb7ea189853438/68747470733a2f2f6170702e666f7373612e696f2f6170692f70726f6a656374732f6769742532426769746875622e636f6d2532466a71756572792532466a71756572792e7376673f747970653d736869656c64)

![chat](https://camo.githubusercontent.com/23f54f6f19526affe12eff896c1e88d65cc9c921/68747470733a2f2f6261646765732e6769747465722e696d2f6a71756572792f6a71756572792e737667)

# Contribution Guides

In the spirit of open source software development, jQuery always encourages community code contribution. To help you get started and before you jump into writing code, be sure to read these important contribution guidelines thoroughly:

  1. [Getting Involved](https://contribute.jquery.org/)
  2. [Core Style Guide](https://contribute.jquery.org/style-guide/js/)
  3. [Writing Code for jQuery Foundation Projects](https://contribute.jquery.org/code/)

# Environments in which to use jQuery

* [Browser support](https://jquery.com/browser-support/)

* jQuery also supports Node, browser extensions, and other non-browser environments.

# What you need to build your own jQuery

To build jQuery, you need to have the latest Node.js/npm and git 1.7 or later. Earlier versions might work, but are not supported.

For Windows, you have to download and install [git](https://git-scm.com/downloads)and [Node.js](https://nodejs.org/en/download/).

macOS users should install [Homebrew](https://brew.sh/). Once Homebrew is installed, run `brew install git` to install git, and `brew install node` to install Node.js.

Linux/BSD users should use their appropriate package managers to install git and Node.js, or build from source if you swing that way. Easy-peasy.

# How to build your own jQuery

Clone a copy of the main jQuery git repo by running:

```bash
git clone git://github.com/jquery/jquery.git
```

Enter the jquery directory and run the build script:

```bash
cd jquery && npm run build
```
The built version of jQuery will be put in the dist/ subdirectory, along with the minified copy and associated map file.

If you want to create custom build or help with jQuery development, it would be better to install[grunt command line interface](https://github.com/gruntjs/grunt-cli) as a global package:

```bash
npm install -g grunt-cli
```

Make sure you have `grunt` installed by testing:

```bash
grunt -V
```

Now by running the grunt command, in the jquery directory, you can build a full version of jQuery, just like with an npm run build command:

```bash
grunt
```

There are many other tasks available for jQuery Core:

```bash
grunt -help
```

# Modules

Special builds can be created that exclude subsets of jQuery functionality. This allows for smaller custom builds when the builder is certain that those parts of jQuery are not being used. For example, an app that only used JSONP for `$.ajax()` and did not need to calculate offsets or positions of elements could exclude the offset and ajax/xhr modules.

Any module may be excluded except for `core`, and `selector`. To exclude a module, pass its path relative to the `src` folder (without the `.js` extension).