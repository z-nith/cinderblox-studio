![cinderblox header](https://res.cloudinary.com/znth/image/upload/v1595451088/Github_Banner_o61lrz.png)

![License](https://img.shields.io/badge/license-MIT-%2300A2FF?style=for-the-badge&labelColor=%23121516) ![Styled With](https://img.shields.io/badge/formatted--with-prettier-%23DB1A3F?style=for-the-badge&labelColor=%23121516)
![Deployed on Now](https://img.shields.io/badge/deployed--with-vercel-%2300A2FF?style=for-the-badge&labelColor=%23121516)

> ⚠️This project is under active development & may not reflect the listed features below

## What is CinderBlox Studio?

[CinderBlox Studio](https://cinderblox.studio) is an open-source web application showcasing the power of color quantization. The basic use-case is to feed `CinderBlox` an image and have it extract a representative color palette.

### Other planned features

-   Copy colors to clipboard
-   Export color palette in a number of formats including JSON
-   Have `CinderBlox` source a network image instead of uploading one yourself
-   Expose a public API as a service
-   Extend web application to serve as a PWA
-   Have publicly accessible documentation for the GUI and API via [Docusaurus](https://docusaurus.io/)

## Motivation

I initially built `CinderBlox` as a fun side-project to showcase my front-end architecture skills (and practice my Typescript) while combining it with something I love: color theory. I initially had plans to write a CLI (called [Stratomorph-CLI](https://github.com/z-nith/stratomorph-cli)) which leverages an open-source node module ([RgbQuant](https://github.com/leeoniya/RgbQuant.js)) to achieve the same purpose locally. Although this project was a nice thought experiment, I decided to step up the complexity and built a fully functional web application and public API.

Although there is a myriad of applications which accomplish the same function, many of these are closed-source and non-extensible. I've always been an strong believer of the open-source community and their ability to create projects that not-only serve the same purpose, by allow the power user to extend it beyond its initial conception.

## Technologies

`CinderBlox` is built on [Brad Frost's](https://bradfrost.com/) `Atomic design` philosophies which pairs very nicely with [Vercel](https://vercel.com/)'s [Next.js](https://nextjs.org/) framework. In addition to this toolset, the following tech-stack is used:

-   React
-   [Material-UI](https://material-ui.com/)
-   Jest

## Contributing

-   `TODO`

## Acknowledgements and 3rd party libraries

-   `TODO`
