import { h, p as proxyCustomElement, H, c as createEvent } from './index.js';

const WarningIcon = ({ class: className }) => (h("svg", { class: `${className || ''}`, viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", "data-slot": "icon" },
    h("path", { "fill-rule": "evenodd", d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z", "clip-rule": "evenodd" })));
const ErrorIcon = ({ class: className }) => (h("svg", { class: `${className || ''}`, viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", "data-slot": "icon" },
    h("path", { "fill-rule": "evenodd", d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z", "clip-rule": "evenodd" })));
const SuccessIcon = ({ class: className }) => (h("svg", { class: `${className || ''}`, viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", "data-slot": "icon" },
    h("path", { "fill-rule": "evenodd", d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z", "clip-rule": "evenodd" })));
const InfoIcon = ({ class: className }) => (h("svg", { class: `${className || ''}`, viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", "data-slot": "icon" },
    h("path", { "fill-rule": "evenodd", d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z", "clip-rule": "evenodd" })));
const CloseIcon = ({ class: className }) => (h("svg", { class: `${className || ''}`, viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", "data-slot": "icon" },
    h("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })));

const jgroupAppMessageCss = "/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,::backdrop,:after,:before{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:host,:root{--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-400:oklch(70.4% .191 22.216);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-400:oklch(85.2% .199 91.936);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-400:oklch(79.2% .209 151.711);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-neutral-200:oklch(92.2% 0 0);--color-neutral-300:oklch(87% 0 0);--color-neutral-400:oklch(70.8% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-800:oklch(26.9% 0 0);--font-weight-medium:500;--radius-md:.375rem;--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--spacing:.25rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,::backdrop,:after,:before{border:0 solid;box-sizing:border-box;margin:0;padding:0}::file-selector-button{appearance:button;background-color:#0000;border:0 solid;border-radius:0;box-sizing:border-box;color:inherit;font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;margin:0;margin-inline-end:4px;opacity:1;padding:0}:host,html{-webkit-text-size-adjust:100%;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);tab-size:4;-webkit-tap-highlight-color:transparent;line-height:1.5}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-size:1em;font-variation-settings:var(--default-mono-font-variation-settings,normal)}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}menu,ol,ul{list-style:none}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}button,input,optgroup,select,textarea{background-color:#0000;border-radius:0;color:inherit;font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;opacity:1}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:currentColor;color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex;padding-block:0}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.container{width:100%}.-mx-1\\.5{margin-inline:calc(var(--spacing)*-1.5)}.-my-1\\.5{margin-block:calc(var(--spacing)*-1.5)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-auto{margin-left:auto}.flex{display:flex}.inline-flex{display:inline-flex}.size-5{height:calc(var(--spacing)*5);width:calc(var(--spacing)*5)}.size-8{height:calc(var(--spacing)*8);width:calc(var(--spacing)*8)}.shrink-0{flex-shrink:0}.rounded-md{border-radius:var(--radius-md)}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-solid{--tw-border-style:solid;border-style:solid}.border-blue-400{border-color:var(--color-blue-400)}.border-green-400{border-color:var(--color-green-400)}.border-red-400{border-color:var(--color-red-400)}.border-yellow-400{border-color:var(--color-yellow-400)}.bg-blue-50{background-color:var(--color-blue-50)}.bg-green-50{background-color:var(--color-green-50)}.bg-neutral-800{background-color:var(--color-neutral-800)}.bg-red-50{background-color:var(--color-red-50)}.bg-yellow-50{background-color:var(--color-yellow-50)}.p-1\\.5{padding:calc(var(--spacing)*1.5)}.p-4{padding:calc(var(--spacing)*4)}.pl-3{padding-left:calc(var(--spacing)*3)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.text-blue-400{color:var(--color-blue-400)}.text-blue-500{color:var(--color-blue-500)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-green-400{color:var(--color-green-400)}.text-green-500{color:var(--color-green-500)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-neutral-200{color:var(--color-neutral-200)}.text-neutral-300{color:var(--color-neutral-300)}.text-neutral-400{color:var(--color-neutral-400)}.text-red-400{color:var(--color-red-400)}.text-red-500{color:var(--color-red-500)}.text-red-700{color:var(--color-red-700)}.text-red-800{color:var(--color-red-800)}.text-yellow-400{color:var(--color-yellow-400)}.text-yellow-500{color:var(--color-yellow-500)}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-800{color:var(--color-yellow-800)}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a)}.focus\\:ring-2:focus,.shadow{box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor)}.focus\\:ring-blue-600:focus{--tw-ring-color:var(--color-blue-600)}.focus\\:ring-green-600:focus{--tw-ring-color:var(--color-green-600)}.focus\\:ring-neutral-500:focus{--tw-ring-color:var(--color-neutral-500)}.focus\\:ring-red-600:focus{--tw-ring-color:var(--color-red-600)}.focus\\:ring-yellow-600:focus{--tw-ring-color:var(--color-yellow-600)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.grid{display:grid}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.gap-4{gap:calc(var(--spacing)*4)}} /*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{}@layer base{}@layer components; /*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{}@layer base{}@layer components;@layer utilities{} /*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,::backdrop,:after,:before{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:host,:root{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-400:oklch(70.4% .191 22.216);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-400:oklch(85.2% .199 91.936);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-400:oklch(79.2% .209 151.711);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-neutral-200:oklch(92.2% 0 0);--color-neutral-300:oklch(87% 0 0);--color-neutral-400:oklch(70.8% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-800:oklch(26.9% 0 0);--spacing:.25rem;--font-weight-medium:500;--radius-md:.375rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{}@layer components;@layer utilities{.focus\\:ring-2:focus,.shadow{box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}:root{--ck-color-mention-background:#9900301a;--ck-color-mention-text:#990030;--ck-highlight-marker-yellow:#fdfd77;--ck-highlight-marker-green:#62f962;--ck-highlight-marker-pink:#fc7899;--ck-highlight-marker-blue:#72ccfd;--ck-highlight-pen-red:#e71313;--ck-highlight-pen-green:#128a00;--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2);--ck-todo-list-checkmark-size:16px;--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333}.ck-content .mention{background:var(--ck-color-mention-background);color:var(--ck-color-mention-text)}.ck-content code{background-color:#c7c7c74d;border-radius:2px;padding:.15em}.ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}.ck-content pre{background:#c7c7c74d;border:1px solid #c4c4c4;border-radius:2px;color:#353535;direction:ltr;font-style:normal;min-width:200px;padding:1em;tab-size:4;text-align:left;white-space:pre-wrap}.ck-content pre code{background:unset;border-radius:0;padding:0}.ck-content .text-tiny{font-size:.7em}.ck-content .text-small{font-size:.85em}.ck-content .text-big{font-size:1.4em}.ck-content .text-huge{font-size:1.8em}.ck-content .marker-yellow{background-color:var(--ck-highlight-marker-yellow)}.ck-content .marker-green{background-color:var(--ck-highlight-marker-green)}.ck-content .marker-pink{background-color:var(--ck-highlight-marker-pink)}.ck-content .marker-blue{background-color:var(--ck-highlight-marker-blue)}.ck-content .pen-red{background-color:#0000;color:var(--ck-highlight-pen-red)}.ck-content .pen-green{background-color:#0000;color:var(--ck-highlight-pen-green)}.ck-content hr{background:#dedede;border:0;height:4px;margin:15px 0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck-content .image.image-style-block-align-left,.ck-content .image.image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image.image-style-align-left,.ck-content .image.image-style-align-right{clear:none}.ck-content .image.image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image.image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image.image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image.image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image.image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content p+.image.image-style-align-left,.ck-content p+.image.image-style-align-right,.ck-content p+.image.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:\"\";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:#0000;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8)calc(var(--ck-todo-list-checkmark-size)/8)0;box-sizing:content-box;content:\"\";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}.ck-content .page-break{align-items:center;clear:both;display:flex;justify-content:center;padding:5px 0;position:relative}.ck-content .page-break:after{border-bottom:2px dashed #c4c4c4;content:\"\";position:absolute;width:100%}.ck-content .page-break__label{background:#fff;border:1px solid #c4c4c4;border-radius:2px;box-shadow:2px 2px 1px #00000026;color:#333;display:block;font-family:Helvetica,Arial,Tahoma,Verdana,sans-serif;font-size:.75em;font-weight:700;padding:.3em .6em;position:relative;text-transform:uppercase;-webkit-user-select:none;user-select:none;z-index:1}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-content figure.table:not(.layout-table){display:table}.ck-content figure.table:not(.layout-table)>table{height:100%;width:100%}.ck-content figure.table:not(.layout-table),.ck-content table.table:not(.layout-table){margin:.9em auto}.ck-content figure.table:not(.layout-table)>table,.ck-content table.table:not(.layout-table){border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0}.ck-content figure.table:not(.layout-table)>table>tbody>tr>th,.ck-content figure.table:not(.layout-table)>table>thead>tr>th,.ck-content table.table:not(.layout-table)>tbody>tr>th,.ck-content table.table:not(.layout-table)>thead>tr>th{background:#0000000d;font-weight:700}.ck-content figure.table:not(.layout-table)>table>tbody>tr>td,.ck-content figure.table:not(.layout-table)>table>tbody>tr>th,.ck-content figure.table:not(.layout-table)>table>thead>tr>td,.ck-content figure.table:not(.layout-table)>table>thead>tr>th,.ck-content table.table:not(.layout-table)>tbody>tr>td,.ck-content table.table:not(.layout-table)>tbody>tr>th,.ck-content table.table:not(.layout-table)>thead>tr>td,.ck-content table.table:not(.layout-table)>thead>tr>th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content figure.table.layout-table,.ck-content table.table.layout-table{margin-bottom:0;margin-top:0}.ck-content figure.table.layout-table>table,.ck-content table.table.layout-table{border-spacing:0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word}:host{display:block}.ck-content a{color:#007bff;text-decoration:none}.ck-content a:hover{color:#0056b3;text-decoration:underline}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}@media (hover:hover){.hover\\:bg-blue-100:hover{background-color:var(--color-blue-100)}.hover\\:bg-green-100:hover{background-color:var(--color-green-100)}.hover\\:bg-neutral-700:hover{background-color:var(--color-neutral-700)}.hover\\:bg-red-100:hover{background-color:var(--color-red-100)}.hover\\:bg-yellow-100:hover{background-color:var(--color-yellow-100)}}@media (forced-colors:active){.ck-content .image>figcaption,.ck-content .table>figcaption{background-color:unset;color:unset}}@media (prefers-reduced-motion:reduce){.ck-content .todo-list .todo-list__label>input:before{transition:none}}@media print{.ck-content .page-break{padding:0}.ck-content .page-break:after{display:none}.ck-content :has(+.page-break){margin-bottom:0}.ck-content figure.table>table{height:auto}}";

const JgroupAppMessage = /*@__PURE__*/ proxyCustomElement(class JgroupAppMessage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.dismiss = createEvent(this, "dismiss");
    }
    /**
     * The heading of the message.
     */
    heading;
    /**
     * The message to display.
     */
    message;
    /**
     * The type of message to display.
     */
    type = 'info';
    /**
     * The theme of the message.
     */
    theme = 'light';
    /**
     * Event emitted when the message is dismissed.
     */
    dismiss;
    get classes() {
        const lightTheme = {
            warning: {
                container: 'border-yellow-400 bg-yellow-50 text-yellow-800',
                icon: 'text-yellow-400',
                heading: 'text-yellow-800',
                message: 'text-yellow-700',
                button: 'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600',
            },
            error: {
                container: 'border-red-400 bg-red-50 text-red-800',
                icon: 'text-red-400',
                heading: 'text-red-800',
                message: 'text-red-700',
                button: 'bg-red-50 text-red-500 hover:bg-red-100 focus:ring-red-600',
            },
            info: {
                container: 'border-blue-400 bg-blue-50 text-blue-800',
                icon: 'text-blue-400',
                heading: 'text-blue-800',
                message: 'text-blue-700',
                button: 'bg-blue-50 text-blue-500 hover:bg-blue-100 focus:ring-blue-600',
            },
            success: {
                container: 'border-green-400 bg-green-50 text-green-800',
                icon: 'text-green-400',
                heading: 'text-green-800',
                message: 'text-green-700',
                button: 'bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-600',
            },
        };
        const darkTheme = {
            warning: {
                container: 'border-yellow-400 bg-neutral-800 text-neutral-200',
                icon: 'text-yellow-400',
                heading: 'text-neutral-200',
                message: 'text-neutral-300',
                button: 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 focus:ring-neutral-500',
            },
            error: {
                container: 'border-red-400 bg-neutral-800 text-neutral-200',
                icon: 'text-red-400',
                heading: 'text-neutral-200',
                message: 'text-neutral-300',
                button: 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 focus:ring-neutral-500',
            },
            info: {
                container: 'border-blue-400 bg-neutral-800 text-neutral-200',
                icon: 'text-blue-400',
                heading: 'text-neutral-200',
                message: 'text-neutral-300',
                button: 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 focus:ring-neutral-500',
            },
            success: {
                container: 'border-green-400 bg-neutral-800 text-neutral-200',
                icon: 'text-green-400',
                heading: 'text-neutral-200',
                message: 'text-neutral-300',
                button: 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 focus:ring-neutral-500',
            },
        };
        const themeClasses = this.theme === 'dark' ? darkTheme : lightTheme;
        switch (this.type) {
            case 'warning':
                return themeClasses.warning;
            case 'error':
                return themeClasses.error;
            case 'info':
                return themeClasses.info;
            case 'success':
                return themeClasses.success;
            default:
                return {
                    container: '',
                    icon: '',
                    heading: '',
                    message: '',
                    button: '',
                };
        }
    }
    renderIcon(className) {
        switch (this.type) {
            case 'warning':
                return h(WarningIcon, { class: `${className} ${this.classes.icon}` });
            case 'error':
                return h(ErrorIcon, { class: `${className} ${this.classes.icon}` });
            case 'info':
                return h(InfoIcon, { class: `${className} ${this.classes.icon}` });
            case 'success':
                return h(SuccessIcon, { class: `${className} ${this.classes.icon}` });
            default:
                return null;
        }
    }
    dismissMessage() {
        this.dismiss.emit();
    }
    render() {
        return (h("div", { key: '40279e3d6d68a186793b43e846cc330b4c43a21a', class: `border-l-4 border-solid p-4 ${this.classes.container}` }, h("div", { key: '030bc589de7290ae691a1118b7e95b9b9d305ae1', class: "flex" }, h("div", { key: '4c91fa2dace0b082065a12129e10c6e72ad70969', class: "shrink-0" }, this.renderIcon('size-8')), h("div", { key: '7ff53eb4a101b127b6fd115b3781ac285fc9ab16', class: "ml-3 mt-1" }, h("h3", { key: '560ee25ea7dd2efdd8221ffa4ecf476d91f8b4a4', class: `text-md font-medium ${this.classes.heading}` }, this.heading), h("div", { key: '285c12dae61a06d3f694e4eda7d676e55d77033b', class: `mt-2 text-md ck-content ${this.classes.message}`, innerHTML: this.message })), h("div", { key: 'd80a640734061fb6178b930feb7fa5c0ac399905', class: "ml-auto pl-3" }, h("div", { key: 'd43f884f49f04390f2ef3dd505d3cbaf71ce9d8c', class: "-mx-1.5 -my-1.5" }, h("button", { key: '06b8640c4d40d851dabbcd11ece191e2cd30cbc5', type: "button", class: `inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${this.classes.button}`, onClick: () => this.dismissMessage() }, h("span", { key: 'f02322fd8405516f38eae09794e56d8129a8f99b', class: "sr-only" }, "Dismiss"), h(CloseIcon, { key: 'c6853dca2ff4b1169d0bc3ca124fb782b040d73a', class: "size-5" })))))));
    }
    static get style() { return jgroupAppMessageCss; }
}, [1, "jgroup-app-message", {
        "heading": [1],
        "message": [1],
        "type": [1],
        "theme": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["jgroup-app-message"];
    components.forEach(tagName => { switch (tagName) {
        case "jgroup-app-message":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, JgroupAppMessage);
            }
            break;
    } });
}
defineCustomElement();

export { JgroupAppMessage as J, defineCustomElement as d };
//# sourceMappingURL=p-BoT9vgRx.js.map

//# sourceMappingURL=p-BoT9vgRx.js.map