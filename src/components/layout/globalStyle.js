import { createGlobalStyle } from 'styled-components'
import theme from '../../theme/variables'

const GlobalStyle = createGlobalStyle`
    html,body {
        color: ${theme.colorBlack};
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: normal;
        word-wrap: break-word;
        font-kerning: normal;
        font-feature-settings: "kern", "liga", "clig", "calt";
        margin: 0;
        font-size: 18px;
    }
    html{
        border: 4px solid ${theme.colorBlack};
    }
    @media only screen and (min-width: 480px) {
        html,body {
            font-size: 20px;
        }
    }
    @media only screen and (min-width: 880px) {
        html,body {
            font-size: 22px;
        }
    }
    div{
        box-sizing: border-box;
    }
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    main,
    menu,
    nav,
    section,
    summary {
    display: block;
    }
    audio,
    canvas,
    progress,
    video {
    display: inline-block;
    }
    audio:not([controls]) {
    display: none;
    height: 0;
    }
    progress {
    vertical-align: baseline;
    }
    [hidden],
    template {
    display: none;
    }
    a {
        &,&:active,&:hover{
            background-color: transparent;
            -webkit-text-decoration-skip: objects;
            color: ${theme.colorPrimary};
            outline-width: 0;
        }
        &.black{
            color: ${theme.colorBlack};
            text-decoration: none;
            font-style: italic;
        }
    }

    abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
    }

    strong {
    font-weight: inherit;
    font-weight: bolder;
    }
    dfn {
    font-style: italic;
    }

    mark {
    background-color: #ff0;
    color: #000;
    }
    small {
    font-size: 80%;
    }
    sub,
    sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
    }
    sub {
    bottom: -.25em;
    }
    sup {
    top: -.5em;
    }
    img {
    border-style: none;
    }
    svg:not(:root) {
    overflow: hidden;
    }
    code,
    kbd,
    pre,
    samp {
    font-family: monospace, monospace;
    font-size: 1em;
    }
    figure {
    margin: 1em 40px;
    }
    hr {
    b: content-box;
    height: 0;
    overflow: visible;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
    font: inherit;
    margin: 0;
    }
    optgroup {
    font-weight: 700;
    }
    button,
    input {
    overflow: visible;
    }
    button,
    select {
    text-transform: none;
    }
    [type=reset],
    [type=submit],
    button,
    html [type=button] {
    -webkit-appearance: button;
    }
    [type=button]::-moz-focus-inner,
    [type=reset]::-moz-focus-inner,
    [type=submit]::-moz-focus-inner,
    button::-moz-focus-inner {
    border-style: none;
    padding: 0;
    }
    [type=button]:-moz-focusring,
    [type=reset]:-moz-focusring,
    [type=submit]:-moz-focusring,
    button:-moz-focusring {
    outline: 1px dotted ButtonText;
    }
    fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: .35em .625em .75em;
    }
    legend {
    b: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
    }
    textarea {
    overflow: auto;
    }
    [type=checkbox],
    [type=radio] {
    b: border-box;
    padding: 0;
    }
    [type=number]::-webkit-inner-spin-button,
    [type=number]::-webkit-outer-spin-button {
    height: auto;
    }
    [type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
    }
    [type=search]::-webkit-search-cancel-button,
    [type=search]::-webkit-search-decoration {
    -webkit-appearance: none;
    }
    ::-webkit-input-placeholder {
    color: inherit;
    opacity: .54;
    }
    ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
    }

    * {
    b: inherit;
    }
    *:before {
    b: inherit;
    }
    *:after {
    b: inherit;
    }
    
    img {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    }
    
    hgroup {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    }
    ul {
    margin-left: 1.45rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
    }
    ol {
    margin-left: 1.45rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
    }
    dl {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    }
    dd {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    }
    
    figure {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    }
    pre {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    font-size: 0.85rem;
    line-height: 1.42;
    background: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    overflow: auto;
    word-wrap: normal;
    padding: 1.45rem;
    }
    table {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    font-size: 1rem;
    line-height: 1.45rem;
    border-collapse: collapse;
    width: 100%;
    }
    fieldset {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    }
    blockquote {
    margin-left: 0.4rem;
    margin-right: 2.3em;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0.9rem;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 2.3em;
    font-style: italic;
    border-left: 4px solid ${theme.colorGray};
    font-size: 1.1em;
    line-height: 1.4;
    }
    form {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    }
    noscript {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    }
    iframe {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    }
    hr {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: calc(1.45rem - 1px);
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
    }
    address {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    }
    em {
        font-style: italic;
    }

    strong {
    font-weight: bold;
    }
    dt {
    font-weight: bold;
    }
    th {
    font-weight: bold;
    }
    li {
    margin-bottom: calc(1.45rem / 2);
    }
    ol li {
    padding-left: 0;
    }
    ul li {
    padding-left: 0;
    }
    li > ol {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
    }
    li > ul {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
    }
    blockquote *:last-child {
    margin-bottom: 0;
    }
    li *:last-child {
    margin-bottom: 0;
    }
    p *:last-child {
    margin-bottom: 0;
    }
    li > p {
    margin-bottom: calc(1.45rem / 2);
    }
    code {
    font-size: 0.85rem;
    line-height: 1.45rem;
    }
    kbd {
    font-size: 0.85rem;
    line-height: 1.45rem;
    }
    samp {
    font-size: 0.85rem;
    line-height: 1.45rem;
    }
    abbr {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
    }
    acronym {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
    }
    abbr[title] {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
    text-decoration: none;
    }
    thead {
    text-align: left;
    }
    td,
    th {
    text-align: left;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    font-feature-settings: "tnum";
    -moz-font-feature-settings: "tnum";
    -ms-font-feature-settings: "tnum";
    -webkit-font-feature-settings: "tnum";
    padding-left: 0.96667rem;
    padding-right: 0.96667rem;
    padding-top: 0.725rem;
    padding-bottom: calc(0.725rem - 1px);
    }
    th:first-child,
    td:first-child {
    padding-left: 0;
    }
    th:last-child,
    td:last-child {
    padding-right: 0;
    }
    tt,
    code {
    background-color: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
        "Liberation Mono", Menlo, Courier, monospace;
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    }
    pre code {
    background: none;
    line-height: 1.42;
    }
    code:before,
    code:after,
    tt:before,
    tt:after {
    letter-spacing: -0.2em;
    content: " ";
    }
    pre code:before,
    pre code:after,
    pre tt:before,
    pre tt:after {
    content: "";
    }
    

    /* Typography */

    h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0;
        padding: 0;
        margin-bottom: 1.45rem;
        font-weight: 700;
        text-rendering: optimizeLegibility;
        color: inherit;
        line-height: 1.1
    }
    h1,.h1 {
        font-size: 2.25em;
    }
    h2,.h2 {
        font-size: 1.62671em;
    }
    h3, .h3 {
        font-size: 1.38316em;
    }
    h4, .h4 {
        font-size: 1em;
    }
    h5, .h5 {
        font-size: 0.85028em;
    }
    h6, .h6 {
        font-size: 0.78405em;
    }
    .subtitle {
        font-size: 1.3em;
    }
    p,.paragraph {
        margin: 0;
        padding: 0;
        line-height: 1.5;
        margin-bottom: 1.45rem;
    }

    /* Buttons */
    .button {
        letter-spacing: 0.5px;
        display: table;
        font-weight: 700;
        text-decoration: none;
        font-size: 1.1em;
        padding: 10px 18px;
        margin-bottom: 18px;

        &.button-primary{
            background-color: ${theme.colorBlack};
            color: white;
        }
        &.button-colored{
            background-color: ${theme.colorPrimary};
            color: white;
        }
        &.button-primary-reverse{
            color: ${theme.colorBlack};
            background-color: white;
        }
        &.inline{
            display: inline-block;
        }
    }
`

export default GlobalStyle
