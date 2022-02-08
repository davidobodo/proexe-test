<p align="center" style="background-color: #fff; padding: 20px">
<img src="https://uploads-ssl.webflow.com/610824d4fcb6d649baba751a/616ef5037713a882f83023ee_Proexe_logo_dark.svg" />
</p>

# Proexe Frontend Dashboard Test

-   App Link https://proexe-wcs.netlify.app/

## Language choice

`Vanilla Javascript` was used to write the entire codebase, however `Typescript` can be equally used, but since it was not part of the specification decided to go with plain vanilla Javascript

## Styling choice

In terms of preference, I usually like to build my components and entire styling system right from scratch or use solutions like [Tailwind css](https://tailwindcss.com/), [Styled Components](https://styled-components.com/) and this is because pixel perfection as well as modification can be easily made, especially when a design file is given by a designer and the exact replica is needed. However the reasons below made me choose [Material UI](https://mui.com/)

1. The application is not too large.
2. Readily available accessible components. [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/)
3. Readiily available theme, colors and design system.
4. Since no specific design file, design of dashboard is flexible (i.e no need for pixel perfection)

## Running app on local

-   Clone repository
-   run `yarn` to install packages
-   run `yarn start` to start up app on localhost
