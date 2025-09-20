import { h } from "@stencil/core";
import { gsap } from "gsap";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(MotionPathHelper, MotionPathPlugin, MorphSVGPlugin, ScrambleTextPlugin, ScrollTrigger, ScrollToPlugin, SplitText);
export class AppRoot {
    constructor() {
        this.timeline = gsap.timeline();
        this.journeyViewed = 'false';
    }
    fadeLine(number) {
        if (number === 1) {
            this.timeline.to(this.line1, { duration: 1, delay: 2, opacity: 0.3, scale: 0.8, translateY: -30, ease: "expoScale", onComplete: () => this.hideLine(1) });
        }
        else {
            this.timeline.to(this.line2, { duration: 1, delay: 0, opacity: 0.6, scale: 0.9, translateY: -15, ease: "expoScale", onComplete: () => this.hideLine(2) });
        }
    }
    hideLine(number) {
        if (number === 1) {
            gsap.to(this.line1, { duration: 1, delay: 7, opacity: 0, ease: "expoScale" });
        }
        else {
            gsap.to(this.line2, { duration: 1, delay: 3, opacity: 0, });
        }
    }
    hideJourney() {
        this.intro.remove();
        this.circles.remove();
    }
    resetThisPlace() {
        localStorage.setItem('journeyViewed', 'false');
        window.location.reload();
    }
    launchCV() {
        localStorage.setItem('journeyViewed', 'true');
        gsap.to(this.line3, { duration: 2, delay: 0.2, y: -100, opacity: 0, scale: 0, ease: "expoScale" });
        gsap.to(this.look, { duration: 2, delay: 0.5, opacity: 0, y: 100, ease: "expoScale" });
        gsap.to(this.circle1, { duration: 4, delay: 1, scale: 6, opacity: 0, ease: "expoScale", });
        gsap.to(this.circle2, { duration: 4, delay: 0.9, scale: 5, opacity: 0, ease: "expoScale", });
        gsap.to(this.circle3, { duration: 4, delay: 0.8, scale: 4, opacity: 0, ease: "expoScale", });
        gsap.to(this.circle4, { duration: 4, delay: 0.7, scale: 3, opacity: 0, ease: "expoScale", onComplete: () => this.hideJourney() });
        gsap.to(this.logo, { duration: 2, delay: 1, opacity: 1, ease: "slow" });
        gsap.to(this.cvbg, { duration: 2, delay: 2, opacity: 1, ease: "slow" });
        gsap.to(this.about, { duration: 2, delay: 3, y: 0, opacity: 1, ease: "expoScale" });
        gsap.to(this.about, { duration: 2, delay: 5, borderRadius: 30, boxShadow: "20px 20px 60px #9e9e9e, -20px -20px 60px #bebebe", border: "0px solid transparent", backgroundColor: "rgba(255,255,255,0.5)", backdropFilter: "blur(4px)", ease: "expoScale", onComplete: () => this.playBiography() });
        gsap.to(this.skills, { duration: 2, delay: 3, y: 0, opacity: 1, ease: "expoScale" });
        gsap.to(this.skills, { duration: 2, delay: 5, borderRadius: 30, boxShadow: "20px 20px 60px #9e9e9e, -20px -20px 60px #bebebe", border: "0px solid transparent", backgroundColor: "rgba(255,255,255,0.5)", backdropFilter: "blur(4px)", ease: "expoScale" });
        gsap.to(this.history, { duration: 1.2, delay: 6.4, y: 0, opacity: 1, ease: "expoScale", onComplete: () => this.playResponsibilities() });
        gsap.to(this.socials, { duration: 1.4, delay: 7.4, y: 0, ease: "elastic" });
        gsap.to(this.skillstab1, { duration: 1.4, delay: 9, y: 0, ease: "elastic" });
        gsap.to(this.skillstab2, { duration: 1.4, delay: 9.2, y: 0, ease: "elastic" });
        gsap.to(this.skillstab3, { duration: 1.4, delay: 9.4, y: 0, ease: "elastic" });
        gsap.to(this.footer, { duration: 2, delay: 1, color: "#141414", ease: "slow" });
    }
    playBiography() {
        let aboutitem = this.el.shadowRoot.querySelectorAll('#about p');
        aboutitem.forEach(item => {
            gsap.to(item, { duration: 1.2, delay: (item.attributes['data-id'].nodeValue / 4), x: 0, opacity: 1, ease: "expoScale" });
        });
    }
    playResponsibilities() {
        let descriptionitem = this.el.shadowRoot.querySelectorAll('#description p');
        descriptionitem.forEach(item => {
            gsap.to(item, { duration: 1.2, delay: (item.attributes['data-id'].nodeValue / 4), y: 0, opacity: 1, ease: "expoScale" });
        });
        let responsibilityitem = this.el.shadowRoot.querySelectorAll('#responsibilities  p');
        responsibilityitem.forEach(item => {
            gsap.to(item, { duration: 0.8, delay: (item.attributes['data-id'].nodeValue / 3), scale: 1, ease: "elastic.out(1,0.6)" });
        });
        gsap.to(this.historyh3, { duration: 1.2, delay: 0.6, opacity: 1, ease: "expoScale" });
        gsap.to(this.historyh5, { duration: 1.2, delay: 1, opacity: 1, ease: "expoScale" });
        gsap.to(this.historyh6, { duration: 1.2, delay: 1.4, opacity: 1, ease: "expoScale" });
        gsap.to(this.historyDivider, { duration: 1.2, delay: 1.6, x: 0, opacity: 1, ease: "expoScale" });
    }
    playStack() {
        let skillsitem = this.el.shadowRoot.querySelectorAll('#stack .tab-item');
        skillsitem.forEach(item => {
            gsap.to(item, { duration: 1.2, delay: (item.attributes['data-id'].nodeValue / 4), y: 0, opacity: 1, stagger: 1, ease: "expoScale" });
        });
        let knowledgeprogress = this.el.shadowRoot.querySelectorAll('.knowledge .progress');
        knowledgeprogress.forEach(item => {
            gsap.to(item, { duration: 2, delay: (item.attributes['data-id'].nodeValue / 2), scaleX: (item.attributes['data-progress'].nodeValue / 100), ease: "expoScale" });
        });
        let loveprogress = this.el.shadowRoot.querySelectorAll('.love .progress');
        loveprogress.forEach(item => {
            gsap.to(item, { duration: 2, delay: (item.attributes['data-id'].nodeValue / 2), scaleX: (item.attributes['data-progress'].nodeValue / 100), ease: "expoScale" });
        });
    }
    playFuture() {
        gsap.to(this.future, { duration: 1.2, delay: 0.5, y: 0, opacity: 1, ease: "expoScale" });
        let futureitem = this.el.shadowRoot.querySelectorAll('#future p');
        futureitem.forEach(item => {
            gsap.to(item, { duration: 1.2, delay: (item.attributes['data-id'].nodeValue / 4), y: 0, opacity: 1, ease: "expoScale" });
        });
    }
    dateHandler(past) {
        const pastDate = new Date(past);
        const presentDate = new Date();
        let years = presentDate.getFullYear() - pastDate.getFullYear();
        let months = presentDate.getMonth() - pastDate.getMonth();
        let days = presentDate.getDate() - pastDate.getDate();
        // Adjust for negative days
        if (days < 0) {
            months--;
            const daysInPrevMonth = new Date(presentDate.getFullYear(), presentDate.getMonth(), 0).getDate();
            days += daysInPrevMonth;
        }
        // Adjust for negative months
        if (months < 0) {
            years--;
            months += 12;
        }
        return `${years} years, ${months} months, ${days} days`;
    }
    componentWillLoad() {
        this.journeyViewed = localStorage.getItem('journeyViewed');
    }
    render() {
        return (h("section", { key: '5d2b61c97b9a04131d54d4311cc54f16515e015d', id: "wrapper", class: "wrapper relative overflow-hidden w-screen h-screen", style: { "background-image": "url('./assets/texture.jpg')" } }, h("section", { key: '27c62290a47c64d67885431583b43cd7bfe8fbd1', id: "cvbg", class: "opacity-0 cvbg absolute w-screen h-screen flex items-end gap-[2%]", style: { "background-image": "url('./assets/cvbg.jpg')" } }, h("section", { key: '1507ede979a44dd2306c4f156af90787c4f8a3d5', id: "about", class: "about relative z-10" }, h("article", { key: '55d00d901749abb8456fd31b1efbdd1fdd4beeba' }, h("p", { key: '10e14e4d516e9e76c3e2c885265c05fa231ce6b7', "data-id": "1" }, "Hello there, my name is Craig du Toit and I am a Front-End Engineer and as you can clearly see, I have a passion for animation and interactivity on the web."), h("p", { key: '28ac98c573c5a0566a65d5658a60a7a377577920', "data-id": "2" }, "I have been working in the industry for 15 years and this serves as not only a demonstration of my craft but also a detailed breakdown of my recent work history, skills, tech stack and hobbies."), h("p", { key: 'c68fbb5861538b17f82872ecf0c140a83c1562b0', "data-id": "3" }, "I aspire to be a dependable and ever eager colleague, a loving husband, a good father to my son - a 2 and half year old toddler with anger issues and my \"hopefully daughter\" newborn due in May 2026."), h("p", { key: 'b361e3757fe5849d5e9b3130750602f9c8ee8ba2', "data-id": "4" }, "My hobbies include running, playing padel with good friends and enjoying some seriously good food. I am a social and well spoken person and I don't have a hard time making lifelong friends."), h("div", { key: '7a710480619f13e904e83a6fb5772bac0e98004c', id: "socials", class: "socials flex gap-2" }, h("a", { key: '6139bfbea4bf1a3fd013e3e3b9881d3dc6bc79e8', href: "https://www.linkedin.com/in/craigddutoit/", target: "_blank" }, h("svg", { key: 'e60bb5af41e0be574877e0822607276786c65dc3', id: "linkedin", class: "translate-y-100", xmlns: "http://www.w3.org/2000/svg", width: "36", height: "36", viewBox: "0 0 256 256" }, h("path", { key: '03ff2d52a5687b7ead1c155491858b646b832ffc', fill: "#480eff", d: "M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" })))))), h("section", { key: '87d97bef82149628b25762d5c215260e4e683644', id: "skills", class: "skills tabbed" }, h("input", { key: '9db6ceac8f14857d8774e27c9bbadb3e17e00b8f', type: "radio", id: "tab1", name: "css-tabs", checked: true }), h("input", { key: '614298a9d1e2ab73e67ba5cafcc0954a378de761', type: "radio", id: "tab2", name: "css-tabs" }), h("input", { key: '01257723e5b4807ab3d254e67ed987d6b684d73e', type: "radio", id: "tab3", name: "css-tabs" }), h("ul", { key: '1cd7a90575e3c9a2b82ba9694bf105f4768fc9d1', class: "tabs" }, h("li", { key: 'b4190c5878ba59849ceaac2d5f6cbdd647791936', id: "skillstab1", class: "tab -translate-y-28" }, h("label", { key: '6ae8283c367c74a62111317b993ea03dcc5eb694', htmlFor: "tab1" }, "Position Held")), h("li", { key: '9da4e6b74c6e9093f2a025c9646fcae311640e81', id: "skillstab2", class: "tab -translate-y-28", onClick: () => this.playStack() }, h("label", { key: '1601620ee45df59d224589bf7e6da9e6bf8bcf98', htmlFor: "tab2" }, "Stack")), h("li", { key: 'ea48ce6563772359c3e925e872675df512c235d5', id: "skillstab3", class: "tab -translate-y-28", onClick: () => this.playFuture() }, h("label", { key: '1eda3c10a43b196ceed1d539661dcf2d497b8d73', htmlFor: "tab3" }, "The Future"))), h("main", { key: '4fd9bc835824ecd280c2eb133e505ab0721a58b7', id: "history", class: "tab-content" }, h("article", { key: 'd84a3aec383aea99e6f232f64cfcfa28244d5b8e', class: "tab-item h-[458px]" }, h("h3", { key: '40a1e20fc4439cceb2ce95accd6db557d700d104', class: "opacity-0" }, "Software Developer - Team Lead | Promotions & Retention Marketing"), h("h5", { key: '93639f5cc7be4d991519a50bce76e246ce11c2d2', class: "opacity-0" }, "Osiris Trading \u00B7 Full-time"), h("h6", { key: '1960bea9a2be986800235a52c3ed6e823f8fa58e', class: "opacity-0" }, "Nov 2021 - Present \u00B7 ", this.dateHandler('2021-11-01T10:00:00Z'), " "), h("div", { key: '53e2a53319030cf110656939f6087e0cfc45f915', class: "mt-4 mb-3 divider bg-gradient-to-r from-indigo-700 via-40% via-transparent to-transparent -translate-[120%]" }), h("div", { key: '0ee074b8c746511fb3a812833042f004221319a9', class: "flex flex-col h-full justify-between" }, h("div", { key: '07090135093c03ada2698897e28b3851f4c38a76', id: "description", class: "description" }, h("p", { key: '301dfbad7a9452a1d375796058927367a11e4928', "data-id": "1" }, "Building bespoke promotions focused on delivering engaging experiences for the global Betway Brand. Utilizing the latest technology to deliver fast, data efficient and visually stunning UI and UX projects. Working with a team of dedicated back-end and front-end engineers catering to both business and customer needs."), h("p", { key: '6bef1ec3d27b37dc8541681a0972361292571c72', "data-id": "2" }, "I am in charge of project planning, understanding business requirements and delivering above expected quality on project delivery whilst standardizing team's understanding to deliver similar results."), h("p", { key: '629d379c97c09fd45194d20daaf69ab25ca5cc8a', "data-id": "3" }, "Feel free to visit my ", h("a", { key: 'bf66136c603a673d1997832b171081a629dfcd0d', class: "text-indigo-700", href: "https://www.linkedin.com/in/craigddutoit/", target: "_blank" }, "LinkedIn Profile"), " for broader career experience.")), h("div", { key: '86e3095b93c91f2235068d2980baae815f3d0736', class: "requirements" }, h("h5", { key: 'fa64e0f2a4a1d762bdfd016a0c814bce8a3dcf02' }, "Responsibilities:"), h("div", { key: 'eae2d235c22a90428b53e38745676de33a785e75', id: "responsibilities", class: "flex gap-1 flex-wrap" }, h("p", { key: '91c271011006491903d99003e8ba34606109c5e4', "data-id": "1" }, "Defining design"), h("p", { key: 'ddeedc3469d8d7039a18227ceeab77ffe19cf3e7', "data-id": "2" }, "Developing Front-End"), h("p", { key: 'b7b0f0e61bc5948793ed5be38a75aca6f50d8f69', "data-id": "3" }, "Collaboration on Design Refinement"), h("p", { key: 'ae9a5fdbb88fffbb327bb395f14a7171a5688999', "data-id": "4" }, "Collaboration on Back-end Data structures"), h("p", { key: '8c123096c3a43b4e0f634b2cdc11eea7556438ab', "data-id": "5" }, "Project Planning"), h("p", { key: '298315fe805b842b7024d58d2f53e8b6d9464969', "data-id": "6" }, "Team Planning"), h("p", { key: '595b67fa09dac39459c45104e30ffbd364df8ff2', "data-id": "7" }, "Project Feedback sessions"), h("p", { key: 'c6506c091bc6ef58c22f24222f67c13eda0dd0f2', "data-id": "8" }, "Ongoing support of live software"), h("p", { key: 'f9576f8b305c66559ad6147242870a5cec7106f1', "data-id": "9" }, "Future Proofing Project Structures"), h("p", { key: '5a6f22b57600b635cfc5918309aa245375ef965c', "data-id": "10" }, "Creation & Maintenance of Front-End Brand UI"), h("p", { key: 'd3ad6b76f20ebe13d865fa81a77dce45860faf04', "data-id": "11" }, "Mentorship & Training")))))), h("main", { key: '2ea0301f31397c7b3346fbd2f57bef5f7e6cb88b', id: "stack", class: "tab-content flex flex-col gap-4 h-[458px]" }, h("article", { key: '90187559c8b8d7a04d00a2954b8c26be3cf18548', "data-id": "1", class: "tab-item w-full flex gap-6 items-center" }, h("div", { key: 'a6d75c119c88d84318e887b8b700d1bece451ea7', class: "item-title flex flex-col" }, h("h5", { key: 'b087664da81fd380b79ca3dc1cf6b9fa0782ef7c' }, "StencilJS"), " ", h("span", { key: 'fc8d93501dfd40a9e43b43c9370cbd76ecee5568' }, "4 YEARS")), h("div", { key: '31be4803a0c876ad5edd112ea3eb33c57f875363', class: "flex w-full flex-col gap-2" }, h("h6", { key: '4976bf43254383b7e62a916cef5213e33c4f70d4' }, "Knowledge"), h("div", { key: '232194afbab68a9137e82ddd58ed764ae6934ba8', class: "progress-bar knowledge" }, h("div", { key: '0f64581cd8f8b4ac2e7e13cdc40dfc5f44da8dbc', "data-id": "1", "data-progress": "90", class: "progress" }))), h("div", { key: '95d496e3ea29250f4c206d6b9ec0f0456c171ee7', class: "flex w-full flex-col gap-2" }, h("h6", { key: 'b11c109ad6113b66a454a60cd67f9e47eb2743af' }, "Love"), h("div", { key: '178fa07133440282927210f4b0b988f82a14b9d1', class: "progress-bar love" }, h("div", { key: 'a707bf9414ad489366c54babb1b4c0197dfd7db3', "data-id": "1", "data-progress": "100", class: "progress" })))), h("article", { key: 'aa1900ff9f39eac5ccafcf3f8d3e2a69426786b6', "data-id": "2", class: "tab-item w-full flex gap-6 items-center" }, h("div", { key: 'f2135c175e07b7109307849a137cb9d87bfcfc6a', class: "item-title flex flex-col" }, h("h5", { key: '4b26883ac0a88d14ff0ba5c3e1a1fcc70b7c9eba' }, "React"), " ", h("span", { key: 'e114a6473e92402c78c216eb4c1d7935d09749be' }, "2 YEARS")), h("div", { key: 'bf303e679d2640e1f6ab4413aa5c35faa5da0e67', class: "flex w-full flex-col gap-2" }, h("h6", { key: '507238ae505e317fa22010996d27149c5e617764' }, "Knowledge"), h("div", { key: '60fa3f7d27e1df1ca45050d3a074d1be3f03c358', class: "progress-bar knowledge" }, h("div", { key: '755b83cad869b7caa2206daebb17f4ef93dec441', "data-id": "2", "data-progress": "70", class: "progress" }))), h("div", { key: '9f2efd1ec6d1c361a3f4d91e2ac7230830567288', class: "flex w-full flex-col gap-2" }, h("h6", { key: '6beb1e8753be536ecf466b89c470d521f4af7071' }, "Love"), h("div", { key: '9ff1e7d63e3ec9016804a0b8f2be1dcf4f81e341', class: "progress-bar love" }, h("div", { key: 'd3260c68ad4a4af30f81ef3db8f830c17880d2f7', "data-id": "2", "data-progress": "90", class: "progress" })))), h("article", { key: '4d8cd2e3caf6da279e1ca2b91420d4ca45508528', "data-id": "3", class: "tab-item w-full flex gap-6 items-center" }, h("div", { key: '0b360b0dad3fade384ea18c5e0ab8d7860904875', class: "item-title flex flex-col" }, h("h5", { key: '0cbdbad986773edd525380ac72c453d05762f343' }, "Angular"), " ", h("span", { key: '4836dc38bee19935a81894dad0b74674f3ae1c60' }, "2 YEARS")), h("div", { key: 'd218f008f05bbc67584646f753d72a96571d2432', class: "flex w-full flex-col gap-2" }, h("h6", { key: 'fe601dde2935a21c2be93b65d9476bcaf8e91ccb' }, "Knowledge"), h("div", { key: 'a7772d556921046e98eb6afba1bf160fd1f460be', class: "progress-bar knowledge" }, h("div", { key: 'e98f2b9cb60188a6087cd9894b20f9f4a3a65805', "data-id": "3", "data-progress": "70", class: "progress" }))), h("div", { key: '152320463fa01edf4d1b67b3cd2844e625960965', class: "flex w-full flex-col gap-2" }, h("h6", { key: 'de5d1bf78a23673172edfacd9c1e1dc732d9e8e8' }, "Love"), h("div", { key: 'fa6cb78260ca6bdcae7f3fa496ae769fda0f4a41', class: "progress-bar love" }, h("div", { key: '8a956b1e61113152ff8cfc0ed05f690c5c9f03ce', "data-id": "3", "data-progress": "70", class: "progress" })))), h("article", { key: 'd8a85b25e5d1d785c760385a0b52db92ddb86524', "data-id": "4", class: "tab-item w-full flex gap-6 items-center" }, h("div", { key: 'fa2315755301a09562dbc115a111eae4fec945f9', class: "item-title flex flex-col" }, h("h5", { key: 'c2d2bf02909ab9cd74853d293674d43e139c280d' }, "TypeScript"), " ", h("span", { key: 'a35433264fa9fff4721a31de6625254a0c053556' }, "5 YEARS")), h("div", { key: 'c59d6b9e674c1d9b26c3e81e1ca4be6825279cc8', class: "flex w-full flex-col gap-2" }, h("h6", { key: 'e196f9130361953d7cda7eedbc40328df32ba830' }, "Knowledge"), h("div", { key: 'c4733cc54a6f31b3641122ae621fa7db032f0af6', class: "progress-bar knowledge" }, h("div", { key: '0af70be1d596bf078fc3fdda4187b8c793b087c1', "data-id": "4", "data-progress": "80", class: "progress" }))), h("div", { key: '927e3cf789663766bbebc1ca75bad5e0f83663e8', class: "flex w-full flex-col gap-2" }, h("h6", { key: '8e0f3dc705cfa810d834442ecc4fe83b9c1dfbf8' }, "Love"), h("div", { key: '8d0cadb1e45371d7c11062ec73bd0b7334650e21', class: "progress-bar love" }, h("div", { key: '3577a13bcb29948fd08c799561b77ddeaa7365c4', "data-id": "4", "data-progress": "90", class: "progress" })))), h("article", { key: '421e890eae324cddc1ec0e0f16bc4b0963895999', "data-id": "5", class: "tab-item w-full flex gap-6 items-center" }, h("div", { key: '8713c700f94b4132913c090199834cbfa973dbd8', class: "item-title flex flex-col" }, h("h5", { key: '325cfa13b688d4365f383f7f831b15229e61fb92' }, "GSAP"), " ", h("span", { key: '0b6c77dbf695db2a84bf975c27ebce298d6b341d' }, "2 YEARS")), h("div", { key: '69ebfb195ea9d4307ab7e0ca1cb1a941983c5b25', class: "flex w-full flex-col gap-2" }, h("h6", { key: 'eaf9db851046d9aada466fbb45d0e60c2b08abe1' }, "Knowledge"), h("div", { key: 'da78b33b676aab0cbf000af38b84412bbda8d274', class: "progress-bar knowledge" }, h("div", { key: 'd4dcca86acde6a91b48679559788cbd50c577569', "data-id": "5", "data-progress": "70", class: "progress" }))), h("div", { key: '4f01610ea07207f5122ec289f4cfdca4d4df6d00', class: "flex w-full flex-col gap-2" }, h("h6", { key: 'cdafb1b6c4ae5b0e656c8b11b96e655f9d9abadd' }, "Love"), h("div", { key: '49b006949c2a0028bc6466d9f05688f31540d0ba', class: "progress-bar love" }, h("div", { key: '7e24f4be96fc6e147dbe6d4c25163a81ede21794', "data-id": "5", "data-progress": "100", class: "progress" })))), h("article", { key: '8a5a2e82fcafe66d2f2d2ce7f81d723517924e7c', "data-id": "6", class: "tab-item w-full flex gap-6 items-center" }, h("div", { key: 'cc3ae2479daa03d4d1be3d59e8fcaac25ca373c0', class: "item-title flex flex-col" }, h("h5", { key: '6afd75be26a26c48a6cde69f00a9dbfa84f7101e' }, "TailwindCSS"), " ", h("span", { key: 'e5474cd9c2721a634797d54fb47896fb04f43b41' }, "3 YEARS")), h("div", { key: 'a4d742b0c28ce03d7086f2029892d8d89855a1af', class: "flex w-full flex-col gap-2" }, h("h6", { key: 'd40a5835be7a24e3c4865e06e4c05a7b331777e5' }, "Knowledge"), h("div", { key: 'f956cd4a062c389b30b8ea7b084069deb2ccf79e', class: "progress-bar knowledge" }, h("div", { key: '41de6c7f16e51140ac0be97c1bf90ab8dc3d72e4', "data-id": "6", "data-progress": "90", class: "progress" }))), h("div", { key: '1f33bb988603f236a486c239e34f7762838846f8', class: "flex w-full flex-col gap-2" }, h("h6", { key: '62b8a4a0c478410a6094665e8d57053bac43773c' }, "Love"), h("div", { key: '9384acdc45d43cc5ba73a51fda5d82f6ed72f830', class: "progress-bar love" }, h("div", { key: '8ade8d3673824e0c69c1d7c3e7803e65f9617933', "data-id": "6", "data-progress": "90", class: "progress" })))), h("article", { key: '1856f9c130b007019d081272bf10136be8180c34', "data-id": "7", class: "tab-item w-full flex gap-6 items-center" }, h("div", { key: '969580d15ecbce22b0fdc5cc1da2333ce7799395', class: "item-title flex flex-col" }, h("h5", { key: '40cc8d3d1b2d1bcd8403f0a49988b8d39292cdba' }, "CSS"), " ", h("span", { key: '921a3e21c7bb912530bd4abe20f6a6379055a1db' }, "15 YEARS")), h("div", { key: '083241d22e3c494a65b1b7572d92aaf904d230ff', class: "flex w-full flex-col gap-2" }, h("h6", { key: '62ecf6c15835b5d0e574cd72a825ba9a3a2e2ea1' }, "Knowledge"), h("div", { key: 'deb2fcad81b5a386a718c56c110c3d8c75bc7eb1', class: "progress-bar knowledge" }, h("div", { key: 'e2af81eb44db62e43578d4a6449244426eb10767', "data-id": "7", "data-progress": "100", class: "progress" }))), h("div", { key: '4b9cea38a0481d7e0a2d561e0528ce12873049d2', class: "flex w-full flex-col gap-2" }, h("h6", { key: 'caed78968b5a69ee90ab5608893c025a84de2a9f' }, "Love"), h("div", { key: 'f91fd057099c7cd3ed3276d076665e76055de311', class: "progress-bar love" }, h("div", { key: '3afd5b3ff48332296ed987c6c3f62d74d89dd2a1', "data-id": "7", "data-progress": "100", class: "progress" })))), h("article", { key: '7bfbe4fda8353b4511513032c3eac95d266f968c', "data-id": "8", class: "tab-item w-full flex gap-6 items-center" }, h("div", { key: 'a75692eccf7ccdbca99d2b03767e1b533c097cbf', class: "item-title flex flex-col" }, h("h5", { key: '9134fd5a91a8a1c685ca6eff9773447758779843' }, "Git"), " ", h("span", { key: '7dc551fa4100aaa379eeb74b733825a87af6e890' }, "15 YEARS")), h("div", { key: 'f7ed00d9f4f638e66e7ff5adc0d78fa12d5e7ef3', class: "flex w-full flex-col gap-2" }, h("h6", { key: '15f3f52aec1187d8b19a6480e84dd60a8d681006' }, "Knowledge"), h("div", { key: 'fc4704c55e43a18c7f4fb800e3c676f6868c2cd7', class: "progress-bar knowledge" }, h("div", { key: 'aa339b5006e13b41a6a8eb65267102a995f7c33b', "data-id": "8", "data-progress": "80", class: "progress" }))), h("div", { key: '0f4bc237188ff17bf8e61868b373333d4c983fe2', class: "flex w-full flex-col gap-2" }, h("h6", { key: '4d25b624cd0307d31d25e62a06e924a707c8ff6d' }, "Love"), h("div", { key: '8a7f795794109256db06b230dd26558de0e48d58', class: "progress-bar love" }, h("div", { key: '7e6ce095313b9eb56d561ea5066435ef2efac69a', "data-id": "8", "data-progress": "100", class: "progress" }))))), h("main", { key: '604f30255063fdd9574f3e6dfeeaed3f56c04fe5', id: "future", class: "tab-content" }, h("article", { key: 'd7e35f1e0eab2201403ae69084ea9d407573673e', class: "tab-item" }, h("p", { key: '044c3519213267434a375915b0b4b946ec64861c', "data-id": "1" }, "I would not neccessarily say I am open to all offers when it comes to employment, I simultaneuosly enjoy what I do and where I am doing it which seems to be a rare thing these days, and therefore I have that wonderful luxury in being able to choose comfortably what comes next."), h("p", { key: '9623fffe2f3b3465efc17a4bec7f33b4d120af76', "data-id": "2" }, "With that being said, my mind does wander to what may lie for me out there, to what challenges await, perhaps an exciting endeavor, perhaps amazing people with enough passion about what they do that one can hardly pass up the offer."), h("p", { key: '49f58cd3446517ab8bffbdb0f11e215f958d3b82', "data-id": "3" }, "I believe in brands and business built on the love of the game, numbers are a conversation of course, but that love, that love for what you do and who you do it with... that makes one dream of waking up to the work ahead."), h("p", { key: '81e9fdae11f6fa286248303e7aa8ba1467bc6906', "data-id": "4" }, "Please feel free to contact me to discuss your passion and vision."), h("p", { key: '7b167234386b3e7b3de94d87dd34f72260b170d6', "data-id": "5" }, "Mail me ", h("a", { key: '51f89324e5c76a9f2af76ee518f0f615a1805453', href: "mailto: craigtoit@gmail.com", class: "text-indigo-700" }, "craigtoit@gmail.com"), "."))))), h("div", { key: 'c3b507e3b1f974e052420fbf0db1d38d9bfdc196', id: "logo", class: "logo opacity-0 absolute w-full z-0" }, h("img", { key: 'f505d32de6e90580a320b84c452f9ef9109efd9b', class: "absolute -left-[278px]", src: "./assets/logo.png", alt: "" })), h("div", { key: 'd186d59973aad43616ca953c0f5b519e48e22200', id: "circles", class: "concentric w-full h-screen absolute z-0" }, h("div", { key: 'da776a8edea485e67365c4f4b9e05430eabcfe4c', id: "circle-1" }), h("div", { key: 'd45f846b92ce34a550b76dc764f664208a13dfc9', id: "circle-2" }), h("div", { key: '1d5a8f7b97abedf848d047ab6f3a02d33b0bd04b', id: "circle-3" }), h("div", { key: '340fc7054437e4f90c19e1cd384d09ec5fcaed1d', id: "circle-4" })), h("article", { key: '6af7456f1a84f645ad0a9f81b19da1d320efe7e4', id: "intro", class: "intro-actions flex flex-col absolute m-auto" }, h("p", { key: '9e9fab669fa0e9afe2817f84a82f2b4e093201bf', class: "intro-text", id: "intro-1" }, "Well, what do we have here.... I don't recognize you, how did you get here?"), h("p", { key: '146ba6a26a27786231b6dafcef05a1d82a2fcd7e', class: "intro-text", id: "intro-2" }, "I suppose the creator wanted you to be here, as far as I know he doesn't tell people about this place."), h("p", { key: '0a8c4fdbb2b10890cf87f92736b52d4e10e1558b', class: "intro-text", id: "intro-3" }, "Whatever the case may be, the creator wanted you to be here. I guess we should have a look around."), h("div", { key: '25c551e2e2dad6d353c614960252b83b11402ce2', id: "look", class: "look w-full", onClick: () => this.launchCV() }, h("svg", { key: '66c3dc5b73813ed372d90baf11d26e9d04985762', class: "mx-auto mt-8", xmlns: "http://www.w3.org/2000/svg", width: "112", height: "112", viewBox: "0 0 32 32" }, h("g", { key: '05ded71909329d79ea4c798bfcc123fb803a12ab', fill: "#ececec" }, h("path", { key: '95467225194d24e519cace26151f2721cd0c1262', d: "M21 16a5 5 0 1 1-9.643-1.86a2 2 0 1 0 2.784-2.784A5 5 0 0 1 21 16" }), h("path", { key: '88c278483ec3609b681f33adb1a287cc2d85ce8f', d: "M15.984 24.969a8.984 8.984 0 1 0 0-17.97a8.984 8.984 0 0 0 0 17.97m0-2a6.984 6.984 0 1 1 0-13.97a6.984 6.984 0 0 1 0 13.97" }), h("path", { key: 'a75b5e7d0a3bb083818990ae716e2f51e6a6b15e', d: "M16.156 30.313c7.819 0 14.157-6.338 14.157-14.157C30.313 8.338 23.975 2 16.156 2C8.338 2 2 8.338 2 16.156s6.338 14.157 14.156 14.157m0-2C9.443 28.313 4 22.87 4 16.156C4 9.443 9.443 4 16.156 4s12.157 5.443 12.157 12.156s-5.443 12.157-12.157 12.157" }))))), h("p", { key: '71a9dfff81bd7363e7696e9336638550840ba3a1', id: "footer", class: "footer absolute text-lg mx-auto w-fit h-fit font-sans" }, "Hand built with StencilJS + GSAP + Tailwind CSS \u00A0 [ ", h("span", { key: '3c2b17a15b5a160b50a7264601de22b579de7705', onClick: () => this.resetThisPlace() }, "Restart the journey"), " ]")));
    }
    componentDidLoad() {
        this.intro = this.el.shadowRoot.getElementById('intro');
        this.circles = this.el.shadowRoot.getElementById('circles');
        this.about = this.el.shadowRoot.getElementById('about');
        this.skills = this.el.shadowRoot.getElementById('skills');
        this.history = this.el.shadowRoot.getElementById('history');
        this.historyh3 = this.el.shadowRoot.querySelector('#history h3');
        this.historyh5 = this.el.shadowRoot.querySelector('#history h5');
        this.historyh6 = this.el.shadowRoot.querySelector('#history h6');
        this.historyDivider = this.el.shadowRoot.querySelector('#history .divider');
        this.future = this.el.shadowRoot.getElementById('future');
        this.socials = this.el.shadowRoot.getElementById('linkedin');
        this.skillstab1 = this.el.shadowRoot.getElementById('skillstab1');
        this.skillstab2 = this.el.shadowRoot.getElementById('skillstab2');
        this.skillstab3 = this.el.shadowRoot.getElementById('skillstab3');
        this.footer = this.el.shadowRoot.getElementById('footer');
        this.look = this.el.shadowRoot.getElementById('look');
        this.logo = this.el.shadowRoot.getElementById('logo');
        this.cvbg = this.el.shadowRoot.getElementById('cvbg');
        this.line1 = this.el.shadowRoot.getElementById('intro-1');
        this.line2 = this.el.shadowRoot.getElementById('intro-2');
        this.line3 = this.el.shadowRoot.getElementById('intro-3');
        this.circle1 = this.el.shadowRoot.getElementById('circle-1');
        this.circle2 = this.el.shadowRoot.getElementById('circle-2');
        this.circle3 = this.el.shadowRoot.getElementById('circle-3');
        this.circle4 = this.el.shadowRoot.getElementById('circle-4');
        let split1 = SplitText.create(this.line1, { type: "chars" });
        let split2 = SplitText.create(this.line2, { type: "chars" });
        let split3 = SplitText.create(this.line3, { type: "chars" });
        if (this.journeyViewed === 'true') {
            this.hideJourney();
            this.launchCV();
        }
        gsap.from(split1.chars, {
            duration: 1,
            y: 40,
            autoAlpha: 0,
            delay: 0,
            stagger: 0.03,
            onComplete: () => this.fadeLine(1)
        });
        gsap.from(split2.chars, {
            duration: 2,
            delay: 5,
            y: 40,
            autoAlpha: 0,
            stagger: 0.03,
            onComplete: () => this.fadeLine(2)
        });
        gsap.from(split3.chars, {
            duration: 2,
            delay: 10,
            y: 40,
            autoAlpha: 0,
            stagger: 0.03
        });
        gsap.fromTo(this.look, { opacity: 0, y: 140 }, { opacity: 1, y: 0, duration: 2, delay: 14, ease: "expoScale" });
        // end
        gsap.fromTo(this.circle1, { scale: 0.9 }, { scale: 1.1, duration: 2, yoyo: true, ease: "ease", delay: 2, repeat: -1, repeatDelay: 6 });
        gsap.fromTo(this.circle2, { scale: 0.9 }, { scale: 1.1, duration: 2, yoyo: true, ease: "ease", delay: 2.5, repeat: -1, repeatDelay: 6 });
        gsap.fromTo(this.circle3, { scale: 0.9 }, { scale: 1.1, duration: 2, yoyo: true, ease: "ease", delay: 3, repeat: -1, repeatDelay: 6 });
        gsap.fromTo(this.circle4, { scale: 0.9 }, { scale: 1.1, duration: 2, yoyo: true, ease: "ease", delay: 3.5, repeat: -1, repeatDelay: 6 });
    }
    static get is() { return "app-root"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["app-root.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["app-root.css"]
        };
    }
    static get states() {
        return {
            "journeyViewed": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=app-root.js.map
