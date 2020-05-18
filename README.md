# StrataGen
StrataGen is a single-page web application that generates Warhammer 40k datacards.

StrataGen currently supports the creation of Stratagem cards.  The cards may be exported as png files.  The exported cards are sized as standard poker size, 63mm by 88mm and set to a resolution of 300 dpi.  The exported files are suitable for printing or creating actual playing cards is so desired.

At the moment this application is still under developement and is not ready for actual use.

If you actually use this tool and find it useful let me know.

## Building

### Quick Start

StrataGen is written in Typescript and uses npm for initialization, compiling and launching a 
test server at http://localhost:8080.

    $ git clone https://github.com/rweyrauch/StrataGen.git
    $ cd StrataGen
    $ npm install
    $ npm start

### Details

StrataGen uses webpack for compilation of the Typescript into Javascript and to bundle the
Javascript source into a single Javascript file.

The application can be built in either a debug or production release.   The default is a debug build.
To build for debugging:

    $ npm run build

To build StrataGen for release:

    $ npm run buildprod


