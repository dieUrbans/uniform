import { d as doc, N as NAMESPACE, p as promiseResolve, b as bootstrapLazy } from './index-ac0beabc.js';
import './global-39c1850f.js';

/*
 Stencil Client Patch Browser v2.14.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    // @ts-ignore
    const scriptElm = Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        ;
    const importMeta = import.meta.url;
    const opts = scriptElm['data-opts'] || {} ;
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["u-formgen",[[1,"u-formgen",{"layout":[1],"fields":[16],"buttons":[16],"returnValue":[32],"steps":[32],"stepper":[32],"rows":[32],"cols":[32],"gap":[32]}]]],["u-layout",[[1,"u-layout",{"mode":[32],"showOption":[64],"closeOption":[64]},[[9,"resize","onWindowResize"]]]]],["u-alert",[[1,"u-alert",{"name":[1],"closeText":[1,"close-text"],"open":[32],"title":[32],"content":[32]},[[16,"show-alert","openDialog"]]]]],["u-filepicker",[[1,"u-filepicker",{"size":[1],"label":[1],"fileEnding":[1,"file-ending"],"multiple":[4],"noFile":[1,"no-file"],"filePlural":[1,"file-plural"],"file":[32],"fileText":[32]}]]],["u-dialog",[[33,"u-dialog",{"name":[1],"open":[32],"title":[32],"content":[32],"buttons":[32]},[[16,"open-dialog","openDialog"]]]]],["u-floatingmenu",[[1,"u-floatingmenu",{"fixed":[4],"menu":[16],"drag":[32],"dragoffset":[32],"isOpen":[32],"selected":[32]}]]],["u-pagination",[[1,"u-pagination",{"pages":[2],"showPages":[2,"show-pages"],"showButtons":[4,"show-buttons"],"showLastAndFirstPage":[4,"show-last-and-first-page"],"currentPage":[32],"goToPage":[64]}]]],["u-barcodescanner",[[1,"u-barcodescanner",{"library":[8],"scannerActive":[32],"getPermission":[64],"prepareCamera":[64],"startScanner":[64],"stopScanner":[64]}]]],["u-breadcrumb",[[1,"u-breadcrumb",{"items":[16],"seperator":[1]}]]],["u-editor",[[1,"u-editor",{"tools":[16],"edits":[32]}]]],["u-select",[[1,"u-select",{"options":[16],"searchable":[4],"multiple":[4],"value":[1032],"label":[1],"size":[1],"inputType":[1,"input-type"],"min":[1],"max":[1],"step":[1],"validate":[4],"design":[1],"errorMsg":[1,"error-msg"],"doFocus":[1028,"do-focus"],"borderStyle":[1,"border-style"],"required":[4],"disabled":[4],"readonly":[4],"autoComplete":[1,"auto-complete"],"autoCorrect":[1,"auto-correct"],"autoCapitalize":[1,"auto-capitalize"],"spellCheck":[4,"spell-check"],"pattern":[1],"hovered":[32],"focus":[32],"index":[32],"filteredOptions":[32],"searchValue":[32],"position":[32],"selected":[32],"shortenSelected":[32],"shortenBreakpoint":[32],"setFocus":[64],"setBlur":[64]}]]],["u-tablegen",[[1,"u-tablegen",{"resizeable":[4],"selectable":[4],"fixedHeader":[4,"fixed-header"],"observe":[4],"heading":[16],"data":[1040],"sort":[32],"displayedData":[32],"selected":[32],"currentColWidth":[32],"nextColWidth":[32],"startOffset":[32],"currentCol":[32],"nextCol":[32],"select":[64],"unselect":[64]}]]],["u-card",[[1,"u-card",{"width":[1],"color":[1]}]]],["u-cardbody",[[1,"u-cardbody"]]],["u-cardfooter",[[1,"u-cardfooter",{"overlap":[4]}]]],["u-cardheader",[[1,"u-cardheader",{"overlap":[4]}]]],["u-cardimage",[[1,"u-cardimage",{"src":[1],"height":[1],"width":[1]}]]],["u-cardselect",[[1,"u-cardselect"]]],["u-chip",[[1,"u-chip",{"design":[1],"size":[1],"label":[1],"bold":[4],"clickable":[4]}]]],["u-collapsible",[[1,"u-collapsible",{"label":[1],"size":[1],"isOpen":[32],"closeCollapsible":[64],"openCollapsible":[64]}]]],["u-collapsible-group",[[1,"u-collapsible-group",{"onlyOneOpen":[4,"only-one-open"]}]]],["u-colorpicker",[[1,"u-colorpicker"]]],["u-datepicker",[[1,"u-datepicker"]]],["u-datetimepicker",[[1,"u-datetimepicker"]]],["u-floatingbutton",[[1,"u-floatingbutton",{"color":[1],"position":[1]}]]],["u-form",[[6,"u-form"]]],["u-headline",[[6,"u-headline",{"level":[1]}]]],["u-icon",[[6,"u-icon",{"borderRadius":[1,"border-radius"],"flat":[4],"outline":[4],"design":[1],"udpateSvgColor":[4,"udpate-svg-color"]}]]],["u-input",[[1,"u-input",{"value":[1032],"label":[1],"size":[1],"inputType":[1,"input-type"],"min":[1],"max":[1],"step":[1],"validate":[4],"design":[1],"showSlot":[1,"show-slot"],"errorMsg":[1,"error-msg"],"doFocus":[1028,"do-focus"],"borderStyle":[1,"border-style"],"required":[4],"disabled":[4],"readonly":[4],"autoComplete":[1,"auto-complete"],"autoCorrect":[1,"auto-correct"],"autoCapitalize":[1,"auto-capitalize"],"spellCheck":[4,"spell-check"],"pattern":[1],"hovered":[32],"focus":[32],"setFocus":[64],"setBlur":[64]}]]],["u-item",[[1,"u-item"]]],["u-label",[[1,"u-label"]]],["u-list",[[4,"u-list",{"alignment":[1]}]]],["u-loader",[[1,"u-loader"]]],["u-menu",[[1,"u-menu",{"axis":[1],"width":[1],"padding":[4],"items":[16]}]]],["u-monthpicker",[[1,"u-monthpicker"]]],["u-navbar",[[1,"u-navbar",{"position":[1],"fixed":[4]}]]],["u-notification",[[1,"u-notification",{"position":[1],"type":[32],"notifications":[32],"intervalls":[32],"newNotification":[32],"show":[64],"success":[64],"error":[64],"warning":[64]},[[16,"show-toast","showToast"],[16,"clear-toast","clearToast"]]]]],["u-observer",[[1,"u-observer",{"isVisible":[32]}]]],["u-popup",[[1,"u-popup",{"axis":[1],"visible":[1028],"position":[32],"alignment":[32]}]]],["u-progress",[[1,"u-progress",{"max":[2],"value":[2],"height":[1],"borderless":[4],"showPercentage":[4,"show-percentage"],"progressResult":[32]}]]],["u-radiogroup",[[1,"u-radiogroup",{"options":[16],"value":[1032],"alignment":[1],"label":[1],"hovered":[32]}]]],["u-slider",[[1,"u-slider"]]],["u-tabs",[[1,"u-tabs"]]],["u-terms",[[1,"u-terms"]]],["u-text",[[1,"u-text",{"size":[1],"weight":[1],"transform":[1],"color":[1]}]]],["u-timepicker",[[1,"u-timepicker"]]],["u-toggle",[[1,"u-toggle"]]],["u-tooltip",[[1,"u-tooltip",{"text":[1],"axis":[1],"alignment":[1],"trigger":[1],"content":[4],"visible":[32],"position":[32]}]]],["u-touch",[[1,"u-touch",{"swipeDir":[32],"distance":[32],"start":[32],"startTime":[32]},[[17,"touchstart","touchstart"],[17,"mousedown","mousedown"],[17,"touchend","touchend"],[17,"mouseup","mouseup"]]]]],["u-weekpicker",[[1,"u-weekpicker"]]],["u-stepper",[[1,"u-stepper",{"steps":[2],"allData":[4,"all-data"],"nextStepAvailable":[4,"next-step-available"],"prevLabel":[1,"prev-label"],"nextLabel":[1,"next-label"],"submitLabel":[1,"submit-label"],"alignment":[1],"currentStep":[32]}]]],["u-col",[[1,"u-col",{"align":[1],"justify":[1],"wrap":[1],"gap":[1],"padding":[1],"size":[2],"area":[1]}]]],["u-link",[[1,"u-link",{"link":[1],"target":[1],"secondary":[4]}]]],["u-paragraph",[[1,"u-paragraph",{"color":[1],"backgroundColor":[1,"background-color"],"hyphens":[1],"textAlign":[1,"text-align"],"textAlignLast":[1,"text-align-last"]}]]],["u-textarea",[[1,"u-textarea",{"disabled":[4],"readonly":[4],"label":[1],"required":[4],"size":[1],"design":[1],"resize":[1],"value":[1025],"cols":[2],"rows":[2],"focused":[32]}]]],["u-grid",[[1,"u-grid",{"columns":[2],"rows":[2],"area":[16],"gap":[1],"height":[1],"width":[1]}]]],["u-desktoplayout_2",[[1,"u-desktoplayout"],[1,"u-mobilelayout",{"showOptions":[1028,"show-options"],"sideWidth":[1,"side-width"],"showMenu":[64],"showMain":[64],"showOption":[64],"activateOption":[64],"disableOption":[64]}]]],["u-group",[[1,"u-group",{"direction":[1]}]]],["u-row",[[6,"u-row",{"justify":[1],"align":[1],"wrap":[1],"gap":[1],"padding":[1],"width":[1]}]]],["u-menuitem",[[2,"u-menuitem",{"item":[16],"active":[1028],"depthLevel":[2,"depth-level"]}]]],["u-submenu",[[2,"u-submenu",{"subMenu":[16],"active":[1028],"depthLevel":[2,"depth-level"]}]]],["u-modal",[[33,"u-modal",{"name":[1],"closeOnClick":[4,"close-on-click"],"topRightClose":[4,"top-right-close"],"moveable":[4],"resetPosition":[4,"reset-position"],"resizeable":[4],"mode":[513],"minWidth":[1,"min-width"],"minHeight":[1,"min-height"],"maxHeight":[1,"max-height"],"maxWidth":[1,"max-width"],"isOpen":[32],"params":[32],"drag":[32],"dragoffset":[32],"showModal":[64],"closeModal":[64]},[[16,"show-modal","showModalHandler"],[16,"close-modal","closeModalHandler"],[0,"beforeOpen","setParams"]]]]],["u-checkbox",[[1,"u-checkbox",{"label":[1],"checked":[1028],"size":[1],"disabled":[4],"tristate":[4],"set":[64]}]]],["u-table_5",[[1,"u-tablerow"],[1,"u-table",{"borderStyle":[1,"border-style"],"borderSpacing":[1,"border-spacing"]}],[1,"u-tablefoot"],[1,"u-tablehead"],[1,"u-tablecell",{"checkbox":[4],"data":[1]}]]],["u-button",[[1,"u-button",{"design":[1],"outline":[4],"size":[1],"disabled":[4],"flat":[4],"type":[1],"rounded":[1]}]]]], options);
});
