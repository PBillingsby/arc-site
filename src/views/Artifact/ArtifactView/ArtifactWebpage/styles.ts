import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    padding: 20px;
    border: 1px solid ${(props) => props.theme.colors.border.secondary};
    background: ${(props) => props.theme.colors.container.primary.background};

    p, span, button, a, b, li, input {
        font-family: sans-serif;
        line-height: 20px;
        font-size: 14px;
    }


    /* Reset italic styling set by user agent */
    cite,
    dfn {
        font-style: inherit;
    }

    /* Straight quote marks for <q> */
    q {
        quotes: '"''"'"'""'";
    }

    /* Avoid collision of blockquote with floating elements by swapping margin and padding */
    blockquote {
        overflow: hidden;
        margin: 1em 0;
        padding: 0 40px;
    }

    /* Prevent the 'double bold' bug in Firefox when using DirectWrite */
    /* https://bugzilla.mozilla.org/show_bug.cgi?id=550128 */
    strong.selflink {
        font-weight: 700;
    }

    /* Consistent size for <small>, <sub> and <sup> */
    small {
        font-size: 85%;
    }

    .mw-body-content sub,
    .mw-body-content sup,
    span.reference

    /* for Parsoid */
        {
        font-size: 80%;
    }

    /* Same spacing for indented and unindented paragraphs on talk pages */
    .ns-talk .mw-body-content dd {
        margin-top: 0.4em;
        margin-bottom: 0.4em;
    }

    /* Main page fixes */
    #interwiki-completelist {
        font-weight: bold;
    }

    /* Reduce page jumps by hiding collapsed/dismissed content */
    .client-js .mw-special-Watchlist #watchlist-message,
    .client-js .NavFrame.collapsed .NavContent,
    .client-js .collapsible:not(.mw-made-collapsible).collapsed>tbody>tr:not(:first-child) {
        display: none;
    }

    /* Adds padding above Watchlist announcements where new recentchanges/watchlist filters are enabled */
    .mw-rcfilters-enabled .mw-specialpage-summary {
        margin-top: 1em;
    }

    /* Hide charinsert base for those not using the gadget */
    #editpage-specialchars {
        display: none;
    }

    /* Highlight linked elements (such as clicked references) in blue */
    body.action-info .mw-body-content :target,
    .citation:target {
        background-color: #def;
        /* Fallback */
        background-color: rgba(0, 127, 255, 0.133);
    }

    /* Styling for citations. Breaks long urls, etc., rather than overflowing box */
    .citation {
        word-wrap: break-word;
    }

    /* For linked citation numbers and document IDs, where the number need not be shown
    on a screen or a handheld, but should be included in the printed version */
    @media screen,
    handheld {
        .citation .printonly {
            display: none;
        }
    }

    /* Make the list of references smaller */
    /* Keep in sync with Template:Refbegin/styles.css */
    ol.references,
    div.reflist {
        font-size: 90%;
        /* Default font-size */
        margin-bottom: 0.5em;
    }

    div.reflist ol.references {
        font-size: 100%;
        /* Reset font-size when nested in div.reflist */
        margin-bottom: 0;
        /* Avoid double margin when nested in div.reflist */
        list-style-type: inherit;
        /* Enable custom list style types */
    }

    /* Allow hidden ref errors to be shown by user CSS */
    /* TemplateStyles */
    span.brokenref {
        display: none;
    }

    /* Reset top margin for lists embedded in columns */
    div.columns {
        margin-top: 0.3em;
    }

    div.columns dl,
    div.columns ol,
    div.columns ul {
        margin-top: 0;
    }

    /* Avoid elements breaking between columns */
    .nocolbreak,
    div.columns li,
    div.columns dd dd {
        -webkit-column-break-inside: avoid;
        page-break-inside: avoid;
        break-inside: avoid-column;
    }

    /* Style for horizontal lists (separator following item).
    @source mediawiki.org/wiki/Snippets/Horizontal_lists
    @revision 8 (2016-05-21)
    @author [[User:Edokter]]
    */
    .hlist dl,
    .hlist ol,
    .hlist ul {
        margin: 0;
        padding: 0;
    }

    /* Display list items inline */
    .hlist dd,
    .hlist dt,
    .hlist li {
        margin: 0;
        display: inline;
    }

    /* Display nested lists inline */
    .hlist.inline,
    .hlist.inline dl,
    .hlist.inline ol,
    .hlist.inline ul,
    .hlist dl dl,
    .hlist dl ol,
    .hlist dl ul,
    .hlist ol dl,
    .hlist ol ol,
    .hlist ol ul,
    .hlist ul dl,
    .hlist ul ol,
    .hlist ul ul {
        display: inline;
    }

    /* Hide empty list items */
    .hlist .mw-empty-li {
        display: none;
    }

    /* Generate interpuncts */
    .hlist dt:after {
        content: ": ";
    }

    .hlist dd:after,
    .hlist li:after {
        content: " · ";
        font-weight: bold;
    }

    .hlist dd:last-child:after,
    .hlist dt:last-child:after,
    .hlist li:last-child:after {
        content: none;
    }

    /* Add parentheses around nested lists */
    .hlist dd dd:first-child:before,
    .hlist dd dt:first-child:before,
    .hlist dd li:first-child:before,
    .hlist dt dd:first-child:before,
    .hlist dt dt:first-child:before,
    .hlist dt li:first-child:before,
    .hlist li dd:first-child:before,
    .hlist li dt:first-child:before,
    .hlist li li:first-child:before {
        content: " (";
        font-weight: normal;
    }

    .hlist dd dd:last-child:after,
    .hlist dd dt:last-child:after,
    .hlist dd li:last-child:after,
    .hlist dt dd:last-child:after,
    .hlist dt dt:last-child:after,
    .hlist dt li:last-child:after,
    .hlist li dd:last-child:after,
    .hlist li dt:last-child:after,
    .hlist li li:last-child:after {
        content: ")";
        font-weight: normal;
    }

    /* Put ordinals in front of ordered list items */
    .hlist ol {
        counter-reset: listitem;
    }

    .hlist ol>li {
        counter-increment: listitem;
    }

    .hlist ol>li:before {
        content: " " counter(listitem) "\a0";
    }

    .hlist dd ol>li:first-child:before,
    .hlist dt ol>li:first-child:before,
    .hlist li ol>li:first-child:before {
        content: " (" counter(listitem) "\a0";
    }

    /* Unbulleted lists */
    .plainlist ol,
    .plainlist ul {
        line-height: inherit;
        list-style: none none;
        margin: 0;
    }

    .plainlist ol li,
    .plainlist ul li {
        margin-bottom: 0;
    }

    /* Default style for navigation boxes */
    .navbox {
        /* Navbox container style */
        box-sizing: border-box;
        border: 1px solid #a2a9b1;
        width: 100%;
        clear: both;
        font-size: 88%;
        text-align: center;
        padding: 1px;
        margin: 1em auto 0;
        overflow: hidden;
        /* Prevent preceding content from clinging to navboxes */
    }

    .navbox .navbox {
        margin-top: 0;
        /* No top margin for nested navboxes */
    }

    .navbox+.navbox {
        margin-top: -1px;
        /* Single pixel border between adjacent navboxes */
    }

    .navbox-inner,
    .navbox-subgroup {
        width: 100%;
    }

    .navbox-group,
    .navbox-title,
    .navbox-abovebelow {
        padding: 0.25em 1em;
        /* Title, group and above/below styles */
        line-height: 1.5em;
        text-align: center;
    }

    th.navbox-group {
        /* Group style */
        white-space: nowrap;
        /* @noflip */
        text-align: right;
    }

    .navbox,
    .navbox-subgroup {
        background-color: #fdfdfd;
        /* Background color */
    }

    .navbox-list {
        line-height: 1.5em;
        border-color: #fdfdfd;
        /* Must match background color */
    }

    /* cell spacing for navbox cells */
    tr+tr>.navbox-abovebelow,
    tr+tr>.navbox-group,
    tr+tr>.navbox-image,
    tr+tr>.navbox-list {
        /* Borders above 2nd, 3rd, etc. rows */
        border-top: 2px solid #fdfdfd;
        /* Must match background color */
    }

    .navbox th,
    .navbox-title {
        background-color: #ccccff;
        /* Level 1 color */
    }

    .navbox-abovebelow,
    th.navbox-group,
    .navbox-subgroup .navbox-title {
        background-color: #ddddff;
        /* Level 2 color */
    }

    .navbox-subgroup .navbox-group,
    .navbox-subgroup .navbox-abovebelow {
        background-color: #e6e6ff;
        /* Level 3 color */
    }

    .navbox-even {
        background-color: #f7f7f7;
        /* Even row striping */
    }

    .navbox-odd {
        background-color: transparent;
        /* Odd row striping */
    }

    .navbox .hlist td dl,
    .navbox .hlist td ol,
    .navbox .hlist td ul,
    .navbox td.hlist dl,
    .navbox td.hlist ol,
    .navbox td.hlist ul {
        padding: 0.125em 0;
        /* Adjust hlist padding in navboxes */
    }

    /* Default styling for Navbar template */
    .navbar {
        display: inline;
        font-size: 88%;
        font-weight: normal;
    }

    .navbar ul {
        display: inline;
        white-space: nowrap;
    }

    .mw-body-content .navbar ul {
        line-height: inherit;
    }

    .navbar li {
        word-spacing: -0.125em;
    }

    .navbar.mini li abbr[title] {
        font-variant: small-caps;
        border-bottom: none;
        text-decoration: none;
        cursor: inherit;
    }

    /* Navbar styling when nested in infobox and navbox */
    .infobox .navbar {
        font-size: 100%;
    }

    .navbox .navbar {
        display: block;
        font-size: 100%;
    }

    .navbox-title .navbar {
        /* @noflip */
        float: left;
        /* @noflip */
        text-align: left;
        /* @noflip */
        margin-right: 0.5em;
    }

    /* 'show'/'hide' buttons created dynamically by the CollapsibleTables javascript
    in [[MediaWiki:Common.js]] are styled here so they can be customised. */
    .collapseButton {
        /* @noflip */
        float: right;
        font-weight: normal;
        /* @noflip */
        margin-left: 0.5em;
        /* @noflip */
        text-align: right;
        width: auto;
    }

    /* Styling for JQuery makeCollapsible, matching that of collapseButton */
    .mw-parser-output .mw-collapsible-toggle {
        font-weight: normal;
        /* @noflip */
        text-align: right;
        padding-right: 0.2em;
        padding-left: 0.2em;
    }

    .mw-collapsible-leftside-toggle .mw-collapsible-toggle {
        /* @noflip */
        float: left;
        /* @noflip */
        text-align: left;
    }

    /* Infobox template style */
    .infobox {
        border: 1px solid #a2a9b1;
        border-spacing: 3px;
        background-color: #f8f9fa;
        color: black;
        /* @noflip */
        margin: 0.5em 0 0.5em 1em;
        padding: 0.2em;
        /* @noflip */
        float: right;
        /* @noflip */
        clear: right;
        font-size: 88%;
        line-height: 1.5em;
    }

    .infobox caption {
        font-size: 125%;
        font-weight: bold;
        padding: 0.2em;
        text-align: center;
    }

    .infobox td,
    .infobox th {
        vertical-align: top;
        /* @noflip */
        text-align: left;
    }

    .infobox.bordered {
        border-collapse: collapse;
    }

    .infobox.bordered td,
    .infobox.bordered th {
        border: 1px solid #a2a9b1;
    }

    .infobox.bordered .borderless td,
    .infobox.bordered .borderless th {
        border: 0;
    }

    .infobox.sisterproject {
        width: 20em;
        font-size: 90%;
    }

    .infobox.standard-talk {
        border: 1px solid #c0c090;
        background-color: #f8eaba;
    }

    .infobox.standard-talk.bordered td,
    .infobox.standard-talk.bordered th {
        border: 1px solid #c0c090;
    }

    /* styles for bordered infobox with merged rows */
    .infobox.bordered .mergedtoprow td,
    .infobox.bordered .mergedtoprow th {
        border: 0;
        border-top: 1px solid #a2a9b1;
        /* @noflip */
        border-right: 1px solid #a2a9b1;
    }

    .infobox.bordered .mergedrow td,
    .infobox.bordered .mergedrow th {
        border: 0;
        /* @noflip */
        border-right: 1px solid #a2a9b1;
    }

    /* Styles for geography infoboxes, eg countries,
    country subdivisions, cities, etc.            */
    .infobox.geography {
        border-collapse: collapse;
        line-height: 1.2em;
        font-size: 90%;
    }

    .infobox.geography td,
    .infobox.geography th {
        border-top: 1px solid #a2a9b1;
        padding: 0.4em 0.6em 0.4em 0.6em;
    }

    .infobox.geography .mergedtoprow td,
    .infobox.geography .mergedtoprow th {
        border-top: 1px solid #a2a9b1;
        padding: 0.4em 0.6em 0.2em 0.6em;
    }

    .infobox.geography .mergedrow td,
    .infobox.geography .mergedrow th {
        border: 0;
        padding: 0 0.6em 0.2em 0.6em;
    }

    .infobox.geography .mergedbottomrow td,
    .infobox.geography .mergedbottomrow th {
        border-top: 0;
        border-bottom: 1px solid #a2a9b1;
        padding: 0 0.6em 0.4em 0.6em;
    }

    .infobox.geography .maptable td,
    .infobox.geography .maptable th {
        border: 0;
        padding: 0;
    }

    /* Normal font styling for wikitable row headers with scope="row" tag */
    .wikitable.plainrowheaders th[scope=row] {
        font-weight: normal;
        /* @noflip */
        text-align: left;
    }

    /* Lists in wikitable data cells are always left-aligned */
    .wikitable td ul,
    .wikitable td ol,
    .wikitable td dl {
        /* @noflip */
        text-align: left;
    }

    /* ...unless they also use the hlist class */
    .toc.hlist ul,
    #toc.hlist ul,
    .wikitable.hlist td ul,
    .wikitable.hlist td ol,
    .wikitable.hlist td dl {
        text-align: inherit;
    }

    /* Icons for medialist templates [[Template:Listen]],
    [[Template:Multi-listen_start]], [[Template:Video]],
    [[Template:Multi-video_start]] */
    /* TemplateStyles */
    div.listenlist {
        background: url("upload.wikimedia.org/wikipedia/commons/4/47/Sound-icon.svg") no-repeat scroll 0 0 transparent;
        background-size: 30px;
        padding-left: 40px;
    }

    /* Fix for hieroglyphs specificity issue in infoboxes ([[phab:T43869]]) */
    table.mw-hiero-table td {
        vertical-align: middle;
    }

    /* Style rules for media list templates */
    /* TemplateStyles */
    div.medialist {
        min-height: 50px;
        margin: 1em;
        /* @noflip */
        background-position: top left;
        background-repeat: no-repeat;
    }

    div.medialist ul {
        list-style-type: none;
        list-style-image: none;
        margin: 0;
    }

    div.medialist ul li {
        padding-bottom: 0.5em;
    }

    div.medialist ul li li {
        font-size: 91%;
        padding-bottom: 0;
    }

    /* Change the external link icon to an Adobe icon for all PDF files */
    div#content a[href$=".pdf"].external,
    div#content a[href*=".pdf?"].external,
    div#content a[href*=".pdf#"].external,
    div#content a[href$=".PDF"].external,
    div#content a[href*=".PDF?"].external,
    div#content a[href*=".PDF#"].external,
    div#mw_content a[href$=".pdf"].external,
    div#mw_content a[href*=".pdf?"].external,
    div#mw_content a[href*=".pdf#"].external,
    div#mw_content a[href$=".PDF"].external,
    div#mw_content a[href*=".PDF?"].external,
    div#mw_content a[href*=".PDF#"].external {
        background: url("upload.wikimedia.org/wikipedia/commons/2/23/Icons-mini-file_acrobat.gif") no-repeat right;
        /* @noflip */
        padding-right: 18px;
    }

    /* Messagebox templates */
    .messagebox {
        border: 1px solid #a2a9b1;
        background-color: #f8f9fa;
        width: 80%;
        margin: 0 auto 1em auto;
        padding: .2em;
    }

    .messagebox.merge {
        border: 1px solid #c0b8cc;
        background-color: #f0e5ff;
        text-align: center;
    }

    .messagebox.cleanup {
        border: 1px solid #9f9fff;
        background-color: #efefff;
        text-align: center;
    }

    .messagebox.standard-talk {
        border: 1px solid #c0c090;
        background-color: #f8eaba;
        margin: 4px auto;
    }

    /* For old WikiProject banners inside banner shells. */
    .mbox-inside .standard-talk,
    .messagebox.nested-talk {
        border: 1px solid #c0c090;
        background-color: #f8eaba;
        width: 100%;
        margin: 2px 0;
        padding: 2px;
    }

    .messagebox.small {
        width: 238px;
        font-size: 85%;
        /* @noflip */
        float: right;
        clear: both;
        /* @noflip */
        margin: 0 0 1em 1em;
        line-height: 1.25em;
    }

    .messagebox.small-talk {
        width: 238px;
        font-size: 85%;
        /* @noflip */
        float: right;
        clear: both;
        /* @noflip */
        margin: 0 0 1em 1em;
        line-height: 1.25em;
        background-color: #f8eaba;
    }

    /* Cell sizes for ambox/tmbox/imbox/cmbox/ombox/fmbox/dmbox message boxes */
    th.mbox-text,
    td.mbox-text {
        /* The message body cell(s) */
        border: none;
        /* @noflip */
        padding: 0.25em 0.9em;
        /* 0.9em left/right */
        width: 100%;
        /* Make all mboxes the same width regardless of text length */
    }

    td.mbox-image {
        /* The left image cell */
        border: none;
        /* @noflip */
        padding: 2px 0 2px 0.9em;
        /* 0.9em left, 0px right */
        text-align: center;
    }

    td.mbox-imageright {
        /* The right image cell */
        border: none;
        /* @noflip */
        padding: 2px 0.9em 2px 0;
        /* 0px left, 0.9em right */
        text-align: center;
    }

    td.mbox-empty-cell {
        /* An empty narrow cell */
        border: none;
        padding: 0;
        width: 1px;
    }

    /* Article message box styles */
    table.ambox {
        margin: 0 10%;
        /* 10% = Will not overlap with other elements */
        border: 1px solid #a2a9b1;
        /* @noflip */
        border-left: 10px solid #36c;
        /* Default "notice" blue */
        background-color: #fbfbfb;
        box-sizing: border-box;
    }

    table.ambox+table.ambox {
        /* Single border between stacked boxes. */
        margin-top: -1px;
    }

    .ambox th.mbox-text,
    .ambox td.mbox-text {
        /* The message body cell(s) */
        padding: 0.25em 0.5em;
        /* 0.5em left/right */
    }

    .ambox td.mbox-image {
        /* The left image cell */
        /* @noflip */
        padding: 2px 0 2px 0.5em;
        /* 0.5em left, 0px right */
    }

    .ambox td.mbox-imageright {
        /* The right image cell */
        /* @noflip */
        padding: 2px 0.5em 2px 0;
        /* 0px left, 0.5em right */
    }

    table.ambox-notice {
        /* @noflip */
        border-left: 10px solid #36c;
        /* Blue */
    }

    table.ambox-speedy {
        /* @noflip */
        border-left: 10px solid #b32424;
        /* Red */
        background-color: #fee7e6;
        /* Pink */
    }

    table.ambox-delete {
        /* @noflip */
        border-left: 10px solid #b32424;
        /* Red */
    }

    table.ambox-content {
        /* @noflip */
        border-left: 10px solid #f28500;
        /* Orange */
    }

    table.ambox-style {
        /* @noflip */
        border-left: 10px solid #fc3;
        /* Yellow */
    }

    table.ambox-move {
        /* @noflip */
        border-left: 10px solid #9932cc;
        /* Purple */
    }

    table.ambox-protection {
        /* @noflip */
        border-left: 10px solid #a2a9b1;
        /* Gray-gold */
    }

    /* Image message box styles */
    table.imbox {
        margin: 4px 10%;
        border-collapse: collapse;
        border: 3px solid #36c;
        /* Default "notice" blue */
        background-color: #fbfbfb;
        box-sizing: border-box;
    }

    .imbox .mbox-text .imbox {
        /* For imboxes inside imbox-text cells. */
        margin: 0 -0.5em;
        /* 0.9 - 0.5 = 0.4em left/right.        */
        display: block;
        /* Fix for webkit to force 100% width.  */
    }

    .mbox-inside .imbox {
        /* For imboxes inside other templates.  */
        margin: 4px;
    }

    table.imbox-notice {
        border: 3px solid #36c;
        /* Blue */
    }

    table.imbox-speedy {
        border: 3px solid #b32424;
        /* Red */
        background-color: #fee7e6;
        /* Pink */
    }

    table.imbox-delete {
        border: 3px solid #b32424;
        /* Red */
    }

    table.imbox-content {
        border: 3px solid #f28500;
        /* Orange */
    }

    table.imbox-style {
        border: 3px solid #fc3;
        /* Yellow */
    }

    table.imbox-move {
        border: 3px solid #9932cc;
        /* Purple */
    }

    table.imbox-protection {
        border: 3px solid #a2a9b1;
        /* Gray-gold */
    }

    table.imbox-license {
        border: 3px solid #88a;
        /* Dark gray */
        background-color: #f7f8ff;
        /* Light gray */
    }

    table.imbox-featured {
        border: 3px solid #cba135;
        /* Brown-gold */
    }

    /* Category message box styles */
    table.cmbox {
        margin: 3px 10%;
        border-collapse: collapse;
        border: 1px solid #a2a9b1;
        background-color: #dfe8ff;
        /* Default "notice" blue */
        box-sizing: border-box;
    }

    table.cmbox-notice {
        background-color: #d8e8ff;
        /* Blue */
    }

    table.cmbox-speedy {
        margin-top: 4px;
        margin-bottom: 4px;
        border: 4px solid #b32424;
        /* Red */
        background-color: #ffdbdb;
        /* Pink */
    }

    table.cmbox-delete {
        background-color: #ffdbdb;
        /* Pink */
    }

    table.cmbox-content {
        background-color: #ffe7ce;
        /* Orange */
    }

    table.cmbox-style {
        background-color: #fff9db;
        /* Yellow */
    }

    table.cmbox-move {
        background-color: #e4d8ff;
        /* Purple */
    }

    table.cmbox-protection {
        background-color: #efefe1;
        /* Gray-gold */
    }

    /* Other pages message box styles */
    table.ombox {
        margin: 4px 10%;
        border-collapse: collapse;
        border: 1px solid #a2a9b1;
        /* Default "notice" gray */
        background-color: #f8f9fa;
        box-sizing: border-box;
    }

    table.ombox-notice {
        border: 1px solid #a2a9b1;
        /* Gray */
    }

    table.ombox-speedy {
        border: 2px solid #b32424;
        /* Red */
        background-color: #fee7e6;
        /* Pink */
    }

    table.ombox-delete {
        border: 2px solid #b32424;
        /* Red */
    }

    table.ombox-content {
        border: 1px solid #f28500;
        /* Orange */
    }

    table.ombox-style {
        border: 1px solid #fc3;
        /* Yellow */
    }

    table.ombox-move {
        border: 1px solid #9932cc;
        /* Purple */
    }

    table.ombox-protection {
        border: 2px solid #a2a9b1;
        /* Gray-gold */
    }

    /* Talk page message box styles */
    table.tmbox {
        margin: 4px 10%;
        border-collapse: collapse;
        border: 1px solid #c0c090;
        /* Default "notice" gray-brown */
        background-color: #f8eaba;
        min-width: 80%;
        box-sizing: border-box;
    }

    .tmbox.mbox-small {
        min-width: 0;
        /* reset the min-width of tmbox above        */
    }

    .mediawiki .mbox-inside .tmbox {
        /* For tmboxes inside other templates. The "mediawiki" class ensures that */
        margin: 2px 0;
        /* this declaration overrides other styles (including mbox-small above)   */
        width: 100%;
        /* For Safari and Opera */
    }

    .mbox-inside .tmbox.mbox-small {
        /* "small" tmboxes should not be small when  */
        line-height: 1.5em;
        /* also "nested", so reset styles that are   */
        font-size: 100%;
        /* set in "mbox-small" above.                */
    }

    table.tmbox-speedy {
        border: 2px solid #b32424;
        /* Red */
        background-color: #fee7e6;
        /* Pink */
    }

    table.tmbox-delete {
        border: 2px solid #b32424;
        /* Red */
    }

    table.tmbox-content {
        border: 2px solid #f28500;
        /* Orange */
    }

    table.tmbox-style {
        border: 2px solid #fc3;
        /* Yellow */
    }

    table.tmbox-move {
        border: 2px solid #9932cc;
        /* Purple */
    }

    table.tmbox-protection,
    table.tmbox-notice {
        border: 1px solid #c0c090;
        /* Gray-brown */
    }

    /* Disambig and set index box styles */
    table.dmbox {
        clear: both;
        margin: 0.9em 1em;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        background-color: transparent;
    }

    /* Footer and header message box styles */
    table.fmbox {
        clear: both;
        margin: 0.2em 0;
        width: 100%;
        border: 1px solid #a2a9b1;
        background-color: #f8f9fa;
        /* Default "system" gray */
        box-sizing: border-box;
    }

    table.fmbox-system {
        background-color: #f8f9fa;
    }

    table.fmbox-warning {
        border: 1px solid #bb7070;
        /* Dark pink */
        background-color: #ffdbdb;
        /* Pink */
    }

    table.fmbox-editnotice {
        background-color: transparent;
    }

    /* Div based "warning" style fmbox messages. */
    div.mw-warning-with-logexcerpt,
    div.mw-lag-warn-high,
    div.mw-cascadeprotectedwarning,
    div#mw-protect-cascadeon,
    div.titleblacklist-warning,
    div.locked-warning {
        clear: both;
        margin: 0.2em 0;
        border: 1px solid #bb7070;
        background-color: #ffdbdb;
        padding: 0.25em 0.9em;
        box-sizing: border-box;
    }

    /* These mbox-small classes must be placed after all other
    ambox/tmbox/ombox etc classes. "html body.mediawiki" is so
    they override "table.ambox + table.ambox" above. */
    html body.mediawiki .mbox-small {
        /* For the "small=yes" option. */
        /* @noflip */
        clear: right;
        /* @noflip */
        float: right;
        /* @noflip */
        margin: 4px 0 4px 1em;
        box-sizing: border-box;
        width: 238px;
        font-size: 88%;
        line-height: 1.25em;
    }

    html body.mediawiki .mbox-small-left {
        /* For the "small=left" option. */
        /* @noflip */
        margin: 4px 1em 4px 0;
        box-sizing: border-box;
        overflow: hidden;
        width: 238px;
        border-collapse: collapse;
        font-size: 88%;
        line-height: 1.25em;
    }

    /* Style for compact ambox */
    /* Hide the images */
    .compact-ambox table .mbox-image,
    .compact-ambox table .mbox-imageright,
    .compact-ambox table .mbox-empty-cell {
        display: none;
    }

    /* Remove borders, backgrounds, padding, etc. */
    .compact-ambox table.ambox {
        border: none;
        border-collapse: collapse;
        background-color: transparent;
        margin: 0 0 0 1.6em !important;
        padding: 0 !important;
        width: auto;
        display: block;
    }

    body.mediawiki .compact-ambox table.mbox-small-left {
        font-size: 100%;
        width: auto;
        margin: 0;
    }

    /* Style the text cell as a list item and remove its padding */
    .compact-ambox table .mbox-text {
        padding: 0 !important;
        margin: 0 !important;
    }

    .compact-ambox table .mbox-text-span {
        display: list-item;
        line-height: 1.5em;
        list-style-type: square;
        list-style-image: url("en.wikipedia.org/w/skins/MonoBook/resources/images/bullet.gif");
    }

    .skin-vector .compact-ambox table .mbox-text-span {
        list-style-type: disc;
        list-style-image: url("en.wikipedia.org/w/skins/Vector/images/bullet-icon.svg");
        list-style-image: url("en.wikipedia.org/w/skins/Vector/images/bullet-icon.png");
    }

    /* Allow for hiding text in compact form */
    .compact-ambox .hide-when-compact {
        display: none;
    }

    /* Hide (formatting) elements from screen, but not from screenreaders */
    .visualhide {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }

    /* Suppress missing interwiki image links where #ifexist cannot
    be used due to high number of requests. See .hidden-redlink on
    [[m:MediaWiki:Common.css]] */
    .check-icon a.new {
        display: none;
        speak: none;
    }

    /* Remove underlines from certain links */
    .nounderlines a,
    .IPA a:link,
    .IPA a:visited {
        text-decoration: none !important;
    }

    /* Standard Navigationsleisten, aka box hiding thingy
    from .de.  Documentation at [[Wikipedia:NavFrame]]. */
    div.NavFrame {
        margin: 0;
        padding: 4px;
        border: 1px solid #a2a9b1;
        text-align: center;
        border-collapse: collapse;
        font-size: 95%;
    }

    div.NavFrame+div.NavFrame {
        border-top-style: none;
        border-top-style: hidden;
    }

    div.NavPic {
        background-color: #fff;
        margin: 0;
        padding: 2px;
        /* @noflip */
        float: left;
    }

    div.NavFrame div.NavHead {
        line-height: 1.6em;
        font-weight: bold;
        background-color: #ccf;
        position: relative;
    }

    div.NavFrame p,
    div.NavFrame div.NavContent,
    div.NavFrame div.NavContent p {
        font-size: 100%;
    }

    div.NavEnd {
        margin: 0;
        padding: 0;
        line-height: 1px;
        clear: both;
    }

    a.NavToggle {
        position: absolute;
        top: 0;
        /* @noflip */
        right: 3px;
        font-weight: normal;
        font-size: 90%;
    }

    /* Hatnotes and disambiguation notices */
    .hatnote {
        font-style: italic;
    }

    .hatnote i {
        font-style: normal;
    }

    div.hatnote {
        /* @noflip */
        padding-left: 1.6em;
        margin-bottom: 0.5em;
    }

    div.hatnote+div.hatnote {
        margin-top: -0.5em;
    }

    /* Allow transcluded pages to display in lists rather than a table. */
    .listify td {
        display: list-item;
    }

    .listify tr {
        display: block;
    }

    .listify table {
        display: block;
    }

    /* Geographical coordinates defaults. See [[Template:Coord/link]]
    for how these are used. The classes "geo", "longitude", and
    "latitude" are used by the [[Geo microformat]]. */
    /* TemplateStyles */
    .geo-default,
    .geo-dms,
    .geo-dec {
        display: inline;
    }

    .geo-nondefault,
    .geo-multi-punct {
        display: none;
    }

    .longitude,
    .latitude {
        white-space: nowrap;
    }

    /* User block messages */
    div.user-block {
        padding: 5px;
        margin-bottom: 0.5em;
        border: 1px solid #a9a9a9;
        background-color: #ffefd5;
    }

    /* Prevent line breaks in silly places:
    1) Where desired
    2) Links when we don't want them to
    3) Bold "links" to the page itself */
    .nowrap,
    .nowraplinks a,
    .nowraplinks .selflink {
        white-space: nowrap;
    }

    .nowrap pre {
        white-space: pre;
    }

    /* But allow wrapping where desired: */
    .wrap,
    .wraplinks a {
        white-space: normal;
    }

    /* For template documentation */
    /* TemplateStyles */
    .template-documentation {
        clear: both;
        margin: 1em 0 0 0;
        border: 1px solid #a2a9b1;
        background-color: #ecfcf4;
        padding: 1em;
    }

    /* Increase the height of the image upload box */
    #wpUploadDescription {
        height: 13em;
    }

    /* Minimum thumb width */
    .thumbinner {
        min-width: 100px;
    }

    /* Prevent floating boxes from overlapping any category listings,
    view histories, edit previews, and edit [Show changes] views. */
    #mw-subcategories,
    #mw-pages,
    #mw-category-media,
    #filehistory,
    #wikiPreview,
    #wikiDiff {
        clear: both;
    }

    /* Selectively hide headers in WikiProject banners */
    /* TemplateStyles */
    .wpb .wpb-header {
        display: none;
    }

    .wpbs-inner .wpb .wpb-header {
        display: block;
        /* for IE */
    }

    .wpbs-inner .wpb .wpb-header {
        display: table-row;
        /* for real browsers */
    }

    .wpbs-inner .wpb-outside {
        display: none;
        /* hide things that should only display outside shells */
    }

    /* Styling for Abuse Filter tags */
    .mw-tag-markers {
        font-style: italic;
        font-size: 90%;
    }

    /* Hide stuff meant for accounts with special permissions. Made visible again in
    [[MediaWiki:Group-sysop.css]], [[MediaWiki:Group-patroller.css]],
    [[MediaWiki:Group-templateeditor.css]], [[MediaWiki:Group-extendedmover.css]],
    [[MediaWiki:Group-extendedconfirmed.css]], and [[Mediawiki:Group-autoconfirmed.css]]. */
    .sysop-show,
    .templateeditor-show,
    .extendedmover-show,
    .patroller-show,
    .extendedconfirmed-show,
    .autoconfirmed-show,
    .user-show {
        display: none;
    }

    /* Hide the redlink generated by {{Editnotice}},
    this overrides the ".sysop-show { display: none; }" above that applies
    to the same link as well. See [[phab:T45013]]

    Hide the images in editnotices to keep them readable in VE view.
    Long term, editnotices should become a core feature so that they can be designed responsive. */
    .ve-ui-mwNoticesPopupTool-item .editnotice-redlink,
    .ve-ui-mwNoticesPopupTool-item .mbox-image,
    .ve-ui-mwNoticesPopupTool-item .mbox-imageright {
        display: none !important;
    }

    /* Remove bullets when there are multiple edit page warnings */
    ul.permissions-errors>li {
        list-style: none none;
    }

    ul.permissions-errors {
        margin: 0;
    }

    /* Generic class for Times-based serif, texhtml class for inline math */
    .times-serif,
    span.texhtml {
        font-family: "Nimbus Roman No9 L", "Times New Roman", Times, serif;
        font-size: 118%;
        line-height: 1;
    }

    span.texhtml {
        white-space: nowrap;
    }

    span.texhtml span.texhtml {
        font-size: 100%;
    }

    span.mwe-math-mathml-inline {
        font-size: 118%;
    }

    /* Force tabular and lining display for digits and texhtml */
    .digits,
    .texhtml {
        -moz-font-feature-settings: "lnum", "tnum", "kern" 0;
        -webkit-font-feature-settings: "lnum", "tnum", "kern" 0;
        font-feature-settings: "lnum", "tnum", "kern" 0;
        font-variant-numeric: lining-nums tabular-nums;
        font-kerning: none;
    }

    /* Make <math display="block"> be left aligned with one space indent for compatibility with style conventions */
    .mwe-math-fallback-image-display,
    .mwe-math-mathml-display {
        margin-left: 1.6em !important;
        margin-top: 0.6em;
        margin-bottom: 0.6em;
    }

    .mwe-math-mathml-display math {
        display: inline;
    }

    /* Fix styling of transcluded prefindex tables */
    table#mw-prefixindex-list-table,
    table#mw-prefixindex-nav-table {
        width: 98%;
    }

    /* For portals, added 2011-12-07 -bv
    On wide screens, show these as two columns
    On narrow and mobile screens, let them collapse into a single column */
    .portal-column-left {
        float: left;
        width: 50%;
    }

    .portal-column-right {
        float: right;
        width: 49%;
    }

    .portal-column-left-wide {
        float: left;
        width: 60%;
    }

    .portal-column-right-narrow {
        float: right;
        width: 39%;
    }

    .portal-column-left-extra-wide {
        float: left;
        width: 70%;
    }

    .portal-column-right-extra-narrow {
        float: right;
        width: 29%;
    }

    @media only screen and (max-width: 800px) {

        /* Decouple the columns on narrow screens */
        .portal-column-left,
        .portal-column-right,
        .portal-column-left-wide,
        .portal-column-right-narrow,
        .portal-column-left-extra-wide,
        .portal-column-right-extra-narrow {
            float: inherit;
            width: inherit;
        }
    }

    /* Formerly for announcements, now used intermittently */
    #bodyContent .letterhead {
        background-image: url('upload.wikimedia.org/wikipedia/commons/e/e0/Tan-page-corner.png');
        background-repeat: no-repeat;
        padding: 2em;
        background-color: #faf9f2;
    }

    /* hidden sortkey for tablesorter */
    /* deprecated, in process of being replaced with data-sort-value */
    td .sortkey,
    th .sortkey {
        display: none;
        speak: none;
    }

    /* Make it possible to hide checkboxes in <inputbox> */
    .inputbox-hidecheckboxes form .inputbox-element,
    .inputbox-hidecheckboxes .mw-ui-checkbox {
        display: none !important;
    }

    /* Work-around for [[phab:T25965]] (Kaltura advertisement) */
    .k-player .k-attribution {
        visibility: hidden;
    }

    /* Move 'play' button of video player to bottom left corner */
    .PopUpMediaTransform a .play-btn-large {
        margin: 0;
        top: auto;
        right: auto;
        bottom: 0;
        left: 0;
    }

    /* Hide FlaggedRevs notice UI when there are no pending changes */
    .flaggedrevs_draft_synced,
    .flaggedrevs_stable_synced {
        display: none;
    }

    /* Force imgs in galleries to have borders by wrapping them in class=bordered-images */
    .bordered-images img {
        border: solid #ddd 1px;
    }

    /* Gallery styles background changes are restricted to screen view. In printing we should avoid applying backgrounds. */
    @media screen {

        /* The backgrounds for galleries. */
        #content .gallerybox div.thumb {
            /* Light gray padding */
            background-color: #f8f9fa;
        }

        /* Put a chequered background behind images, only visible if they have transparency.
        '.filehistory a img' and '#view img:hover' are handled by MediaWiki core (as of 1.19) */
        .gallerybox .thumb img {
            background: #fff url("upload.wikimedia.org/wikipedia/commons/5/5d/Checker-16x16.png") repeat;
        }

        /* But not on articles, user pages, portals or with opt-out. */
        .ns-0 .gallerybox .thumb img,
        .ns-2 .gallerybox .thumb img,
        .ns-100 .gallerybox .thumb img,
        .nochecker .gallerybox .thumb img {
            background-image: none;
        }

    }

    /* Display "From Wikipedia, the free encyclopedia" in skins that support it, do not apply to print mode */
    @media screen {
        #siteSub {
            display: block;
        }
    }

    /*XOWA:MediaWiki:Vector.css*/
    /* Don't display some stuff on the main page */
    .page-Main_Page #deleteconfirm,
    .page-Main_Page #t-cite,
    .page-Main_Page #footer-info-lastmod,
    .action-view.page-Main_Page #siteSub,
    .action-view.page-Main_Page #contentSub,
    .action-view.page-Main_Page .firstHeading {
        display: none !important;
    }

    /* Position coordinates */
    #coordinates {
        position: absolute;
        top: 0;
        right: 0;
        float: right;
        margin: 0;
        padding: 0;
        line-height: 1.5em;
        text-align: right;
        text-indent: 0;
        font-size: 85%;
        text-transform: none;
        white-space: nowrap;
    }

    /* correct position for VE */
    .ve-ce-surface-enabled #coordinates {
        margin-right: 2em;
        margin-top: -1em;
    }

    .mw-indicator #coordinates {
        position: absolute;
        top: 3em;
        right: 0;
        line-height: 1.6;
        text-align: right;
        font-size: 92%;
        white-space: nowrap;
    }

    /* FR topicon position */
    div.flaggedrevs_short {
        position: absolute;
        top: -3em;
        right: 100px;
        z-index: 1;
    }

    /* Make "From Wikipedia, the free encyclopedia" a bit smaller */
    #siteSub {
        font-size: 92%;
    }

    /* Move page status indicators down slightly */
    .mw-body .mw-indicators {
        padding-top: 0.4em;
    }

    /*XOWA:https://en.wikipedia.org/w/load.php?debug=false&lang=en&modules=ext.3d.styles|ext.uls.interlanguage|ext.visualEditor.desktopArticleTarget.noscript|ext.wikimediaBadges|mediawiki.legacy.commonPrint,shared|mediawiki.skinning.interface|skins.vector.styles&only=styles&skin=vector*/
    .mw-3d-wrapper {
        display: inline-block;
        position: relative;
        overflow: hidden;
        vertical-align: top
    }

    .mw-3d-wrapper:after {
        content: attr(data-label);
        position: absolute;
        pointer-events: none;
        top: 11px;
        left: 11px;
        color: #1e1f21;
        font-size: 14px;
        line-height: 19px;
        font-weight: bold;
        opacity: 0.8;
        padding: 2px 5px;
        background-color: #f8f9fa;
        border-radius: 2px
    }

    .mw-3d-thumb-placeholder {
        display: inline-block;
        text-decoration: none;
        color: #222
    }

    #p-lang .uls-settings-trigger {
        background: transparent no-repeat center top;
        background-image: url("en.wikipedia.org/w/extensions/UniversalLanguageSelector/resources/images/cog-sprite.png");
        background-image: linear-gradient(transparent, transparent), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 width=%2214%22 height=%2232%22%3E %3Cdefs%3E %3Cpath id=%22a%22 d=%22M14 9.3V6.73l-1.575-.264a4.947 4.947 0 0 0-.496-1.2l.93-1.285-1.81-1.84-1.31.908c-.38-.205-.79-.38-1.196-.497L8.284 1H5.716l-.263 1.578a5.489 5.489 0 0 0-1.196.497L2.975 2.17 1.137 3.98l.934 1.287c-.2.38-.376.79-.493 1.228L0 6.73V9.3l1.575.264c.117.438.292.818.496 1.198l-.93 1.315L2.95 13.89l1.312-.938c.38.205.787.38 1.224.497L5.746 15h2.566l.263-1.578a6.13 6.13 0 0 0 1.196-.497l1.315.935 1.81-1.812-.935-1.315c.203-.38.38-.76.495-1.2L14 9.303zm-7 1.404c-1.488 0-2.683-1.2-2.683-2.69S5.542 5.327 7 5.327a2.698 2.698 0 0 1 2.683 2.69A2.678 2.678 0 0 1 7 10.705z%22/%3E %3C/defs%3E %3Cuse fill=%22%2372777d%22 xlink:href=%22%23a%22/%3E %3Cuse fill=%22%2354595d%22 transform=%22translate%280 16%29%22 xlink:href=%22%23a%22/%3E %3C/svg%3E");
        border: 0;
        min-height: 16px;
        min-width: 16px;
        float: right;
        cursor: pointer
    }

    #p-lang .uls-settings-trigger::-moz-focus-inner {
        border: 0
    }

    #p-lang .uls-settings-trigger:focus {
        outline: 1px solid #36c
    }

    .skin-vector #p-lang .uls-settings-trigger {
        margin-top: 8px
    }

    #p-lang .uls-settings-trigger:hover {
        background-position: center -16px
    }

    .client-nojs #ca-ve-edit,
    .client-nojs .mw-editsection-divider,
    .client-nojs .mw-editsection-visualeditor,
    .ve-not-available #ca-ve-edit,
    .ve-not-available .mw-editsection-divider,
    .ve-not-available .mw-editsection-visualeditor {
        display: none
    }

    .client-js .mw-content-ltr .mw-editsection-bracket:first-of-type,
    .client-js .mw-content-rtl .mw-editsection-bracket:not(:first-of-type) {
        margin-right: 0.25em;
        color: #54595d
    }

    .client-js .mw-content-rtl .mw-editsection-bracket:first-of-type,
    .client-js .mw-content-ltr .mw-editsection-bracket:not(:first-of-type) {
        margin-left: 0.25em;
        color: #54595d
    }

    .badge-goodarticle,
    .badge-goodlist,
    .badge-recommendedarticle {
        list-style-image: url("en.wikipedia.org/w/extensions/WikimediaBadges/resources/images/badge-silver-star.png")
    }

    .badge-featuredarticle,
    .badge-featuredportal,
    .badge-featuredlist {
        list-style-image: url("en.wikipedia.org/w/extensions/WikimediaBadges/resources/images/badge-golden-star.png")
    }

    .badge-problematic {
        list-style-image: url("en.wikipedia.org/w/extensions/WikimediaBadges/resources/images/badge-problematic.png")
    }

    .badge-proofread {
        list-style-image: url("en.wikipedia.org/w/extensions/WikimediaBadges/resources/images/badge-proofread.png")
    }

    .badge-validated {
        list-style-image: url("en.wikipedia.org/w/extensions/WikimediaBadges/resources/images/badge-validated.png")
    }

    .badge-digitaldocument {
        list-style-image: url("en.wikipedia.org/w/extensions/WikimediaBadges/resources/images/badge-digitaldocument.png")
    }

    @media print {

        .noprint,
        .catlinks,
        .magnify,
        .mw-cite-backlink,
        .mw-editsection,
        .mw-editsection-like,
        .mw-hidden-catlinks,
        .mw-indicators,
        .mw-redirectedfrom,
        .patrollink,
        .usermessage,
        #column-one,
        #footer-places,
        #mw-navigation,
        #siteNotice,
        #f-poweredbyico,
        #f-copyrightico,
        li#about,
        li#disclaimer,
        li#mobileview,
        li#privacy {
            display: none
        }



        body {
            background: #fff;
            color: #000;
            margin: 0;
            padding: 1rem;
        }

        a {
            background: none !important;
            padding: 0 !important
        }

        a,
        a.external,
        a.new,
        a.stub {
            color: #000 !important;
            text-decoration: none !important;
            color: inherit !important;
            text-decoration: inherit !important
        }

        .mw-parser-output a.external.text:after,
        .mw-parser-output a.external.autonumber:after {
            content: ' (' attr(href) ')';
            word-break: break-all;
            word-wrap: break-word
        }

        .mw-parser-output a.external.text[href^='//']:after,
        .mw-parser-output a.external.autonumber[href^='//']:after {
            content: ' (https:' attr(href) ')'
        }

        dt {
            font-weight: bold
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-weight: bold;
            page-break-after: avoid;
            page-break-before: avoid
        }

        p {
            margin: 1em 0;
            line-height: 1.2;
            orphans: 3;
            widows: 3
        }

        img,
        figure,
        .wikitable,
        .thumb {
            page-break-inside: avoid
        }

        img {
            border: 0;
            vertical-align: middle
        }

        pre,
        .mw-code {
            background: #fff;
            color: #000;
            border: 1pt dashed #000;
            padding: 1em 0;
            font-size: 8pt;
            white-space: pre-wrap;
            word-wrap: break-word
        }

        sup,
        sub {
            line-height: 1
        }

        ul {
            list-style-type: square
        }

        #globalWrapper {
            width: 100% !important;
            min-width: 0 !important
        }

        .mw-body {
            background: #fff;
            color: #000;
            border: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
            direction: ltr
        }

        #column-content {
            margin: 0 !important
        }

        #column-content .mw-body {
            padding: 1em;
            margin: 0 !important
        }

        .toc {
            background-color: #f9f9f9;
            border: 1pt solid #aaa;
            padding: 5px;
            display: table
        }

        .tocnumber,
        .toctext {
            display: table-cell
        }

        .tocnumber {
            padding-left: 0;
            padding-right: 0.5em
        }

        .mw-content-ltr .tocnumber {
            padding-left: 0;
            padding-right: 0.5em
        }

        .mw-content-rtl .tocnumber {
            padding-left: 0.5em;
            padding-right: 0
        }

        table.floatright,
        div.floatright,
        div.tright {
            float: right;
            clear: right;
            position: relative
        }

        table.floatleft,
        div.floatleft,
        div.tleft {
            float: left;
            clear: left;
            position: relative
        }

        div.tleft {
            margin: 0.5em 1.4em 1.3em 0
        }

        div.tright {
            margin: 0.5em 0 1.3em 1.4em
        }

        table.floatright,
        div.floatright {
            margin: 0 0 0.5em 0.5em;
            border: 0
        }

        table.floatleft,
        div.floatleft {
            margin: 0 0.5em 0.5em 0;
            border: 0
        }

        .center {
            text-align: center
        }

        div.thumb {
            background-color: transparent;
            width: auto
        }

        div.thumb a {
            border-bottom: 0
        }

        div.thumbinner {
            background-color: #fff;
            border: 0;
            border-radius: 2px;
            padding: 5px;
            font-size: 10pt;
            color: #666;
            text-align: center;
            overflow: hidden;
            min-width: 100px
        }

        html .thumbcaption {
            text-align: left;
            line-height: 1.4;
            padding: 3px
        }

        img.thumbborder {
            border: 1pt solid #ddd
        }

        table.wikitable,
        .mw_metadata {
            background: #fff;
            margin: 1em 0;
            border: 1pt solid #aaa;
            border-collapse: collapse;
            font-size: 10pt
        }

        table.wikitable>caption,
        .mw_metadata caption {
            padding: 5px;
            font-size: 10pt
        }

        table.wikitable>tr>th,
        table.wikitable>tr>td,
        table.wikitable>*>tr>th,
        table.wikitable>*>tr>td,
        .mw_metadata th,
        .mw_metadata td {
            background: #fff !important;
            color: #000 !important;
            border: 1pt solid #aaa;
            padding: 0.4em 0.6em
        }

        table.wikitable>tr>th,
        table.wikitable>*>tr>th,
        .mw_metadata th {
            text-align: center
        }

        table.listing,
        table.listing td {
            border: 1pt solid #000;
            border-collapse: collapse
        }

        .catlinks ul {
            display: inline;
            padding: 0;
            list-style: none none
        }

        .catlinks li {
            display: inline-block;
            line-height: 1.15;
            margin: 0.1em 0;
            border-left: 1pt solid #aaa;
            padding: 0 0.4em
        }

        .catlinks li:first-child {
            border-left: 0;
            padding-left: 0.2em
        }

        .printfooter {
            padding: 1em 0
        }

        #footer {
            background: #fff;
            color: #000;
            margin-top: 1em;
            border-top: 1pt solid #aaa;
            padding-top: 5px;
            direction: ltr
        }
    }

    @media screen {
        .mw-content-ltr {
            direction: ltr
        }

        .mw-content-rtl {
            direction: rtl
        }

        .sitedir-ltr textarea,
        .sitedir-ltr input {
            direction: ltr
        }

        .sitedir-rtl textarea,
        .sitedir-rtl input {
            direction: rtl
        }

        .mw-userlink {
            unicode-bidi: embed
        }

        mark {
            background-color: #ff0;
            color: #000
        }

        wbr {
            display: inline-block
        }

        input[type='submit'],
        input[type='button'],
        input[type='reset'],
        input[type='view'] {
            direction: ltr
        }

        textarea[dir='ltr'],
        input[dir='ltr'] {
            direction: ltr
        }

        textarea[dir='rtl'],
        input[dir='rtl'] {
            direction: rtl
        }

        abbr[title],
        .explain[title] {
            border-bottom: 1px dotted;
            cursor: help
        }

        @supports (text-decoration:underline dotted) {

            abbr[title],
            .explain[title] {
                border-bottom: 0;
                text-decoration: underline dotted
            }
        }

        span.comment {
            font-style: italic;
            unicode-bidi: -moz-isolate;
            unicode-bidi: isolate
        }

        #editform,
        #toolbar,
        #wpTextbox1 {
            clear: both
        }

        #toolbar {
            height: 22px
        }

        .mw-underline-always a {
            text-decoration: underline
        }

        .mw-underline-never a {
            text-decoration: none
        }

        li span.deleted,
        span.history-deleted {
            text-decoration: line-through;
            color: #72777d;
            font-style: italic
        }

        .not-patrolled {
            background-color: #ffa
        }

        .unpatrolled {
            font-weight: bold;
            color: #d33
        }

        div.patrollink {
            font-size: 75%;
            text-align: right
        }

        td.mw-label {
            text-align: right;
            vertical-align: middle
        }

        td.mw-input {
            text-align: left
        }

        td.mw-submit {
            text-align: left;
            white-space: nowrap
        }

        .mw-input-with-label {
            white-space: nowrap;
            display: inline-block
        }

        .mw-content-ltr .thumbcaption {
            text-align: left
        }

        .mw-content-ltr .magnify {
            float: right
        }

        .mw-content-rtl .thumbcaption {
            text-align: right
        }

        .mw-content-rtl .magnify {
            float: left
        }

        #catlinks {
            text-align: left
        }

        .catlinks ul {
            display: inline;
            margin: 0;
            padding: 0;
            list-style: none none;
            vertical-align: middle;
        }

        .catlinks li {
            display: inline-block;
            line-height: 1.25em;
            border-left: 1px solid #a2a9b1;
            margin: 0.125em 0;
            padding: 0 0.5em;
            zoom: 1;
            display: inline;
        }

        .catlinks li:first-child {
            padding-left: 0.25em;
            border-left: 0
        }

        .catlinks li a.mw-redirect {
            font-style: italic
        }

        .mw-hidden-cats-hidden {
            display: none
        }

        .catlinks-allhidden {
            display: none
        }

        p.mw-protect-editreasons,
        p.mw-filedelete-editreasons,
        p.mw-delete-editreasons {
            font-size: 90%;
            text-align: right
        }

        .autocomment,
        .autocomment a,
        .autocomment a:visited {
            color: #72777d
        }

        .newpage,
        .minoredit,
        .botedit {
            font-weight: bold
        }

        div.mw-warning-with-logexcerpt {
            padding: 3px;
            margin-bottom: 3px;
            border: 2px solid #2a4b8d;
            clear: both
        }

        div.mw-warning-with-logexcerpt ul li {
            font-size: 90%
        }

        span.mw-revdelundel-link,
        strong.mw-revdelundel-link {
            font-size: 90%
        }

        span.mw-revdelundel-hidden,
        input.mw-revdelundel-hidden {
            visibility: hidden
        }

        td.mw-revdel-checkbox,
        th.mw-revdel-checkbox {
            padding-right: 10px;
            text-align: center
        }

        a.new {
            color: #ba0000
        }

        .plainlinks a.external {
            background: none !important;
            padding: 0 !important
        }

        .rtl a.external.free,
        .rtl a.external.autonumber {
            direction: ltr;
            unicode-bidi: embed
        }

        table.wikitable {
            background-color: #f8f9fa;
            color: #222;
            margin: 1em 0;
            border: 1px solid #a2a9b1;
            border-collapse: collapse
        }

        table.wikitable>tr>th,
        table.wikitable>tr>td,
        table.wikitable>*>tr>th,
        table.wikitable>*>tr>td {
            border: 1px solid #a2a9b1;
            padding: 0.2em 0.4em
        }

        table.wikitable>tr>th,
        table.wikitable>*>tr>th {
            background-color: #eaecf0;
            text-align: center
        }

        table.wikitable>caption {
            font-weight: bold
        }

        .error,
        .warning,
        .success {
            font-size: larger
        }

        .error {
            color: #d33
        }

        .warning {
            color: #705000
        }

        .success {
            color: #009000
        }

        .errorbox,
        .warningbox,
        .successbox {
            border: 1px solid;
            padding: 0.5em 1em;
            margin-bottom: 1em;
            display: inline-block;
            zoom: 1;
            *display: inline
        }

        .errorbox h2,
        .warningbox h2,
        .successbox h2 {
            font-size: 1em;
            color: inherit;
            font-weight: bold;
            display: inline;
            margin: 0 0.5em 0 0;
            border: 0
        }

        .errorbox {
            color: #d33;
            border-color: #fac5c5;
            background-color: #fae3e3
        }

        .warningbox {
            color: #705000;
            border-color: #fde29b;
            background-color: #fdf1d1
        }

        .successbox {
            color: #008000;
            border-color: #b7fdb5;
            background-color: #e1fddf
        }

        .mw-infobox {
            border: 2px solid #ff7f00;
            margin: 0.5em;
            clear: left;
            overflow: hidden
        }

        .mw-infobox-left {
            margin: 7px;
            float: left;
            width: 35px
        }

        .mw-infobox-right {
            margin: 0.5em 0.5em 0.5em 49px
        }

        .previewnote {
            color: #d33;
            margin-bottom: 1em
        }

        .previewnote p {
            text-indent: 3em;
            margin: 0.8em 0
        }

        .visualClear {
            clear: both
        }

        .mw-datatable {
            border-collapse: collapse
        }

        .mw-datatable,
        .mw-datatable td,
        .mw-datatable th {
            border: 1px solid #a2a9b1;
            padding: 0 0.15em 0 0.15em
        }

        .mw-datatable th {
            background-color: #ddf
        }

        .mw-datatable td {
            background-color: #fff
        }

        .mw-datatable tr:hover td {
            background-color: #eaf3ff
        }

        .mw-content-ltr ul,
        .mw-content-rtl .mw-content-ltr ul {
            margin: 0.3em 0 0 1.6em;
            padding: 0
        }

        .mw-content-rtl ul,
        .mw-content-ltr .mw-content-rtl ul {
            margin: 0.3em 1.6em 0 0;
            padding: 0
        }

        .mw-content-ltr ol,
        .mw-content-rtl .mw-content-ltr ol {
            margin: 0.3em 0 0 3.2em;
            padding: 0
        }

        .mw-content-rtl ol,
        .mw-content-ltr .mw-content-rtl ol {
            margin: 0.3em 3.2em 0 0;
            padding: 0
        }

        .mw-content-ltr dd,
        .mw-content-rtl .mw-content-ltr dd {
            margin-left: 1.6em;
            margin-right: 0
        }

        .mw-content-rtl dd,
        .mw-content-ltr .mw-content-rtl dd {
            margin-right: 1.6em;
            margin-left: 0
        }

        .mw-ajax-loader {
            background-image: url("en.wikipedia.org/w/resources/src/mediawiki.legacy/images/ajax-loader.gif");
            background-position: center center;
            background-repeat: no-repeat;
            padding: 16px;
            position: relative;
            top: -16px
        }

        .mw-small-spinner {
            padding: 10px !important;
            margin-right: 0.6em;
            background-image: url("en.wikipedia.org/w/resources/src/mediawiki.legacy/images/spinner.gif");
            background-position: center center;
            background-repeat: no-repeat
        }

        h1:lang(anp),
        h1:lang(as),
        h1:lang(bh),
        h1:lang(bho),
        h1:lang(bn),
        h1:lang(gu),
        h1:lang(hi),
        h1:lang(kn),
        h1:lang(ks),
        h1:lang(ml),
        h1:lang(mr),
        h1:lang(my),
        h1:lang(mai),
        h1:lang(ne),
        h1:lang(new),
        h1:lang(or),
        h1:lang(pa),
        h1:lang(pi),
        h1:lang(sa),
        h1:lang(ta),
        h1:lang(te) {
            line-height: 1.6em !important
        }

        h2:lang(anp),
        h3:lang(anp),
        h4:lang(anp),
        h5:lang(anp),
        h6:lang(anp),
        h2:lang(as),
        h3:lang(as),
        h4:lang(as),
        h5:lang(as),
        h6:lang(as),
        h2:lang(bho),
        h3:lang(bho),
        h4:lang(bho),
        h5:lang(bho),
        h6:lang(bho),
        h2:lang(bh),
        h3:lang(bh),
        h4:lang(bh),
        h5:lang(bh),
        h6:lang(bh),
        h2:lang(bn),
        h3:lang(bn),
        h4:lang(bn),
        h5:lang(bn),
        h6:lang(bn),
        h2:lang(gu),
        h3:lang(gu),
        h4:lang(gu),
        h5:lang(gu),
        h6:lang(gu),
        h2:lang(hi),
        h3:lang(hi),
        h4:lang(hi),
        h5:lang(hi),
        h6:lang(hi),
        h2:lang(kn),
        h3:lang(kn),
        h4:lang(kn),
        h5:lang(kn),
        h6:lang(kn),
        h2:lang(ks),
        h3:lang(ks),
        h4:lang(ks),
        h5:lang(ks),
        h6:lang(ks),
        h2:lang(ml),
        h3:lang(ml),
        h4:lang(ml),
        h5:lang(ml),
        h6:lang(ml),
        h2:lang(mr),
        h3:lang(mr),
        h4:lang(mr),
        h5:lang(mr),
        h6:lang(mr),
        h2:lang(my),
        h3:lang(my),
        h4:lang(my),
        h5:lang(my),
        h6:lang(my),
        h2:lang(mai),
        h3:lang(mai),
        h4:lang(mai),
        h5:lang(mai),
        h6:lang(mai),
        h2:lang(ne),
        h3:lang(ne),
        h4:lang(ne),
        h5:lang(ne),
        h6:lang(ne),
        h2:lang(new),
        h3:lang(new),
        h4:lang(new),
        h5:lang(new),
        h6:lang(new),
        h2:lang(or),
        h3:lang(or),
        h4:lang(or),
        h5:lang(or),
        h6:lang(or),
        h2:lang(pa),
        h3:lang(pa),
        h4:lang(pa),
        h5:lang(pa),
        h6:lang(pa),
        h2:lang(pi),
        h3:lang(pi),
        h4:lang(pi),
        h5:lang(pi),
        h6:lang(pi),
        h2:lang(sa),
        h3:lang(sa),
        h4:lang(sa),
        h5:lang(sa),
        h6:lang(sa),
        h2:lang(ta),
        h3:lang(ta),
        h4:lang(ta),
        h5:lang(ta),
        h6:lang(ta),
        h2:lang(te),
        h3:lang(te),
        h4:lang(te),
        h5:lang(te),
        h6:lang(te) {
            line-height: 1.2em
        }

        ol:lang(azb) li,
        ol:lang(bcc) li,
        ol:lang(bgn) li,
        ol:lang(bqi) li,
        ol:lang(fa) li,
        ol:lang(glk) li,
        ol:lang(kk-arab) li,
        ol:lang(lrc) li,
        ol:lang(luz) li,
        ol:lang(mzn) li {
            list-style-type: -moz-persian;
            list-style-type: persian
        }

        ol:lang(ckb) li,
        ol:lang(sdh) li {
            list-style-type: -moz-arabic-indic;
            list-style-type: arabic-indic
        }

        ol:lang(hi) li,
        ol:lang(mai) li,
        ol:lang(mr) li,
        ol:lang(ne) li {
            list-style-type: -moz-devanagari;
            list-style-type: devanagari
        }

        ol:lang(as) li,
        ol:lang(bn) li {
            list-style-type: -moz-bengali;
            list-style-type: bengali
        }

        ol:lang(or) li {
            list-style-type: -moz-oriya;
            list-style-type: oriya
        }

        .toc ul {
            margin: 0.3em 0
        }

        .mw-content-ltr .toc ul,
        .mw-content-rtl .mw-content-ltr .toc ul {
            text-align: left
        }

        .mw-content-rtl .toc ul,
        .mw-content-ltr .mw-content-rtl .toc ul {
            text-align: right
        }

        .mw-content-ltr .toc ul ul,
        .mw-content-rtl .mw-content-ltr .toc ul ul {
            margin: 0 0 0 2em
        }

        .mw-content-rtl .toc ul ul,
        .mw-content-ltr .mw-content-rtl .toc ul ul {
            margin: 0 2em 0 0
        }

        .toc .toctitle {
            direction: ltr
        }

        #mw-clearyourcache,
        #mw-sitecsspreview,
        #mw-sitejspreview,
        #mw-usercsspreview,
        #mw-userjspreview {
            direction: ltr;
            unicode-bidi: embed
        }

        #mw-revision-info,
        #mw-revision-info-current,
        #mw-revision-nav {
            direction: ltr
        }

        div.tright,
        div.floatright,
        table.floatright {
            clear: right;
            float: right
        }

        div.tleft,
        div.floatleft,
        table.floatleft {
            float: left;
            clear: left
        }

        div.floatright,
        table.floatright,
        div.floatleft,
        table.floatleft {
            position: relative
        }

        #mw-credits a {
            unicode-bidi: embed
        }

        .printfooter {
            display: none
        }

        .xdebug-error {
            position: absolute;
            z-index: 99
        }

        .mw-editsection {
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none
        }

        .mw-editsection,
        .mw-editsection-like {
            font-size: small;
            font-weight: normal;
            margin-left: 1em;
            vertical-align: baseline;
            line-height: 1em
        }

        .mw-content-ltr .mw-editsection,
        .mw-content-rtl .mw-content-ltr .mw-editsection {
            margin-left: 1em
        }

        .mw-content-rtl .mw-editsection,
        .mw-content-ltr .mw-content-rtl .mw-editsection {
            margin-right: 1em
        }

        sup,
        sub {
            line-height: 1
        }
    }

    @media screen {
        a {
            text-decoration: none;
            color: #0645ad;
            background: none
        }

        a:not([href]) {
            cursor: pointer
        }

        a:visited {
            color: #0b0080
        }

        a:active {
            color: #faa700
        }

        a:hover,
        a:focus {
            text-decoration: underline
        }

        a:lang(ar),
        a:lang(kk-arab),
        a:lang(mzn),
        a:lang(ps),
        a:lang(ur) {
            text-decoration: none
        }

        a.stub {
            color: #723
        }

        a.new,
        #p-personal a.new {
            color: #ba0000
        }

        a.mw-selflink {
            color: inherit;
            font-weight: bold;
            text-decoration: inherit
        }

        a.mw-selflink:hover {
            cursor: inherit;
            text-decoration: inherit
        }

        a.mw-selflink:active,
        a.mw-selflink:visited {
            color: inherit
        }

        a.new:visited,
        #p-personal a.new:visited {
            color: #a55858
        }

        .mw-parser-output a.extiw,
        .mw-parser-output a.extiw:active {
            color: #36b
        }

        .mw-parser-output a.extiw:visited {
            color: #636
        }

        .mw-parser-output a.extiw:active {
            color: #b63
        }

        .mw-parser-output a.external {
            color: #36b
        }

        .mw-parser-output a.external:visited {
            color: #636
        }

        .mw-parser-output a.external:active {
            color: #b63
        }

        .mw-parser-output a.external.free {
            word-wrap: break-word
        }

        img {
            border: 0;
            vertical-align: middle
        }

        hr {
            height: 1px;
            color: #a2a9b1;
            background-color: #a2a9b1;
            border: 0;
            margin: 0.2em 0
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            color: #000;
            background: none;
            font-weight: normal;
            margin: 0;
            overflow: hidden;
            padding-top: 0.5em;
            padding-bottom: 0.17em;
            border-bottom: 1px solid #a2a9b1
        }

        h1 {
            font-size: 188%
        }

        h2 {
            font-size: 150%
        }

        h3,
        h4,
        h5,
        h6 {
            border-bottom: 0;
            font-weight: bold
        }

        h3 {
            font-size: 128%
        }

        h4 {
            font-size: 116%
        }

        h5 {
            font-size: 108%
        }

        h6 {
            font-size: 100%
        }

        h1,
        h2 {
            margin-bottom: 0.6em
        }

        h3,
        h4,
        h5 {
            margin-bottom: 0.3em
        }

        p {
            margin: 0.4em 0 0.5em 0
        }

        p img {
            margin: 0
        }

        ul {
            list-style-type: square;
            margin: 0.3em 0 0 1.6em;
            padding: 0
        }

        ol {
            margin: 0.3em 0 0 3.2em;
            padding: 0;
            list-style-image: none
        }

        li {
            margin-bottom: 0.1em
        }

        dt {
            font-weight: bold;
            margin-bottom: 0.1em
        }

        dl {
            margin-top: 0.2em;
            margin-bottom: 0.5em
        }

        dd {
            margin-left: 1.6em;
            margin-bottom: 0.1em
        }

        pre,
        code,
        tt,
        kbd,
        samp,
        .mw-code {
            font-family: monospace, monospace
        }

        code {
            color: #000;
            background-color: #f8f9fa;
            border: 1px solid #eaecf0;
            border-radius: 2px;
            padding: 1px 4px
        }

        pre,
        .mw-code {
            color: #000;
            background-color: #f8f9fa;
            border: 1px solid #eaecf0;
            padding: 1em;
            white-space: pre-wrap
        }

        table {
            font-size: 100%
        }

        fieldset {
            border: 1px solid #2a4b8d;
            margin: 1em 0 1em 0;
            padding: 0 1em 1em
        }

        fieldset.nested {
            margin: 0 0 0.5em 0;
            padding: 0 0.5em 0.5em
        }

        legend {
            padding: 0.5em;
            font-size: 95%
        }

        form {
            border: 0;
            margin: 0
        }

        textarea {
            width: 100%;
            padding: 0.1em;
            display: block;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box
        }

        .center {
            width: 100%;
            text-align: center
        }

        *.center * {
            margin-left: auto;
            margin-right: auto
        }

        .small {
            font-size: 94%
        }

        table.small {
            font-size: 100%
        }

        .toc,
        .mw-warning,
        .toccolours {
            border: 1px solid #a2a9b1;
            background-color: #f8f9fa;
            padding: 5px;
            font-size: 95%
        }

        .toc {
            display: inline-block;
            display: table;
            zoom: 1;
            *display: inline;
            padding: 7px
        }

        table.toc {
            border-collapse: collapse
        }

        table.toc td {
            padding: 0
        }

        .toc h2 {
            display: inline;
            border: 0;
            padding: 0;
            font-size: 100%;
            font-weight: bold
        }

        .toc .toctitle {
            text-align: center
        }

        .toc ul {
            list-style-type: none;
            list-style-image: none;
            margin-left: 0;
            padding: 0;
            text-align: left
        }

        .toc ul ul {
            margin: 0 0 0 2em
        }

        .tocnumber,
        .toctext {
            display: table-cell;
            text-decoration: inherit
        }

        .tocnumber {
            padding-left: 0;
            padding-right: 0.5em;
            color: #222
        }

        .mw-content-ltr .tocnumber {
            padding-left: 0;
            padding-right: 0.5em
        }

        .mw-content-rtl .tocnumber {
            padding-left: 0.5em;
            padding-right: 0
        }

        .mw-warning {
            margin-left: 50px;
            margin-right: 50px;
            text-align: center
        }

        div.floatright,
        table.floatright {
            margin: 0 0 0.5em 0.5em
        }

        div.floatleft,
        table.floatleft {
            margin: 0 0.5em 0.5em 0
        }

        div.thumb {
            margin-bottom: 0.5em;
            width: auto;
            background-color: transparent
        }

        div.thumbinner {
            border: 1px solid #c8ccd1;
            padding: 3px;
            background-color: #f8f9fa;
            font-size: 94%;
            text-align: center;
            overflow: hidden
        }

        html .thumbimage {
            background-color: #fff;
            border: 1px solid #c8ccd1
        }

        html .thumbcaption {
            border: 0;
            line-height: 1.4em;
            padding: 3px;
            font-size: 94%;
            text-align: left
        }

        div.magnify {
            float: right;
            margin-left: 3px
        }

        div.magnify a {
            display: block;
            text-indent: 15px;
            white-space: nowrap;
            overflow: hidden;
            width: 15px;
            height: 11px;
            background-image: url("en.wikipedia.org/w/resources/src/mediawiki.skinning/images/magnify-clip-ltr.png");
            background-image: linear-gradient(transparent, transparent), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 11 15%22 width=%2215%22 height=%2211%22%3E %3Cg id=%22magnify-clip%22 fill=%22%23fff%22 stroke=%22%23000%22%3E %3Cpath id=%22bigbox%22 d=%22M1.509 1.865h10.99v7.919h-10.99z%22/%3E %3Cpath id=%22smallbox%22 d=%22M-1.499 6.868h5.943v4.904h-5.943z%22/%3E %3C/g%3E %3C/svg%3E");
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none
        }

        img.thumbborder {
            border: 1px solid #eaecf0
        }

        .mw-content-ltr .thumbcaption {
            text-align: left
        }

        .mw-content-ltr .magnify {
            float: right;
            margin-left: 3px;
            margin-right: 0
        }

        .mw-content-ltr div.magnify a {
            background-image: url("en.wikipedia.org/w/resources/src/mediawiki.skinning/images/magnify-clip-ltr.png");
            background-image: linear-gradient(transparent, transparent), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 11 15%22 width=%2215%22 height=%2211%22%3E %3Cg id=%22magnify-clip%22 fill=%22%23fff%22 stroke=%22%23000%22%3E %3Cpath id=%22bigbox%22 d=%22M1.509 1.865h10.99v7.919h-10.99z%22/%3E %3Cpath id=%22smallbox%22 d=%22M-1.499 6.868h5.943v4.904h-5.943z%22/%3E %3C/g%3E %3C/svg%3E")
        }

        .mw-content-rtl .thumbcaption {
            text-align: right
        }

        .mw-content-rtl .magnify {
            float: left;
            margin-left: 0;
            margin-right: 3px
        }

        .mw-content-rtl div.magnify a {
            background-image: url("en.wikipedia.org/w/resources/src/mediawiki.skinning/images/magnify-clip-rtl.png");
            background-image: linear-gradient(transparent, transparent), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 11 15%22 width=%2215%22 height=%2211%22%3E %3Cg id=%22magnify-clip%22 fill=%22%23fff%22 stroke=%22%23000%22%3E %3Cpath id=%22bigbox%22 d=%22M9.491 1.865h-10.99v7.919h10.99z%22/%3E %3Cpath id=%22smallbox%22 d=%22M12.499 6.868h-5.943v4.904h5.943z%22/%3E %3C/g%3E %3C/svg%3E")
        }

        div.tright {
            margin: 0.5em 0 1.3em 1.4em
        }

        div.tleft {
            margin: 0.5em 1.4em 1.3em 0
        }

        body.mw-hide-empty-elt .mw-empty-elt {
            display: none
        }

        .catlinks {
            border: 1px solid #a2a9b1;
            background-color: #f8f9fa;
            padding: 5px;
            margin-top: 1em;
            clear: both
        }

        textarea {
            border: 1px solid #c8ccd1
        }

        .editOptions {
            background-color: #eaecf0;
            color: #222;
            border: 1px solid #c8ccd1;
            border-top: 0;
            padding: 1em 1em 1.5em 1em;
            margin-bottom: 2em
        }

        .usermessage {
            background-color: #ffce7b;
            border: 1px solid #ffa500;
            color: #000;
            font-weight: bold;
            margin: 2em 0 1em;
            padding: 0.5em 1em;
            vertical-align: middle
        }

        #siteNotice {
            position: relative;
            text-align: center;
            margin: 0
        }

        #localNotice {
            margin-bottom: 0.9em
        }

        .firstHeading {
            margin-bottom: 0.1em;
            line-height: 1.2em;
            padding-bottom: 0
        }

        #siteSub {
            display: none
        }

        #contentSub,
        #contentSub2 {
            font-size: 84%;
            line-height: 1.2em;
            margin: 0 0 1.4em 1em;
            color: #54595d;
            width: auto
        }

        span.subpages {
            display: block
        }
    }

    .mw-wiki-logo {
        background-image: url("en.wikipedia.org/static/images/project-logos/enwiki.png")
    }

    @media (-webkit-min-device-pixel-ratio:1.5),
    (min--moz-device-pixel-ratio:1.5),
    (min-resolution:1.5dppx),
    (min-resolution:144dpi) {
        .mw-wiki-logo {
            background-image: url("en.wikipedia.org/static/images/project-logos/enwiki-1.5x.png");
            background-size: 135px auto
        }
    }

    @media (-webkit-min-device-pixel-ratio:2),
    (min--moz-device-pixel-ratio:2),
    (min-resolution:2dppx),
    (min-resolution:192dpi) {
        .mw-wiki-logo {
            background-image: url("en.wikipedia.org/static/images/project-logos/enwiki-2x.png");
            background-size: 135px auto
        }
    }

    @media screen {
        html {
            font-size: 100%
        }

        html,
        body {
            height: 100%;
            margin: 0;
            padding: 1rem;
            font-family: sans-serif
        }

        body {
            background-color: #f6f6f6
        }

        .mw-body,
        .parsoid-body {
            padding: 1em;
            background-color: #ffffff;
            color: #222222;
            direction: ltr
        }

        .mw-body {
            margin-left: 10em;
            border: 1px solid #a7d7f9;
            border-right-width: 0;
            margin-top: -1px
        }

        .mw-body h1,
        .mw-body-content h1,
        .mw-body-content h2 {
            font-family: 'Linux Libertine', 'Georgia', 'Times', serif;
            line-height: 1.3;
            margin-bottom: 0.25em;
            padding: 0
        }

        .mw-body h1:lang(ja),
        .mw-body-content h1:lang(ja),
        .mw-body-content h2:lang(ja),
        .mw-body h1:lang(he),
        .mw-body-content h1:lang(he),
        .mw-body-content h2:lang(he),
        .mw-body h1:lang(ko),
        .mw-body-content h1:lang(ko),
        .mw-body-content h2:lang(ko) {
            font-family: sans-serif
        }

        .mw-body h1:lang(my),
        .mw-body-content h1:lang(my),
        .mw-body-content h2:lang(my) {
            line-height: normal
        }

        .mw-body h1,
        .mw-body-content h1 {
            font-size: 1.8em
        }

        .mw-body .firstHeading {
            overflow: visible
        }

        .mw-body .mw-indicators {
            float: right;
            line-height: 1.6;
            font-size: 0.875em;
            position: relative;
            z-index: 1
        }

        .mw-body .mw-indicator {
            display: inline-block;
            zoom: 1;
            *display: inline
        }

        .mw-body-content {
            position: relative;
            line-height: 1.6;
            font-size: 0.875em;
            z-index: 0
        }

        .mw-body-content p {
            line-height: inherit;
            margin: 0.5em 0
        }

        .mw-body-content h1 {
            margin-top: 1em
        }

        .mw-body-content h2 {
            font-size: 1.5em;
            margin-top: 1em
        }

        .mw-body-content h3,
        .mw-body-content h4,
        .mw-body-content h5,
        .mw-body-content h6 {
            line-height: 1.6;
            margin-top: 0.3em;
            margin-bottom: 0;
            padding-bottom: 0
        }

        .mw-body-content h3 {
            font-size: 1.2em
        }

        .mw-body-content h3,
        .mw-body-content h4 {
            font-weight: bold
        }

        .mw-body-content h4,
        .mw-body-content h5,
        .mw-body-content h6 {
            font-size: 100%
        }

        .mw-body-content .toc h2 {
            font-size: 100%;
            font-family: sans-serif
        }

        .mw-editsection,
        .mw-editsection-like {
            font-family: sans-serif
        }

        div.emptyPortlet {
            display: none
        }

        ul {
            list-style-type: disc;
            list-style-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%225%22 height=%2213%22%3E %3Ccircle cx=%222.5%22 cy=%229.5%22 r=%222.5%22 fill=%22%2300528c%22/%3E %3C/svg%3E");
            list-style-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAANCAIAAADuXjPfAAAABnRSTlMA/wD/AP83WBt9AAAAHklEQVR4AWP4jwrowWcI6oEgEBtIISNCfFT9mOYDACO/lbNIGC/yAAAAAElFTkSuQmCC);
            list-style-image: url("en.wikipedia.org/w/skins/Vector/images/bullet-icon.png");
        }

        pre,
        .mw-code {
            line-height: 1.3em
        }

        #siteNotice {
            font-size: 0.8em
        }

        #p-personal {
            position: absolute;
            top: 0.33em;
            right: 0.75em;
            z-index: 100
        }

        #p-personal h3 {
            display: none
        }

        #p-personal ul {
            list-style: none none;
            margin: 0;
            padding-left: 10em
        }

        #p-personal li {
            float: left;
            margin-left: 0.75em;
            padding-top: 0.5em;
            font-size: 0.75em;
            line-height: 1.16666667em;
            white-space: nowrap
        }

        #pt-anonuserpage,
        #pt-userpage a {
            background-image: url("en.wikipedia.org/w/skins/Vector/images/user-avatar.png");
            background-image: linear-gradient(transparent, transparent), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E %3Cg fill=%22%2354595d%22%3E %3Cpath d=%22M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5z%22/%3E %3Ccircle cx=%2210%22 cy=%225.5%22 r=%224.5%22/%3E %3C/g%3E %3C/svg%3E");
            background-position: left 0.33333333em;
            background-repeat: no-repeat;
            background-size: 1.16666667em 1.16666667em;
            padding-top: 0.5em !important;
            padding-left: 16px !important
        }

        #pt-userpage {
            padding-top: 0 !important
        }

        #pt-userpage a {
            display: inline-block
        }

        #pt-anonuserpage {
            color: #54595d
        }

        #p-search {
            float: left;
            margin-right: 0.5em;
            margin-left: 0.5em
        }

        #p-search h3 {
            display: block;
            position: absolute !important;
            clip: rect(1px, 1px, 1px, 1px);
            width: 1px;
            height: 1px;
            margin: -1px;
            border: 0;
            padding: 0;
            overflow: hidden
        }

        #p-search form,
        #p-search input {
            margin: 0.4em 0 0
        }

        #simpleSearch {
            background-color: #fff;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAQCAIAAABY/YLgAAAAJUlEQVQIHQXBsQEAAAjDoND/73UWdnerhmHVsDQZJrNWVg3Dqge6bgMe6bejNAAAAABJRU5ErkJggg==);
            background-image: url("en.wikipedia.org/w/skins/Vector/images/search-fade.png");
            background-position: top left;
            background-repeat: repeat-x;
            color: #000;
            display: block;
            width: 12.6em;
            width: 20vw;
            min-width: 5em;
            max-width: 20em;
            padding-right: 1.4em;
            height: 1.4em;
            margin-top: 0.65em;
            position: relative;
            min-height: 1px;
            border: 1px solid #a2a9b1;
            border-radius: 2px;
            -webkit-transition: border-color 250ms;
            -moz-transition: border-color 250ms;
            transition: border-color 250ms
        }

        #simpleSearch:hover {
            border-color: #72777d
        }

        #simpleSearch input {
            background-color: transparent;
            color: #000;
            margin: 0;
            padding: 0;
            border: 0
        }

        #simpleSearch #searchInput {
            width: 100%;
            padding: 0.2em 0 0.2em 0.2em;
            font-size: 0.8125em;
            direction: ltr;
            -webkit-appearance: textfield
        }

        #simpleSearch #searchInput:focus {
            outline: 0
        }

        #simpleSearch #searchInput::-webkit-input-placeholder {
            color: #72777d;
            opacity: 1
        }

        #simpleSearch #searchInput:-ms-input-placeholder {
            color: #72777d;
            opacity: 1
        }

        #simpleSearch #searchInput::-moz-placeholder {
            color: #72777d;
            opacity: 1
        }

        #simpleSearch #searchInput:-moz-placeholder {
            color: #72777d;
            opacity: 1
        }

        #simpleSearch #searchInput::placeholder {
            color: #72777d;
            opacity: 1
        }

        #simpleSearch #searchInput::-webkit-search-decoration,
        #simpleSearch #searchInput::-webkit-search-cancel-button,
        #simpleSearch #searchInput::-webkit-search-results-button,
        #simpleSearch #searchInput::-webkit-search-results-decoration {
            -webkit-appearance: textfield
        }

        #simpleSearch #searchButton,
        #simpleSearch #mw-searchButton {
            position: absolute;
            top: 0;
            right: 0;
            width: 1.65em;
            height: 100%;
            cursor: pointer;
            text-indent: -99999px;
            direction: ltr;
            white-space: nowrap;
            overflow: hidden
        }

        #simpleSearch #searchButton {
            background-image: url("en.wikipedia.org/w/skins/Vector/images/search-ltr.png");
            background-image: linear-gradient(transparent, transparent), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2213%22%3E %3Cg fill=%22none%22 stroke=%22%2354595d%22 stroke-width=%222%22%3E %3Cpath d=%22M11.29 11.71l-4-4%22/%3E %3Ccircle cx=%225%22 cy=%225%22 r=%224%22/%3E %3C/g%3E %3C/svg%3E");
            background-position: center center;
            background-repeat: no-repeat
        }

        #simpleSearch #mw-searchButton {
            z-index: 1
        }

        .vectorTabs {
            float: left;
            height: 2.5em;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAuCAIAAABmjeQ9AAAAQ0lEQVR4AWVOhQEAIAzC/X+xAXbXeoDFGA3A9yk1n4juBROcUegfarWjP3ojZvEzxs6j+nygmo+zzsk79nY+tOxdEhlf3UHVgUFrVwAAAABJRU5ErkJggg==);
            background-image: url("en.wikipedia.org/w/skins/Vector/images/tab-break.png");
            background-position: bottom left;
            background-repeat: no-repeat;
            padding-left: 1px
        }

        .vectorTabs h3 {
            display: none
        }

        .vectorTabs ul {
            float: left;
            height: 100%;
            list-style: none none;
            margin: 0;
            padding: 0;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAuCAIAAABmjeQ9AAAAQ0lEQVR4AWVOhQEAIAzC/X+xAXbXeoDFGA3A9yk1n4juBROcUegfarWjP3ojZvEzxs6j+nygmo+zzsk79nY+tOxdEhlf3UHVgUFrVwAAAABJRU5ErkJggg==);
            background-image: url("en.wikipedia.org/w/skins/Vector/images/tab-break.png");
            background-position: right bottom;
            background-repeat: no-repeat
        }

        .vectorTabs li {
            float: left;
            line-height: 1.125em;
            display: block;
            height: 100%;
            margin: 0;
            padding: 0;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABkCAIAAADITs03AAAAO0lEQVR4AeSKhREAMQzDdN5/5uixuEKDpqgBjl2f78wd2DVj1+26/h///PfteVMN7zoGebcg1/Y/ZQQAlAUtQCujIJMAAAAASUVORK5CYII=);
            background-image: url("en.wikipedia.org/w/skins/Vector/images/tab-normal-fade.png");
            background-position: bottom left;
            background-repeat: repeat-x;
            white-space: nowrap
        }

        .vectorTabs li.new a,
        .vectorTabs li.new a:visited {
            color: #a55858
        }

        .vectorTabs li.selected {
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABkAQAAAABvV2fNAAAADElEQVR4AWNoGB4QAInlMgFKeRKBAAAAAElFTkSuQmCC);
            background-image: url("en.wikipedia.org/w/skins/Vector/images/tab-current-fade.png");
        }

        .vectorTabs li.selected a,
        .vectorTabs li.selected a:visited {
            color: #222;
            text-decoration: none
        }

        .vectorTabs li.icon a {
            background-position: bottom right;
            background-repeat: no-repeat
        }

        .vectorTabs li a {
            display: block;
            height: 1.9em;
            padding-left: 0.615em;
            padding-right: 0.615em;
            color: #0645ad;
            cursor: pointer;
            font-size: 0.8125em
        }

        .vectorTabs span {
            display: inline-block;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAuCAIAAABmjeQ9AAAAQ0lEQVR4AWVOhQEAIAzC/X+xAXbXeoDFGA3A9yk1n4juBROcUegfarWjP3ojZvEzxs6j+nygmo+zzsk79nY+tOxdEhlf3UHVgUFrVwAAAABJRU5ErkJggg==);
            background-image: url("en.wikipedia.org/w/skins/Vector/images/tab-break.png");
            background-position: bottom right;
            background-repeat: no-repeat;
            height: 100%
        }

        .vectorTabs span a {
            float: left;
            display: block;
            position: relative;
            padding-top: 1.25em
        }

        .vectorMenu {
            direction: ltr;
            float: left;
            cursor: pointer;
            position: relative;
            line-height: 1.125em
        }

        .vectorMenu h3 span {
            position: relative;
            display: block;
            font-size: 0.8125em;
            padding-left: 0.615em;
            padding-top: 1.25em;
            padding-right: 16px;
            font-weight: normal;
            color: #444
        }

        .vectorMenu h3 span:after {
            content: '';
            position: absolute;
            top: 1.25em;
            right: 0;
            bottom: 0;
            left: 0;
            background-image: url("en.wikipedia.org/w/skins/Vector/images/arrow-down.png");
            background-image: linear-gradient(transparent, transparent), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22%3E %3Cpath d=%22M11.05 3.996l-.965-1.053-4.035 3.86-3.947-3.86L1.05 3.996l5 5 5-5%22 fill=%22%23222%22/%3E %3C/svg%3E");
            background-position: 100% 50%;
            background-repeat: no-repeat;
            opacity: 0.85
        }

        .vectorMenu h3:hover span,
        .vectorMenu h3:focus span {
            color: #222222
        }

        .vectorMenu h3:hover span:after,
        .vectorMenu h3:focus span:after {
            opacity: 1
        }

        .vectorMenu .menu {
            list-style: none none;
            background-color: #ffffff;
            clear: both;
            min-width: 100%;
            position: absolute;
            top: 2.5em;
            left: -1px;
            margin: 0;
            border: 1px solid #a2a9b1;
            border-top-width: 0;
            padding: 0;
            box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
            text-align: left;
            display: none;
            z-index: 2
        }

        .vectorMenu:hover .menu {
            display: block
        }

        .vectorMenu .vectorMenuCheckbox:checked~.menu {
            display: block
        }

        .vectorMenu ul {
            list-style: none none;
            padding: 0;
            margin: 0;
            text-align: left
        }

        .vectorMenu li {
            padding: 0;
            margin: 0;
            text-align: left;
            line-height: 1em
        }

        .vectorMenu li a {
            display: block;
            padding: 0.625em;
            white-space: nowrap;
            color: #0645ad;
            cursor: pointer;
            font-size: 0.8125em
        }

        .vectorMenu li.selected a,
        .vectorMenu li.selected a:visited {
            color: #222;
            text-decoration: none
        }

        #mw-head .vectorMenu h3 {
            float: left;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAuCAIAAABmjeQ9AAAAQ0lEQVR4AWVOhQEAIAzC/X+xAXbXeoDFGA3A9yk1n4juBROcUegfarWjP3ojZvEzxs6j+nygmo+zzsk79nY+tOxdEhlf3UHVgUFrVwAAAABJRU5ErkJggg==);
            background-image: url("en.wikipedia.org/w/skins/Vector/images/tab-break.png");
            background-repeat: no-repeat;
            background-position: bottom right;
            font-size: 1em;
            height: 2.5em;
            padding: 0 0.5em 0 0;
            margin: 0 -1px 0 0
        }

        .vectorMenuCheckbox {
            cursor: pointer;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            opacity: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            display: none
        }

        :not(:checked)>.vectorMenuCheckbox {
            display: block
        }

        .vectorMenuCheckbox:checked+h3 span:after {
            transform: scaleY(-1)
        }

        .vectorMenuCheckbox:focus+h3 {
            outline: dotted 1px;
            outline: auto -webkit-focus-ring-color
        }

        @-webkit-keyframes rotate {
            from {
                -webkit-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                transform: rotate(0deg)
            }

            to {
                -webkit-transform: rotate(360deg);
                -moz-transform: rotate(360deg);
                transform: rotate(360deg)
            }
        }

        @-moz-keyframes rotate {
            from {
                -webkit-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                transform: rotate(0deg)
            }

            to {
                -webkit-transform: rotate(360deg);
                -moz-transform: rotate(360deg);
                transform: rotate(360deg)
            }
        }

        @keyframes rotate {
            from {
                -webkit-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                transform: rotate(0deg)
            }

            to {
                -webkit-transform: rotate(360deg);
                -moz-transform: rotate(360deg);
                transform: rotate(360deg)
            }
        }

        .vectorTabs #ca-unwatch.icon a,
        .vectorTabs #ca-watch.icon a {
            margin: 0;
            padding: 0;
            display: block;
            width: 28px;
            padding-top: 3.07692308em;
            height: 0;
            overflow: hidden;
            background-position: 5px 60%;
            background-repeat: no-repeat
        }

        .vectorTabs #ca-unwatch.icon a {
            background-image: url("en.wikipedia.org/w/skins/Vector/images/unwatch-icon.png");
            background-image: linear-gradient(transparent, transparent), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22%3E %3Cdefs%3E %3ClinearGradient id=%22a%22%3E %3Cstop offset=%220%22 stop-color=%22%23c2edff%22/%3E %3Cstop offset=%22.5%22 stop-color=%22%2368bdff%22/%3E %3Cstop offset=%221%22 stop-color=%22%23fff%22/%3E %3C/linearGradient%3E %3ClinearGradient id=%22b%22 x1=%2213.47%22 x2=%224.596%22 y1=%2214.363%22 y2=%223.397%22 xlink:href=%22%23a%22 gradientUnits=%22userSpaceOnUse%22/%3E %3C/defs%3E %3Cpath fill=%22url%28%23b%29%22 stroke=%22%237cb5d1%22 stroke-width=%22.99992%22 d=%22M8.103 1.146l2.175 4.408 4.864.707-3.52 3.431.831 4.845-4.351-2.287-4.351 2.287.831-4.845-3.52-3.431 4.864-.707z%22/%3E %3C/svg%3E")
        }

        .vectorTabs #ca-watch.icon a {
            background-image: url("en.wikipedia.org/w/skins/Vector/images/watch-icon.png");
            background-image: linear-gradient(transparent, transparent), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%237cb5d1%22 stroke-width=%22.99992%22 d=%22M8.103 1.146l2.175 4.408 4.864.707-3.52 3.431.831 4.845-4.351-2.287-4.351 2.287.831-4.845-3.52-3.431 4.864-.707z%22/%3E %3C/svg%3E")
        }

        .vectorTabs #ca-unwatch.icon a:hover,
        .vectorTabs #ca-unwatch.icon a:focus {
            background-image: url("en.wikipedia.org/w/skins/Vector/images/unwatch-icon-hl.png");
            background-image: linear-gradient(transparent, transparent), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22%3E %3Cdefs%3E %3ClinearGradient id=%22a%22%3E %3Cstop offset=%220%22 stop-color=%22%23c2edff%22/%3E %3Cstop offset=%22.5%22 stop-color=%22%2368bdff%22/%3E %3Cstop offset=%221%22 stop-color=%22%23fff%22/%3E %3C/linearGradient%3E %3ClinearGradient id=%22b%22 x1=%2213.47%22 x2=%224.596%22 y1=%2214.363%22 y2=%223.397%22 xlink:href=%22%23a%22 gradientUnits=%22userSpaceOnUse%22/%3E %3C/defs%3E %3Cpath fill=%22url%28%23b%29%22 stroke=%22%23c8b250%22 stroke-width=%22.99992%22 d=%22M8.103 1.146l2.175 4.408 4.864.707-3.52 3.431.831 4.845-4.351-2.287-4.351 2.287.831-4.845-3.52-3.431 4.864-.707z%22/%3E %3C/svg%3E")
        }

        .vectorTabs #ca-watch.icon a:hover,
        .vectorTabs #ca-watch.icon a:focus {
            background-image: url("en.wikipedia.org/w/skins/Vector/images/watch-icon-hl.png");
            background-image: linear-gradient(transparent, transparent), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%23c8b250%22 stroke-width=%22.99992%22 d=%22M8.103 1.146l2.175 4.408 4.864.707-3.52 3.431.831 4.845-4.351-2.287-4.351 2.287.831-4.845-3.52-3.431 4.864-.707z%22/%3E %3C/svg%3E")
        }

        .vectorTabs #ca-unwatch.icon a.loading,
        .vectorTabs #ca-watch.icon a.loading {
            background-image: url("en.wikipedia.org/w/skins/Vector/images/watch-icon-loading.png");
            background-image: linear-gradient(transparent, transparent), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%23c8ccd1%22 stroke-width=%22.99992%22 d=%22M8.103 1.146l2.175 4.408 4.864.707-3.52 3.431.831 4.845-4.351-2.287-4.351 2.287.831-4.845-3.52-3.431 4.864-.707z%22/%3E %3C/svg%3E");
            -webkit-animation: rotate 700ms infinite linear;
            -moz-animation: rotate 700ms infinite linear;
            animation: rotate 700ms infinite linear;
            outline: 0;
            cursor: default;
            pointer-events: none;
            background-position: 50% 60%;
            -webkit-transform-origin: 50% 57%;
            transform-origin: 50% 57%
        }

        .vectorTabs #ca-unwatch.icon a span,
        .vectorTabs #ca-watch.icon a span {
            display: none
        }

        #mw-navigation h2 {
            position: absolute;
            top: -9999px
        }

        .mw-jump-link:not(:focus) {
            display: block;
            position: absolute !important;
            clip: rect(1px, 1px, 1px, 1px);
            width: 1px;
            height: 1px;
            margin: -1px;
            border: 0;
            padding: 0;
            overflow: hidden
        }

        #mw-page-base {
            height: 5em;
            background-position: bottom left;
            background-repeat: repeat-x;
            background-image: url("en.wikipedia.org/w/skins/Vector/images/page-fade.png");
            background-color: #f6f6f6;
            background-image: -webkit-linear-gradient(top, #ffffff 50%, #f6f6f6 100%);
            background-image: -moz-linear-gradient(top, #ffffff 50%, #f6f6f6 100%);
            background-image: linear-gradient(#ffffff 50%, #f6f6f6 100%);
            background-color: #ffffff
        }

        #mw-head-base {
            margin-top: -5em;
            margin-left: 10em;
            height: 5em
        }

        #mw-head {
            position: absolute;
            top: 0;
            right: 0;
            width: 100%
        }

        #left-navigation {
            float: left;
            margin-left: 10em;
            margin-top: 2.5em;
            margin-bottom: -2.5em
        }

        #right-navigation {
            float: right;
            margin-top: 2.5em
        }

        #p-logo {
            width: 10em;
            height: 160px
        }

        #p-logo a {
            display: block;
            width: 10em;
            height: 160px;
            background-repeat: no-repeat;
            background-position: center center;
            text-decoration: none
        }

        #mw-panel {
            font-size: inherit;
            position: absolute;
            top: 0;
            width: 10em;
            left: 0
        }

        #mw-panel .portal {
            margin: 0 0.6em 0 0.7em;
            padding: 0.25em 0;
            direction: ltr;
            background-position: top left;
            background-repeat: no-repeat
        }

        #mw-panel .portal h3 {
            font-size: 0.75em;
            color: #444444;
            font-weight: normal;
            margin: 0.5em 0 0 0.66666667em;
            padding: 0.25em 0;
            cursor: default;
            border: 0
        }

        #mw-panel .portal .body {
            margin-left: 0.5em;
            padding-top: 0;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAABCAAAAAAphRnkAAAAJ0lEQVQIW7XFsQEAIAyAMPD/b7uLWz8wS5youFW1UREfiIpH1Q2VBz7fGPS1dOGeAAAAAElFTkSuQmCC);
            background-image: url("en.wikipedia.org/w/skins/Vector/images/portal-break.png");
            background-repeat: no-repeat
        }

        #mw-panel .portal .body ul {
            list-style: none none;
            margin: 0;
            padding: 0.3em 0 0 0
        }

        #mw-panel .portal .body li {
            line-height: 1.125em;
            margin: 0;
            padding: 0.25em 0;
            font-size: 0.75em;
            word-wrap: break-word
        }

        #mw-panel .portal .body li a {
            color: #0645ad
        }

        #mw-panel .portal .body li a:visited {
            color: #0b0080
        }

        #mw-panel #p-logo+.portal {
            background-image: none;
            margin-top: 1em
        }

        #mw-panel #p-logo+.portal h3 {
            display: none
        }

        #mw-panel #p-logo+.portal .body {
            background-image: none;
            margin-left: 0.5em
        }

        #footer {
            margin-left: 10em;
            margin-top: 0;
            padding: 0.75em;
            direction: ltr
        }

        #footer ul {
            list-style: none none;
            margin: 0;
            padding: 0
        }

        #footer ul li {
            color: #222;
            margin: 0;
            padding: 0;
            padding-top: 0.5em;
            padding-bottom: 0.5em;
            font-size: 0.7em
        }

        #footer #footer-icons {
            float: right
        }

        #footer #footer-icons li {
            float: left;
            margin-left: 0.5em;
            line-height: 2em;
            text-align: right
        }

        #footer #footer-info li {
            line-height: 1.4em
        }

        #footer #footer-places li {
            float: left;
            margin-right: 1em;
            line-height: 2em
        }

        .mw-parser-output .external {
            background-position: center right;
            background-repeat: no-repeat;
            background-image: url("en.wikipedia.org/w/skins/Vector/images/external-link-ltr-icon.png");
            background-image: linear-gradient(transparent, transparent), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E");
            padding-right: 13px
        }
    }

    @media screen and (min-width:982px) {

        .mw-body,
        #mw-head-base,
        #left-navigation,
        #footer {
            margin-left: 11em
        }

        .mw-body {
            padding: 1.25em 1.5em 1.5em 1.5em
        }

        #footer {
            padding: 1.25em
        }

        #mw-panel {
            padding-left: 0.5em
        }

        #p-search {
            margin-right: 1em
        }

        #p-personal {
            right: 1em
        }
    }

    .firstHeading:before {
        content: url("en.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg");
        display: block;
        height: 18px;
        left: -9999px;
        line-height: 0;
        margin-bottom: 20px;
        position: absolute;
        width: 116px
    }

    @media print {

        .toc,
        body {
            padding: 10px;
            font-family: 'Linux Libertine', 'Georgia', 'Times', serif
        }

        .printfooter,
        #footer,
        .thumb,
        table,
        ol,
        dl,
        ul,
        h3,
        h4,
        h5,
        h6 {
            font-family: sans-serif
        }

        img {
            font-family: 'Linux Libertine', 'Georgia', 'Times', serif
        }

        a {
            border-bottom: 1px solid #aaa
        }

        .firstHeading {
            font-size: 25pt;
            line-height: 28pt;
            margin-bottom: 20px;
            padding-bottom: 5px
        }

        .firstHeading:before {
            left: auto;
            position: relative
        }

        .firstHeading,
        h2 {
            overflow: hidden;
            border-bottom: 2px solid #000000
        }

        h3,
        h4,
        h5,
        h6 {
            margin: 30px 0 0
        }

        h2,
        h3,
        h4,
        h5,
        h6 {
            padding: 0;
            position: relative
        }

        h2 {
            font-size: 18pt;
            line-height: 24pt;
            margin-bottom: 0.25em
        }

        h3 {
            font-size: 13pt;
            line-height: 20pt
        }

        h4,
        h5,
        h6 {
            font-size: 10pt;
            line-height: 15pt
        }

        p {
            font-size: 10pt;
            line-height: 16pt;
            margin-top: 5px;
            text-align: justify
        }

        p:before {
            content: '';
            display: block;
            overflow: hidden;
            width: 120pt
        }

        blockquote {
            border-left: 2px solid #000000;
            padding-left: 20px
        }

        ol,
        ul {
            margin: 10px 0 0 1.6em;
            padding: 0
        }

        ol li,
        ul li {
            padding: 2px 0;
            font-size: 10pt
        }

        table ol li,
        table ul li {
            font-size: inherit
        }

        .toc {
            page-break-before: avoid;
            page-break-after: avoid;
            background: none;
            border: 0;
            display: table
        }

        .toc a {
            border: 0;
            font-weight: normal
        }

        .toc>ul>li {
            margin-bottom: 4px;
            font-weight: bold
        }

        .toc ul {
            margin: 0;
            list-style: none
        }

        .toc ul ul {
            padding-left: 30px
        }

        .toc li.toclevel-1>a {
            font-weight: bold;
            font-size: 10pt
        }

        .mw-jump-link,
        .toc .tocnumber {
            display: none
        }

        .printfooter {
            margin-top: 10px;
            border-top: 3px solid #000000;
            padding-top: 10px;
            font-size: 10pt;
            clear: both
        }

        #footer {
            margin-top: 12px;
            border-top: 1px solid #eeeeee;
            padding-top: 5px
        }

        #footer-info {
            margin: 0;
            padding: 0
        }

        #footer-info li {
            color: #999;
            list-style: none;
            display: block;
            padding-bottom: 10px;
            font-size: 10pt
        }

        #footer-info li a {
            color: #999 !important
        }

        #footer-info-lastmod {
            color: #000000;
            font-size: 12pt;
            font-weight: bold
        }
    }

    /*XOWA:https://en.wikipedia.org/w/load.php?debug=false&lang=en&modules=ext.gadget.charinsert-styles&only=styles&skin=vector*/
    div#editpage-specialchars {
        display: block;
        border: 1px solid #c0c0c0;
        padding: .5em 1em
    }

    #editpage-specialchars a {
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        padding: 1px 4px
    }

    textarea#wpTextbox1+#editpage-specialchars,
    .wikiEditor-ui-clear+#editpage-specialchars {
        border-top: none
    }

    /*XOWA:https://en.wikipedia.org/w/load.php?debug=false&lang=en&modules=site.styles&only=styles&skin=vector*/
    cite,
    dfn {
        font-style: inherit
    }

    q {
        quotes: '"''"'"'""'"
    }

    blockquote {
        overflow: hidden;
        margin: 1em 0;
        padding: 0 40px
    }

    strong.selflink {
        font-weight: 700
    }

    small {
        font-size: 85%
    }

    .mw-body-content sub,
    .mw-body-content sup,
    span.reference {
        font-size: 80%
    }

    .ns-talk .mw-body-content dd {
        margin-top: 0.4em;
        margin-bottom: 0.4em
    }

    #interwiki-completelist {
        font-weight: bold
    }

    .client-js .mw-special-Watchlist #watchlist-message,
    .client-js .NavFrame.collapsed .NavContent,
    .client-js .collapsible:not(.mw-made-collapsible).collapsed>tbody>tr:not(:first-child) {
        display: none
    }

    .mw-rcfilters-enabled .mw-specialpage-summary {
        margin-top: 1em
    }

    #editpage-specialchars {
        display: none
    }

    body.action-info .mw-body-content :target,
    .citation:target {
        background-color: #def;
        background-color: rgba(0, 127, 255, 0.133)
    }

    .citation {
        word-wrap: break-word
    }

    @media screen,
    handheld {
        .citation .printonly {
            display: none
        }
    }

    ol.references,
    div.reflist {
        font-size: 90%;
        margin-bottom: 0.5em
    }

    div.reflist ol.references {
        font-size: 100%;
        margin-bottom: 0;
        list-style-type: inherit
    }

    span.brokenref {
        display: none
    }

    div.columns {
        margin-top: 0.3em
    }

    div.columns dl,
    div.columns ol,
    div.columns ul {
        margin-top: 0
    }

    .nocolbreak,
    div.columns li,
    div.columns dd dd {
        -webkit-column-break-inside: avoid;
        page-break-inside: avoid;
        break-inside: avoid-column
    }

    .hlist dl,
    .hlist ol,
    .hlist ul {
        margin: 0;
        padding: 0
    }

    .hlist dd,
    .hlist dt,
    .hlist li {
        margin: 0;
        display: inline
    }

    .hlist.inline,
    .hlist.inline dl,
    .hlist.inline ol,
    .hlist.inline ul,
    .hlist dl dl,
    .hlist dl ol,
    .hlist dl ul,
    .hlist ol dl,
    .hlist ol ol,
    .hlist ol ul,
    .hlist ul dl,
    .hlist ul ol,
    .hlist ul ul {
        display: inline
    }

    .hlist .mw-empty-li {
        display: none
    }

    .hlist dt:after {
        content: ":"
    }

    .hlist dd:after,
    .hlist li:after {
        content: " · ";
        font-weight: bold
    }

    .hlist dd:last-child:after,
    .hlist dt:last-child:after,
    .hlist li:last-child:after {
        content: none
    }

    .hlist dd dd:first-child:before,
    .hlist dd dt:first-child:before,
    .hlist dd li:first-child:before,
    .hlist dt dd:first-child:before,
    .hlist dt dt:first-child:before,
    .hlist dt li:first-child:before,
    .hlist li dd:first-child:before,
    .hlist li dt:first-child:before,
    .hlist li li:first-child:before {
        content: " (";
        font-weight: normal
    }

    .hlist dd dd:last-child:after,
    .hlist dd dt:last-child:after,
    .hlist dd li:last-child:after,
    .hlist dt dd:last-child:after,
    .hlist dt dt:last-child:after,
    .hlist dt li:last-child:after,
    .hlist li dd:last-child:after,
    .hlist li dt:last-child:after,
    .hlist li li:last-child:after {
        content: ")";
        font-weight: normal
    }

    .hlist ol {
        counter-reset: listitem
    }

    .hlist ol>li {
        counter-increment: listitem
    }

    .hlist ol>li:before {
        content: " " counter(listitem) "\a0"
    }

    .hlist dd ol>li:first-child:before,
    .hlist dt ol>li:first-child:before,
    .hlist li ol>li:first-child:before {
        content: " (" counter(listitem) "\a0"
    }

    .plainlist ol,
    .plainlist ul {
        line-height: inherit;
        list-style: none none;
        margin: 0
    }

    .plainlist ol li,
    .plainlist ul li {
        margin-bottom: 0
    }

    .navbox {
        box-sizing: border-box;
        border: 1px solid #a2a9b1;
        width: 100%;
        clear: both;
        font-size: 88%;
        text-align: center;
        padding: 1px;
        margin: 1em auto 0
    }

    .navbox .navbox {
        margin-top: 0
    }

    .navbox+.navbox {
        margin-top: -1px
    }

    .navbox-inner,
    .navbox-subgroup {
        width: 100%
    }

    .navbox-group,
    .navbox-title,
    .navbox-abovebelow {
        padding: 0.25em 1em;
        line-height: 1.5em;
        text-align: center
    }

    th.navbox-group {
        white-space: nowrap;
        text-align: right
    }

    .navbox,
    .navbox-subgroup {
        background-color: #fdfdfd
    }

    .navbox-list {
        line-height: 1.5em;
        border-color: #fdfdfd
    }

    tr+tr>.navbox-abovebelow,
    tr+tr>.navbox-group,
    tr+tr>.navbox-image,
    tr+tr>.navbox-list {
        border-top: 2px solid #fdfdfd
    }

    .navbox th,
    .navbox-title {
        background-color: #ccccff
    }

    .navbox-abovebelow,
    th.navbox-group,
    .navbox-subgroup .navbox-title {
        background-color: #ddddff
    }

    .navbox-subgroup .navbox-group,
    .navbox-subgroup .navbox-abovebelow {
        background-color: #e6e6ff
    }

    .navbox-even {
        background-color: #f7f7f7
    }

    .navbox-odd {
        background-color: transparent
    }

    .navbox .hlist td dl,
    .navbox .hlist td ol,
    .navbox .hlist td ul,
    .navbox td.hlist dl,
    .navbox td.hlist ol,
    .navbox td.hlist ul {
        padding: 0.125em 0
    }

    .navbar {
        display: inline;
        font-size: 88%;
        font-weight: normal
    }

    .navbar ul {
        display: inline;
        white-space: nowrap
    }

    .mw-body-content .navbar ul {
        line-height: inherit
    }

    .navbar li {
        word-spacing: -0.125em
    }

    .navbar.mini li abbr[title] {
        font-variant: small-caps;
        border-bottom: none;
        text-decoration: none;
        cursor: inherit
    }

    .infobox .navbar {
        font-size: 100%
    }

    .navbox .navbar {
        display: block;
        font-size: 100%
    }

    .navbox-title .navbar {
        float: left;
        text-align: left;
        margin-right: 0.5em
    }

    .collapseButton {
        float: right;
        font-weight: normal;
        margin-left: 0.5em;
        text-align: right;
        width: auto
    }

    .mw-parser-output .mw-collapsible-toggle {
        font-weight: normal;
        text-align: right;
        padding-right: 0.2em;
        padding-left: 0.2em
    }

    .mw-collapsible-leftside-toggle .mw-collapsible-toggle {
        float: left;
        text-align: left
    }

    .infobox {
        border: 1px solid #a2a9b1;
        border-spacing: 3px;
        background-color: #f8f9fa;
        color: black;
        margin: 0.5em 0 0.5em 1em;
        padding: 0.2em;
        float: right;
        clear: right;
        font-size: 88%;
        line-height: 1.5em
    }

    .infobox caption {
        font-size: 125%;
        font-weight: bold;
        padding: 0.2em;
        text-align: center
    }

    .infobox td,
    .infobox th {
        vertical-align: top;
        text-align: left
    }

    .infobox.bordered {
        border-collapse: collapse
    }

    .infobox.bordered td,
    .infobox.bordered th {
        border: 1px solid #a2a9b1
    }

    .infobox.bordered .borderless td,
    .infobox.bordered .borderless th {
        border: 0
    }

    .infobox.sisterproject {
        width: 20em;
        font-size: 90%
    }

    .infobox.standard-talk {
        border: 1px solid #c0c090;
        background-color: #f8eaba
    }

    .infobox.standard-talk.bordered td,
    .infobox.standard-talk.bordered th {
        border: 1px solid #c0c090
    }

    .infobox.bordered .mergedtoprow td,
    .infobox.bordered .mergedtoprow th {
        border: 0;
        border-top: 1px solid #a2a9b1;
        border-right: 1px solid #a2a9b1
    }

    .infobox.bordered .mergedrow td,
    .infobox.bordered .mergedrow th {
        border: 0;
        border-right: 1px solid #a2a9b1
    }

    .infobox.geography {
        border-collapse: collapse;
        line-height: 1.2em;
        font-size: 90%
    }

    .infobox.geography td,
    .infobox.geography th {
        border-top: 1px solid #a2a9b1;
        padding: 0.4em 0.6em 0.4em 0.6em
    }

    .infobox.geography .mergedtoprow td,
    .infobox.geography .mergedtoprow th {
        border-top: 1px solid #a2a9b1;
        padding: 0.4em 0.6em 0.2em 0.6em
    }

    .infobox.geography .mergedrow td,
    .infobox.geography .mergedrow th {
        border: 0;
        padding: 0 0.6em 0.2em 0.6em
    }

    .infobox.geography .mergedbottomrow td,
    .infobox.geography .mergedbottomrow th {
        border-top: 0;
        border-bottom: 1px solid #a2a9b1;
        padding: 0 0.6em 0.4em 0.6em
    }

    .infobox.geography .maptable td,
    .infobox.geography .maptable th {
        border: 0;
        padding: 0
    }

    .wikitable.plainrowheaders th[scope=row] {
        font-weight: normal;
        text-align: left
    }

    .wikitable td ul,
    .wikitable td ol,
    .wikitable td dl {
        text-align: left
    }

    .toc.hlist ul,
    #toc.hlist ul,
    .wikitable.hlist td ul,
    .wikitable.hlist td ol,
    .wikitable.hlist td dl {
        text-align: inherit
    }

    div.listenlist {
        background: url("upload.wikimedia.org/wikipedia/commons/4/47/Sound-icon.svg") no-repeat scroll 0 0 transparent;
        background-size: 30px;
        padding-left: 40px
    }

    table.mw-hiero-table td {
        vertical-align: middle
    }

    div.medialist {
        min-height: 50px;
        margin: 1em;
        background-position: top left;
        background-repeat: no-repeat
    }

    div.medialist ul {
        list-style-type: none;
        list-style-image: none;
        margin: 0
    }

    div.medialist ul li {
        padding-bottom: 0.5em
    }

    div.medialist ul li li {
        font-size: 91%;
        padding-bottom: 0
    }

    .mw-parser-output a[href$=".pdf"].external,
    .mw-parser-output a[href*=".pdf?"].external,
    .mw-parser-output a[href*=".pdf#"].external,
    .mw-parser-output a[href$=".PDF"].external,
    .mw-parser-output a[href*=".PDF?"].external,
    .mw-parser-output a[href*=".PDF#"].external {
        background: url("upload.wikimedia.org/wikipedia/commons/2/23/Icons-mini-file_acrobat.gif") no-repeat right;
        padding-right: 18px
    }

    .messagebox {
        border: 1px solid #a2a9b1;
        background-color: #f8f9fa;
        width: 80%;
        margin: 0 auto 1em auto;
        padding: .2em
    }

    .messagebox.merge {
        border: 1px solid #c0b8cc;
        background-color: #f0e5ff;
        text-align: center
    }

    .messagebox.cleanup {
        border: 1px solid #9f9fff;
        background-color: #efefff;
        text-align: center
    }

    .messagebox.standard-talk {
        border: 1px solid #c0c090;
        background-color: #f8eaba;
        margin: 4px auto
    }

    .mbox-inside .standard-talk,
    .messagebox.nested-talk {
        border: 1px solid #c0c090;
        background-color: #f8eaba;
        width: 100%;
        margin: 2px 0;
        padding: 2px
    }

    .messagebox.small {
        width: 238px;
        font-size: 85%;
        float: right;
        clear: both;
        margin: 0 0 1em 1em;
        line-height: 1.25em
    }

    .messagebox.small-talk {
        width: 238px;
        font-size: 85%;
        float: right;
        clear: both;
        margin: 0 0 1em 1em;
        line-height: 1.25em;
        background-color: #f8eaba
    }

    th.mbox-text,
    td.mbox-text {
        border: none;
        padding: 0.25em 0.9em;
        width: 100%
    }

    td.mbox-image {
        border: none;
        padding: 2px 0 2px 0.9em;
        text-align: center
    }

    td.mbox-imageright {
        border: none;
        padding: 2px 0.9em 2px 0;
        text-align: center
    }

    td.mbox-empty-cell {
        border: none;
        padding: 0;
        width: 1px
    }

    table.ambox {
        margin: 0 10%;
        border: 1px solid #a2a9b1;
        border-left: 10px solid #36c;
        background-color: #fbfbfb;
        box-sizing: border-box
    }

    table.ambox+table.ambox {
        margin-top: -1px
    }

    .ambox th.mbox-text,
    .ambox td.mbox-text {
        padding: 0.25em 0.5em
    }

    .ambox td.mbox-image {
        padding: 2px 0 2px 0.5em
    }

    .ambox td.mbox-imageright {
        padding: 2px 0.5em 2px 0
    }

    table.ambox-notice {
        border-left: 10px solid #36c
    }

    table.ambox-speedy {
        border-left: 10px solid #b32424;
        background-color: #fee7e6
    }

    table.ambox-delete {
        border-left: 10px solid #b32424
    }

    table.ambox-content {
        border-left: 10px solid #f28500
    }

    table.ambox-style {
        border-left: 10px solid #fc3
    }

    table.ambox-move {
        border-left: 10px solid #9932cc
    }

    table.ambox-protection {
        border-left: 10px solid #a2a9b1
    }

    table.imbox {
        margin: 4px 10%;
        border-collapse: collapse;
        border: 3px solid #36c;
        background-color: #fbfbfb;
        box-sizing: border-box
    }

    .imbox .mbox-text .imbox {
        margin: 0 -0.5em;
        display: block
    }

    .mbox-inside .imbox {
        margin: 4px
    }

    table.imbox-notice {
        border: 3px solid #36c
    }

    table.imbox-speedy {
        border: 3px solid #b32424;
        background-color: #fee7e6
    }

    table.imbox-delete {
        border: 3px solid #b32424
    }

    table.imbox-content {
        border: 3px solid #f28500
    }

    table.imbox-style {
        border: 3px solid #fc3
    }

    table.imbox-move {
        border: 3px solid #9932cc
    }

    table.imbox-protection {
        border: 3px solid #a2a9b1
    }

    table.imbox-license {
        border: 3px solid #88a;
        background-color: #f7f8ff
    }

    table.imbox-featured {
        border: 3px solid #cba135
    }

    table.cmbox {
        margin: 3px 10%;
        border-collapse: collapse;
        border: 1px solid #a2a9b1;
        background-color: #dfe8ff;
        box-sizing: border-box
    }

    table.cmbox-notice {
        background-color: #d8e8ff
    }

    table.cmbox-speedy {
        margin-top: 4px;
        margin-bottom: 4px;
        border: 4px solid #b32424;
        background-color: #ffdbdb
    }

    table.cmbox-delete {
        background-color: #ffdbdb
    }

    table.cmbox-content {
        background-color: #ffe7ce
    }

    table.cmbox-style {
        background-color: #fff9db
    }

    table.cmbox-move {
        background-color: #e4d8ff
    }

    table.cmbox-protection {
        background-color: #efefe1
    }

    table.ombox {
        margin: 4px 10%;
        border-collapse: collapse;
        border: 1px solid #a2a9b1;
        background-color: #f8f9fa;
        box-sizing: border-box
    }

    table.ombox-notice {
        border: 1px solid #a2a9b1
    }

    table.ombox-speedy {
        border: 2px solid #b32424;
        background-color: #fee7e6
    }

    table.ombox-delete {
        border: 2px solid #b32424
    }

    table.ombox-content {
        border: 1px solid #f28500
    }

    table.ombox-style {
        border: 1px solid #fc3
    }

    table.ombox-move {
        border: 1px solid #9932cc
    }

    table.ombox-protection {
        border: 2px solid #a2a9b1
    }

    table.tmbox {
        margin: 4px 10%;
        border-collapse: collapse;
        border: 1px solid #c0c090;
        background-color: #f8eaba;
        min-width: 80%;
        box-sizing: border-box
    }

    .tmbox.mbox-small {
        min-width: 0
    }

    .mediawiki .mbox-inside .tmbox {
        margin: 2px 0;
        width: 100%
    }

    .mbox-inside .tmbox.mbox-small {
        line-height: 1.5em;
        font-size: 100%
    }

    table.tmbox-speedy {
        border: 2px solid #b32424;
        background-color: #fee7e6
    }

    table.tmbox-delete {
        border: 2px solid #b32424
    }

    table.tmbox-content {
        border: 2px solid #f28500
    }

    table.tmbox-style {
        border: 2px solid #fc3
    }

    table.tmbox-move {
        border: 2px solid #9932cc
    }

    table.tmbox-protection,
    table.tmbox-notice {
        border: 1px solid #c0c090
    }

    table.dmbox {
        clear: both;
        margin: 0.9em 1em;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        background-color: transparent
    }

    table.fmbox {
        clear: both;
        margin: 0.2em 0;
        width: 100%;
        border: 1px solid #a2a9b1;
        background-color: #f8f9fa;
        box-sizing: border-box
    }

    table.fmbox-system {
        background-color: #f8f9fa
    }

    table.fmbox-warning {
        border: 1px solid #bb7070;
        background-color: #ffdbdb
    }

    table.fmbox-editnotice {
        background-color: transparent
    }

    div.mw-warning-with-logexcerpt,
    div.mw-lag-warn-high,
    div.mw-cascadeprotectedwarning,
    div#mw-protect-cascadeon,
    div.titleblacklist-warning,
    div.locked-warning {
        clear: both;
        margin: 0.2em 0;
        border: 1px solid #bb7070;
        background-color: #ffdbdb;
        padding: 0.25em 0.9em;
        box-sizing: border-box
    }

    html body.mediawiki .mbox-small {
        clear: right;
        float: right;
        margin: 4px 0 4px 1em;
        box-sizing: border-box;
        width: 238px;
        font-size: 88%;
        line-height: 1.25em
    }

    html body.mediawiki .mbox-small-left {
        margin: 4px 1em 4px 0;
        box-sizing: border-box;
        overflow: hidden;
        width: 238px;
        border-collapse: collapse;
        font-size: 88%;
        line-height: 1.25em
    }

    .compact-ambox table .mbox-image,
    .compact-ambox table .mbox-imageright,
    .compact-ambox table .mbox-empty-cell {
        display: none
    }

    .compact-ambox table.ambox {
        border: none;
        border-collapse: collapse;
        background-color: transparent;
        margin: 0 0 0 1.6em !important;
        padding: 0 !important;
        width: auto;
        display: block
    }

    body.mediawiki .compact-ambox table.mbox-small-left {
        font-size: 100%;
        width: auto;
        margin: 0
    }

    .compact-ambox table .mbox-text {
        padding: 0 !important;
        margin: 0 !important
    }

    .compact-ambox table .mbox-text-span {
        display: list-item;
        line-height: 1.5em;
        list-style-type: square;
        list-style-image: url("en.wikipedia.org/w/skins/MonoBook/resources/images/bullet.gif")
    }

    .skin-vector .compact-ambox table .mbox-text-span {
        list-style-type: disc;
        list-style-image: url("en.wikipedia.org/w/skins/Vector/images/bullet-icon.svg");
        list-style-image: url("en.wikipedia.org/w/skins/Vector/images/bullet-icon.png");
    }

    .compact-ambox .hide-when-compact {
        display: none
    }

    .visualhide {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden
    }

    .check-icon a.new {
        display: none;
        speak: none
    }

    .nounderlines a,
    .IPA a:link,
    .IPA a:visited {
        text-decoration: none !important
    }

    div.NavFrame {
        margin: 0;
        padding: 4px;
        border: 1px solid #a2a9b1;
        text-align: center;
        border-collapse: collapse;
        font-size: 95%
    }

    div.NavFrame+div.NavFrame {
        border-top-style: none;
        border-top-style: hidden
    }

    div.NavPic {
        background-color: #fff;
        margin: 0;
        padding: 2px;
        float: left
    }

    div.NavFrame div.NavHead {
        line-height: 1.6em;
        font-weight: bold;
        background-color: #ccf;
        position: relative
    }

    div.NavFrame p,
    div.NavFrame div.NavContent,
    div.NavFrame div.NavContent p {
        font-size: 100%
    }

    div.NavEnd {
        margin: 0;
        padding: 0;
        line-height: 1px;
        clear: both
    }

    a.NavToggle {
        position: absolute;
        top: 0;
        right: 3px;
        font-weight: normal;
        font-size: 90%
    }

    .hatnote {
        font-style: italic
    }

    .hatnote i {
        font-style: normal
    }

    div.hatnote {
        padding-left: 1.6em;
        margin-bottom: 0.5em
    }

    div.hatnote+div.hatnote {
        margin-top: -0.5em
    }

    .listify td {
        display: list-item
    }

    .listify tr {
        display: block
    }

    .listify table {
        display: block
    }

    .geo-default,
    .geo-dms,
    .geo-dec {
        display: inline
    }

    .geo-nondefault,
    .geo-multi-punct {
        display: none
    }

    .longitude,
    .latitude {
        white-space: nowrap
    }

    div.user-block {
        padding: 5px;
        margin-bottom: 0.5em;
        border: 1px solid #a9a9a9;
        background-color: #ffefd5
    }

    .nowrap,
    .nowraplinks a,
    .nowraplinks .selflink {
        white-space: nowrap
    }

    .nowrap pre {
        white-space: pre
    }

    .wrap,
    .wraplinks a {
        white-space: normal
    }

    .template-documentation {
        clear: both;
        margin: 1em 0 0 0;
        border: 1px solid #a2a9b1;
        background-color: #ecfcf4;
        padding: 1em
    }

    #wpUploadDescription {
        height: 13em
    }

    .thumbinner {
        min-width: 100px
    }

    #mw-subcategories,
    #mw-pages,
    #mw-category-media,
    #filehistory,
    #wikiPreview,
    #wikiDiff {
        clear: both
    }

    .wpb .wpb-header {
        display: none
    }

    .wpbs-inner .wpb .wpb-header {
        display: block
    }

    .wpbs-inner .wpb .wpb-header {
        display: table-row
    }

    .wpbs-inner .wpb-outside {
        display: none
    }

    .mw-tag-markers {
        font-style: italic;
        font-size: 90%
    }

    .sysop-show,
    .templateeditor-show,
    .extendedmover-show,
    .patroller-show,
    .extendedconfirmed-show,
    .autoconfirmed-show,
    .user-show {
        display: none
    }

    .ve-ui-mwNoticesPopupTool-item .editnotice-redlink,
    .ve-ui-mwNoticesPopupTool-item .mbox-image,
    .ve-ui-mwNoticesPopupTool-item .mbox-imageright {
        display: none !important
    }

    ul.permissions-errors>li {
        list-style: none none
    }

    ul.permissions-errors {
        margin: 0
    }

    .times-serif,
    span.texhtml {
        font-family: "Nimbus Roman No9 L", "Times New Roman", Times, serif;
        font-size: 118%;
        line-height: 1
    }

    span.texhtml {
        white-space: nowrap
    }

    span.texhtml span.texhtml {
        font-size: 100%
    }

    span.mwe-math-mathml-inline {
        font-size: 118%
    }

    .digits,
    .texhtml {
        -moz-font-feature-settings: "lnum", "tnum", "kern" 0;
        -webkit-font-feature-settings: "lnum", "tnum", "kern" 0;
        font-feature-settings: "lnum", "tnum", "kern" 0;
        font-variant-numeric: lining-nums tabular-nums;
        font-kerning: none
    }

    .mwe-math-fallback-image-display,
    .mwe-math-mathml-display {
        margin-left: 1.6em !important;
        margin-top: 0.6em;
        margin-bottom: 0.6em
    }

    .mwe-math-mathml-display math {
        display: inline
    }

    table#mw-prefixindex-list-table,
    table#mw-prefixindex-nav-table {
        width: 98%
    }

    .portal-column-left {
        float: left;
        width: 50%
    }

    .portal-column-right {
        float: right;
        width: 49%
    }

    .portal-column-left-wide {
        float: left;
        width: 60%
    }

    .portal-column-right-narrow {
        float: right;
        width: 39%
    }

    .portal-column-left-extra-wide {
        float: left;
        width: 70%
    }

    .portal-column-right-extra-narrow {
        float: right;
        width: 29%
    }

    @media only screen and (max-width:800px) {

        .portal-column-left,
        .portal-column-right,
        .portal-column-left-wide,
        .portal-column-right-narrow,
        .portal-column-left-extra-wide,
        .portal-column-right-extra-narrow {
            float: inherit;
            width: inherit
        }
    }

    #bodyContent .letterhead {
        background-image: url("upload.wikimedia.org/wikipedia/commons/e/e0/Tan-page-corner.png");
        background-repeat: no-repeat;
        padding: 2em;
        background-color: #faf9f2
    }

    td .sortkey,
    th .sortkey {
        display: none;
        speak: none
    }

    .inputbox-hidecheckboxes form .inputbox-element,
    .inputbox-hidecheckboxes .mw-ui-checkbox {
        display: none !important
    }

    .k-player .k-attribution {
        visibility: hidden
    }

    .PopUpMediaTransform a .play-btn-large {
        margin: 0;
        top: auto;
        right: auto;
        bottom: 0;
        left: 0
    }

    .flaggedrevs_draft_synced,
    .flaggedrevs_stable_synced {
        display: none
    }

    .bordered-images img {
        border: solid #ddd 1px
    }

    @media screen {
        #content .gallerybox div.thumb {
            background-color: #f8f9fa
        }

        .gallerybox .thumb img {
            background: #fff url("upload.wikimedia.org/wikipedia/commons/5/5d/Checker-16x16.png") repeat
        }

        .ns-0 .gallerybox .thumb img,
        .ns-2 .gallerybox .thumb img,
        .ns-100 .gallerybox .thumb img,
        .nochecker .gallerybox .thumb img {
            background-image: none
        }
    }

    @media screen {
        #siteSub {
            display: block
        }
    }

    .page-Main_Page #deleteconfirm,
    .page-Main_Page #t-cite,
    .page-Main_Page #footer-info-lastmod,
    .action-view.page-Main_Page #siteSub,
    .action-view.page-Main_Page #contentSub,
    .action-view.page-Main_Page .firstHeading {
        display: none !important
    }

    #coordinates {
        position: absolute;
        top: 0;
        right: 0;
        float: right;
        margin: 0;
        padding: 0;
        line-height: 1.5em;
        text-align: right;
        text-indent: 0;
        font-size: 85%;
        text-transform: none;
        white-space: nowrap
    }

    .ve-ce-surface-enabled #coordinates {
        margin-right: 2em;
        margin-top: -1em
    }

    .mw-indicator #coordinates {
        position: absolute;
        top: 3em;
        right: 0;
        line-height: 1.6;
        text-align: right;
        font-size: 92%;
        white-space: nowrap
    }

    div.flaggedrevs_short {
        position: absolute;
        top: -3em;
        right: 100px;
        z-index: 1
    }

    #siteSub {
        font-size: 92%
    }

    .mw-body .mw-indicators {
        padding-top: 0.4em
    }

    @media print {

        .ns--1 .ambox,
        .ns-0 .ambox,
        .ns--1 .navbox,
        .ns-0 .navbox,
        .ns--1 .vertical-navbox,
        .ns-0 .vertical-navbox,
        .ns--1 .infobox.sisterproject,
        .ns-0 .infobox.sisterproject,
        .ns--1 .hatnote,
        .ns-0 .hatnote,
        .ns--1 .dablink,
        .ns-0 .dablink,
        .ns--1 .metadata,
        .ns-0 .metadata,
        .sistersitebox,
        .editlink,
        .navbar,
        a.NavToggle,
        span.collapseButton,
        span.mw-collapsible-toggle,
        th .sortkey,
        td .sortkey,
        #mw-revision-nav {
            display: none !important
        }

        .nourlexpansion a.external.text:after,
        .nourlexpansion a.external.autonumber:after {
            display: none !important
        }

        table.collapsible tr,
        div.NavPic,
        div.NavContent {
            display: block !important
        }

        table.collapsible tr {
            display: table-row !important
        }

        .mw-parser-output .mw-collapsed .mw-collapsible-content {
            display: block !important
        }

        .mw-parser-output table.mw-collapsed>*>tr {
            display: table-row !important
        }

        .mw-parser-output ol.mw-collapsed>li,
        .mw-parser-output ul.mw-collapsed>li {
            display: list-item !important
        }

        #firstHeading {
            margin: 0
        }

        #content a.external.text:after,
        #content a.external.autonumber:after {
            word-wrap: break-word
        }

        .infobox {
            border: solid 1px #aaa;
            background-color: #fff;
            border-spacing: 0;
            border-collapse: collapse;
            width: 180pt !important
        }

        .infobox>*>tr>td,
        .infobox>*>tr>th {
            padding: 2px 5px;
            border-bottom: 1px solid #EAECF0
        }

        .infobox a,
        .infobox>*>tr:last-child>th,
        .infobox>*>tr:last-child>td {
            border: 0
        }

        .refbegin a,
        .references a,
        .reference a {
            color: black !important
        }

        sup,
        sub {
            line-height: 1
        }

        sup.reference {
            font-family: sans-serif
        }

        .reference a {
            border-bottom: 0
        }

        ol.references,
        div.reflist,
        div.refbegin,
        cite * {
            font-size: inherit !important
        }

        .refbegin li,
        .references li {
            color: #666;
            line-height: 14pt
        }

        .printfooter {
            clear: both
        }
    }
`;

export const LoadingWrapper = styled.div`
    margin: 20px;
`;