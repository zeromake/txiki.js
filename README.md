
# <p align="center">txiki.js — The tiny JavaScript runtime</p>

## Overview

> **txikia** (basque): small, tiny.

*txiki.js* is a small and powerful JavaScript runtime. It's built on the shoulders of
giants: it uses [QuickJS] as its JavaScript engine, [libuv] as the platform layer,
[wasm3] as the WebAssembly engine and [curl] as the HTTP / WebSocket client.

It targets ECMAScript 2020 and implements many web platform features.

See it in action here:

<p align="center">
    <a href="https://video.fosdem.org/2022/D.javascript/building_a_tiny_javascript_runtime_with_quickjs.mp4" title="Building a tiny JavaScript runtime with QuickJS">
        <img width="460" src="https://raw.githubusercontent.com/saghul/txiki.js/master/video.png" alt="Building a tiny JavaScript runtime with QuickJS"/>
    </a>
</p>

## Getting started

First head over to [building](#building) and build the runtime.

```bash
$ ./build/tjs eval "console.log('hello world')"
hello world
$
```

If you want to run a script you can use `tjs run`:

```bash
$ ./build/tjs run examples/hello_world.js
hello world
$
```

Explore all the options:

```bash
$ ./build/tjs --help
```

## Features

Support for the [ES2020] specification plus some ES2020+ features like top level await.

### Web Platform APIs

- [alert, confirm, prompt] (1)
- [Console]
- [Crypto] (2)
- [Encoding API]
- [EventTarget]
- [fetch]
- [JSON modules]
- [Performance]
- [setTimeout, setInterval]
- [Streams API]
- [URL]
- [URLPattern]
- [URLSearchParams]
- [WebAssembly] (3)
- [WebSocket]
- [Web Workers API]

(1): All of them are async.

(2): No subtle support.

(3): No tables, globals or memory support.

### Runtime features

- TCP and UDP sockets
- Unix sockets / named pipes
- Signal handling
- File operations
- Child processes
- DNS (getaddrinfo)
- WASI
- Miscellaneous utility functions

See the [full API documentation].

Other extras:

- Import directly from HTTP(S) URLs
- Import JSON files
- BigFloat and BigDecimal extensions
- Builtin test runner

### Standard library

The following modules compose the standard library:

- [`tjs:assert`](https://bettercallsaghul.com/txiki.js/api/modules/tjs_assert.html)
- [`tjs:ffi`](https://bettercallsaghul.com/txiki.js/api/modules/tjs_ffi.html)
- [`tjs:getopts`](https://bettercallsaghul.com/txiki.js/api/modules/tjs_getopts.html)
- [`tjs:hashing`](https://bettercallsaghul.com/txiki.js/api/modules/tjs_hashing.html)
- [`tjs:ipaddr`](https://bettercallsaghul.com/txiki.js/api/modules/tjs_ipaddr.html)
- [`tjs:path`](https://bettercallsaghul.com/txiki.js/api/modules/tjs_path.html)
- `tjs:sqlite`
- [`tjs:uuid`](https://bettercallsaghul.com/txiki.js/api/modules/tjs_uuid.html)

## Supported platforms

* GNU/Linux
* macOS
* Windows (beta)
* Other Unixes (please test!)

## Building

[CMake] is necessary.

*NOTE:* The txiki.js build depends on a number of git submodules ([libffi], [libuv] and [wasm3]).
If you didn't already clone this repository recursively, make sure you initialize these
submodules with `git submodule update --init` before proceeding to the build. 

### GNU/Linux

Install dependencies (`libcurl`, `build-essential`, `cmake`):

```bash
# On Debian / Ubuntu
sudo apt install libcurl4-openssl-dev build-essential cmake
```

### macOS

Install dependencies (`cmake`, `autoconf`):

```bash
brew install cmake autoconf
```

### Unix systems

```bash
# Get the code
git clone --recursive https://github.com/saghul/txiki.js --shallow-submodules && cd txiki.js
# Compile it!
make
# Run the REPL
./build/tjs
```

### Windows (beta)

<details>
Windows support it's currently considered beta. Tests do pass, but building it is not as easy as it should be.

Building has only been tested in 64bit Windows.

#### Prerequisites

First make sure you have [MSYS2](https://www.msys2.org) installed. The `mingw64` and `clang64` environments are currently tested.

Then install the required dependencies:

```bash
pacman -S git make pactoys
pacboy -S curl-winssl:p toolchain:p cmake:p ninja:p
```

#### Build

These commands must be run in a MinGW64 or clang64 shell.

```bash
make
```

This will build the executable just like on Unix. Note that at this point there are a number of dynamically linked libraries, so if you want to use the executable on a different system you'll need to copy those too. Check the list with `ldd build/tjs.exe`.

#### Running the tests

Make sure these commands are run from Windows Terminal (mintty, what MSYS2 provides is not supported).

```bash
make test
```

</details>

## Versioning

At this time txiki.js uses [calendar versioning] with the form YY.MM.MICRO.

<br />
<br />

<footer>
<p align="center" style="font-size: smaller;">
Built with ❤️ by saghul and these awesome <a href="https://github.com/saghul/txiki.js/graphs/contributors" target="_blank">contributors</a>.
</footer>

[QuickJS]: https://bellard.org/quickjs/
[libuv]: https://libuv.org/
[curl]: https://github.com/curl/curl
[libffi]: https://github.com/libffi/libffi
[full API documentation]: https://bettercallsaghul.com/txiki.js/api/
[CMake]: https://cmake.org/
[wasm3]: https://github.com/wasm3/wasm3
[alert, confirm, prompt]: https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
[fetch]: https://fetch.spec.whatwg.org/
[EventTarget]: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
[Console]: https://developer.mozilla.org/en-US/docs/Web/API/Console
[Crypto]: https://developer.mozilla.org/en-US/docs/Web/API/Crypto
[Encoding API]: https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API
[JSON modules]: https://github.com/tc39/proposal-json-modules
[Performance]: https://developer.mozilla.org/en-US/docs/Web/API/Performance
[setTimeout, setInterval]: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
[Streams API]: https://developer.mozilla.org/en-US/docs/Web/API/Streams_API
[URL]: https://developer.mozilla.org/en-US/docs/Web/API/URL
[URLPattern]: https://developer.mozilla.org/en-US/docs/Web/API/URLPattern
[URLSearchParams]: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
[Web Workers API]: https://developer.mozilla.org/en-US/docs/Web/API/Worker
[WebAssembly]: https://developer.mozilla.org/en-US/docs/WebAssembly
[WebSocket]: https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
[ES2020]: https://tc39.es/ecma262/
[calendar versioning]: https://calver.org/
