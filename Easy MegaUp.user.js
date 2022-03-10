// ==UserScript==
// @name         Easy MegaUp
// @namespace    http://tampermonkey.net/
// @version      1.01
// @description  Script to auto download files from Megaup.net
// @author       Re'Jaad
// @match        *://megaup.net/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
// © Copyright 2022 Re'Jaad

//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at

//http://www.apache.org/licenses/LICENSE-2.0

//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.

(function() {
    'use strict';

    window.addEventListener("load", function () {
        setTimeout(() => {
        const n1 = document.querySelector("#idurl")
        const n2 = document.querySelector("#idfilename")
        const n3 = document.querySelector("#idfilesize")
        const n4 = n3.value
        const rm = n2.value
        const plus = n4.replaceAll(' ', '+')


        const urlId = n1.value
        const rms = rm.replaceAll(' ', '+')
        const filesizeId = plus

            setTimeout(() => {
                if (n1) {
                    console.log(urlId)
                    console.log(`https://download.megaup.net/?idurl=${encodeURIComponent(urlId)}&idfilename=${(rms)}&idfilesize=${(filesizeId)}`);
                    window.location.href = (`https://download.megaup.net/?idurl=${encodeURIComponent(urlId)}&idfilename=${(rms)}&idfilesize=${(filesizeId)}`)
                }
            }, 3000);
        }, 3000);
        }, false)
})();
