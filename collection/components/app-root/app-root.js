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
        return (h("section", { key: '88df3c753fc54f0f51c1aa4e415f044e897c0346', id: "wrapper", class: "wrapper relative overflow-hidden w-screen h-screen", style: { "background-image": "url('./assets/texture.jpg')" } }, h("section", { key: 'a0f2a0209e5c128d3c1d9058846a0f81d2a12667', id: "cvbg", class: "opacity-0 cvbg absolute w-screen h-screen flex items-end gap-[2%]", style: { "background-image": "url('./assets/cvbg.jpg')" } }, h("section", { key: '1e555b2047a90afc698262e7d808b0150e7a2588', id: "about", class: "about relative z-10" }, h("article", { key: '3b453ec3295ec40bc221e43e56c479a015ec29ac' }, h("p", { key: '3911fb9054981bbfb9a99e9f5c1f164b1bae1ff2', "data-id": "1" }, "Hello there, my name is Craig du Toit and I am a Front-End Engineer and as you can clearly see, I have a passion for animation and interactivity on the web."), h("p", { key: '6ef9dcbbb868fd39de95d6d51899f7cf802b0164', "data-id": "2" }, "I have been working in the industry for 15 years and this serves as not only a demonstration of my craft but also a detailed breakdown of my recent work history, skills, tech stack and hobbies."), h("p", { key: '047a9ab9161d15e3033ba0ad5f15de68eed78bb7', "data-id": "3" }, "I aspire to be a dependable and ever eager colleague, a loving husband, a good father to my son - a 2 and half year old toddler with anger issues and my \"hopefully daughter\" newborn due in May 2026."), h("p", { key: 'e8111bb48208b0c1678293ba00e2179abeff8d6e', "data-id": "4" }, "My hobbies include running, playing padel with good friends and enjoying some seriously good food. I am a social and well spoken person and I don't have a hard time making lifelong friends."), h("div", { key: '3f0786706bb04141f2b080c8d3d46554a7f364d9', id: "socials", class: "socials flex gap-2" }, h("a", { key: '739e158dd72e6a04a7226ad3d7930ec0f8a4b9e1', href: "https://www.linkedin.com/in/craigddutoit/", target: "_blank" }, h("svg", { key: '40484e153ca53726c3a58eb930fada4265c71dab', id: "linkedin", class: "translate-y-100", xmlns: "http://www.w3.org/2000/svg", width: "36", height: "36", viewBox: "0 0 256 256" }, h("path", { key: 'f17614efd07aa0961327e95650094419246f3ea4', fill: "#480eff", d: "M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" })))))), h("section", { key: '8685d6de65ff1864325cb00ed23cbf2ea2de63ed', id: "skills", class: "skills tabbed" }, h("input", { key: '813ce522483f638ead7b16c6cb40d009159622c8', type: "radio", id: "tab1", name: "css-tabs", checked: true }), h("input", { key: 'f8fcb4acc25fac0ba62a0ff7932b6b39a6e20b81', type: "radio", id: "tab2", name: "css-tabs" }), h("input", { key: 'ef9e7b26d265e76af14342200434281e6c15aa06', type: "radio", id: "tab3", name: "css-tabs" }), h("ul", { key: '7bb36d2d1b229902b9b35c7da3602e5b0e652c37', class: "tabs" }, h("li", { key: '6dee1fe751f023314210d370d94f7765dd97b1fb', id: "skillstab1", class: "tab -translate-y-28" }, h("label", { key: 'a6d310ad294ca3ccacd569c829897a6abaf82f53', htmlFor: "tab1" }, "Position Held")), h("li", { key: '4f8a579f70aa6d1bb7a4cb24390038f80c35d6f5', id: "skillstab2", class: "tab -translate-y-28", onClick: () => this.playStack() }, h("label", { key: 'e882c28fb65526aa2c9957be7ec7a8f3a8d9788d', htmlFor: "tab2" }, "Stack")), h("li", { key: '0e2ad465f65b6caf6a828991ff0ca0b6889b0d71', id: "skillstab3", class: "tab -translate-y-28", onClick: () => this.playFuture() }, h("label", { key: '9fdd47c5609890ee1c91c28f0d2d87f5861bac6a', htmlFor: "tab3" }, "The Future"))), h("main", { key: 'fb7ce7f9773ff46603239e6fe04582e9d770717b', id: "history", class: "tab-content" }, h("article", { key: 'b6a648e1867dbb6a4fe414f83565d224b52cd0bd', class: "tab-item h-[458px]" }, h("h3", { key: '0dc9c7efca3c25d185d1ce01643b08d6730d8343', class: "opacity-0" }, "Software Developer - Team Lead | Promotions & Retention Marketing"), h("h5", { key: '33e67969f5edb24315998de0adb73d9cba68917a', class: "opacity-0" }, "Osiris Trading \u00B7 Full-time"), h("h6", { key: 'd5016f63492932a1dbb0443661453c1c159ab165', class: "opacity-0" }, "Nov 2021 - Present \u00B7 ", this.dateHandler('2021-11-01T10:00:00Z'), " "), h("div", { key: '01ea44bdb25249cf239c9df642664f07e240fe80', class: "mt-4 mb-3 divider bg-gradient-to-r from-indigo-700 via-40% via-transparent to-transparent -translate-[120%]" }), h("div", { key: '298072832aabafeef9e0bbf9d558e86b9c2963b8', class: "flex flex-col h-full justify-between" }, h("div", { key: '830030a0ef48add64cb5d84a79841542fc8b3163', id: "description", class: "description" }, h("p", { key: '8e132c6ba699cb274f6b47632052bf20f2d415d0', "data-id": "1" }, "Building bespoke promotions focused on delivering engaging experiences for the global Betway Brand. Utilizing the latest technology to deliver fast, data efficient and visually stunning UI and UX projects. Working with a team of dedicated back-end and front-end engineers catering to both business and customer needs."), h("p", { key: '189f679cc5f029e7db88d59997726daf9b82c7e7', "data-id": "2" }, "I am in charge of project planning, understanding business requirements and delivering above expected quality on project delivery whilst standardizing team's understanding to deliver similar results."), h("p", { key: 'e07d7f31669e3b81ab6c8d142e98dcd29820c99f', "data-id": "3" }, "Feel free to visit my ", h("a", { key: '093922140bba88e5fdea14c91e871a834c56b3ea', class: "text-indigo-700", href: "https://www.linkedin.com/in/craigddutoit/", target: "_blank" }, "LinkedIn Profile"), " for broader career experience.")), h("div", { key: 'd076c5bf88804e9b227834867572d48f128aec5c', class: "requirements" }, h("h5", { key: '21eb178bf12fdb6b476673526baf516bb14a9ea0' }, "Responsibilities:"), h("div", { key: '9e6a8dce5ad7900661cb7ac547f2dabf2ffee929', id: "responsibilities", class: "flex gap-1 flex-wrap" }, h("p", { key: '165af0c5d1837b386f8d99956fd53a7538859d78', "data-id": "1" }, "Defining design"), h("p", { key: '7eb98494a390b30ef303e4216c158be5407692ad', "data-id": "2" }, "Developing Front-End"), h("p", { key: '65331c537d9ccbbc7da9f56db44f4cd51990eae0', "data-id": "3" }, "Collaboration on Design Refinement"), h("p", { key: '0af816a65b2563ef568fe859cccfd002476e643d', "data-id": "4" }, "Collaboration on Back-end Data structures"), h("p", { key: '5c20aaf41f943f73b489c2da5e75fa768ed99396', "data-id": "5" }, "Project Planning"), h("p", { key: '950c2f2260f039a2e345ce047a970188a9ed80f7', "data-id": "6" }, "Team Planning"), h("p", { key: 'a678f7d535f35890f62ba58089d53c46b4d00eb8', "data-id": "7" }, "Project Feedback sessions"), h("p", { key: '9ee3125664cdb4a0e942055a53bb09413b0f4e15', "data-id": "8" }, "Ongoing support of live software"), h("p", { key: '978fe1228e4ea11be67059e50b93887dc2c117a7', "data-id": "9" }, "Future Proofing Project Structures"), h("p", { key: 'b6a9041438ad864105566e14f7169ae38c29b5ae', "data-id": "10" }, "Creation & Maintenance of Front-End Brand UI"), h("p", { key: '9350b4967f32b308abf7f7e981c3a7c0a175fed0', "data-id": "11" }, "Mentorship & Training")))))), h("main", { key: '52066cc81e0a955e65b690f0d664c9d82d421624', id: "stack", class: "tab-content flex flex-col gap-4 h-[458px]" }, h("article", { key: '6b0abbefd9747b68f516db332f069552bd0355ad', "data-id": "1", class: "tab-item w-full flex gap-6 items-center" }, h("div", { key: 'f9b1dad4c1f6e6c48cadd35a12e1317d16e96ea8', class: "item-title flex flex-col" }, h("h5", { key: 'a1c09e1893ca296ef623be1034bbefb9981ecc00' }, "StencilJS"), " ", h("span", { key: 'a2fccfc941bba582d3ed7384d191267c09d88360' }, "4 YEARS")), h("div", { key: '2400330ee6cdb0916f1f2a2b866f70a4c24ffadf', class: "flex w-full flex-col gap-2" }, h("h6", { key: 'e1bf793db283a264eef545338efc565b4aa99df7' }, "Knowledge"), h("div", { key: 'ccd55ec99738b0274ba53d18a91d7be5adc784f3', class: "progress-bar knowledge" }, h("div", { key: '768151fa9f5757cda729f58a4cabdab01cb71b37', "data-id": "1", "data-progress": "90", class: "progress" }))), h("div", { key: '0f844cfcf6b8bdb6cfe6316462395b2aaef09a32', class: "flex w-full flex-col gap-2" }, h("h6", { key: '78a9bca5e507297882000c09fb9912b07891f4f6' }, "Love"), h("div", { key: 'ed90961944898e4214cee08f1e1cd84a09722aa6', class: "progress-bar love" }, h("div", { key: 'b25ba6588d1c0f92ec3f2d23ed7a287d8c120227', "data-id": "1", "data-progress": "100", class: "progress" })))), h("article", { key: 'eb5c8e45a8927ce422a841c6f95464622b6fb96d', "data-id": "2", class: "tab-item w-full flex gap-6 items-center" }, h("div", { key: 'c74e2d343dd7ebfb1b97cac97626d44b60de15d8', class: "item-title flex flex-col" }, h("h5", { key: 'b3e844f5b8221287fd116f5edf911fcd9cece1c3' }, "React"), " ", h("span", { key: '6d75ec09e2a40b64478a53a09baa6f762ba43291' }, "2 YEARS")), h("div", { key: '4d6150420957c88accb9ba3aaf1310a7a5f51faa', class: "flex w-full flex-col gap-2" }, h("h6", { key: '49e2f0876b4397f9e01648febfd43016020bdc67' }, "Knowledge"), h("div", { key: 'e23e0295e3fdb24ced882bccf50ecbd65a63c643', class: "progress-bar knowledge" }, h("div", { key: 'edc787a0ca174e88dfd8be00aceae2ef0411d1ef', "data-id": "2", "data-progress": "70", class: "progress" }))), h("div", { key: '04048cdb072b61c4c16b53c8b7d789996c25d8bd', class: "flex w-full flex-col gap-2" }, h("h6", { key: '24c60b2dff92eb1a26e7001a923012601807c12a' }, "Love"), h("div", { key: '5525390e292ce722e0f0baffa8d7375594e4cf88', class: "progress-bar love" }, h("div", { key: '5ba45bde0866ce1f1b6e956b18fe8263f9be0e8f', "data-id": "2", "data-progress": "90", class: "progress" })))), h("article", { key: 'a7b6ab587e6694497b75df63fd01291d9a3c13f5', "data-id": "3", class: "tab-item w-full flex gap-6 items-center" }, h("div", { key: '3c293da160de8249a81af9358d7d5c7276c2cc4b', class: "item-title flex flex-col" }, h("h5", { key: '38c56f68a98c554bef9d507436183b83bb8becc9' }, "Angular"), " ", h("span", { key: '07c0f8eff470842959182c1ad1a233737a6aeb76' }, "2 YEARS")), h("div", { key: '893945769c78e1bc24856dcf7860ab9896629e0c', class: "flex w-full flex-col gap-2" }, h("h6", { key: 'b2eb419a0e8fc74b160957b150b744ee93d758cc' }, "Knowledge"), h("div", { key: '6f5283621a640aabe164fc01d2c084e8ac63feb2', class: "progress-bar knowledge" }, h("div", { key: '22658db9af2bae1e7339e36724b48085c53bbf85', "data-id": "3", "data-progress": "70", class: "progress" }))), h("div", { key: '0b0e013b4acff4a1ab25076aa906447735dd1984', class: "flex w-full flex-col gap-2" }, h("h6", { key: 'b8214faa177ee2f0b264fe23df39e9d136fbd5ad' }, "Love"), h("div", { key: 'c1f72b2b3d5b6c16bf577857b960780c549537cc', class: "progress-bar love" }, h("div", { key: '01c8f6644c409a5a999ad2314e746f2377453ea5', "data-id": "3", "data-progress": "70", class: "progress" })))), h("article", { key: '140404c93e03fb94eae0f3e31dc54df13d55bd25', "data-id": "4", class: "tab-item w-full flex gap-6 items-center" }, h("div", { key: '1245521e3bbaab503a19ab7ec21792ba97fe22dc', class: "item-title flex flex-col" }, h("h5", { key: '74cb49cf57c60abce06fd15dea94096c8aab3c53' }, "TypeScript"), " ", h("span", { key: 'a0cbcdb6992dfde8bae3a4cd69bfc74e9f124cb2' }, "5 YEARS")), h("div", { key: '714d5e68ea4ad35227cbbeece38a0184017218b2', class: "flex w-full flex-col gap-2" }, h("h6", { key: '97ecc06d321807a63ad9bcd3b92c4e6dcfb23cc2' }, "Knowledge"), h("div", { key: 'ac152606518b2322ceb71268fce3b1cfd526d4f8', class: "progress-bar knowledge" }, h("div", { key: '35db3f114f7ee9fdf5d55fd30775367892f81646', "data-id": "4", "data-progress": "80", class: "progress" }))), h("div", { key: '6e23d05db03e0ef478f52937a57a7e1f2def3c30', class: "flex w-full flex-col gap-2" }, h("h6", { key: '80ae4718178336ae9657c29271e3c0178962d433' }, "Love"), h("div", { key: 'db7ad36960df5a4cbaaf8856fd9dd902a1778149', class: "progress-bar love" }, h("div", { key: '5fa178f1242a14b113329e458dea0876256b784d', "data-id": "4", "data-progress": "90", class: "progress" })))), h("article", { key: 'e165af6b139a9a7ce857f7ba55d549758c050e37', "data-id": "5", class: "tab-item w-full flex gap-6 items-center" }, h("div", { key: 'dc828a9e84c270c1d7515d8a6bc3ea2715cf3404', class: "item-title flex flex-col" }, h("h5", { key: '976a28334164ee37a81f4920ad0bea53faa08555' }, "GSAP"), " ", h("span", { key: '9da8f4a7419b7ed5b4e0459b8269ead3719bc18d' }, "2 YEARS")), h("div", { key: '31e8a3284b0b4d7850f0e9945dacea9e242ced7b', class: "flex w-full flex-col gap-2" }, h("h6", { key: 'fc2b405842371015ac0cccd8fea2da7bad598a01' }, "Knowledge"), h("div", { key: '1b960cc7f23c5ffcc0dd8bb9a6570c5f015f4fc9', class: "progress-bar knowledge" }, h("div", { key: '7157b043bf8b9b17ddc8097d8e66cb8f01ff8665', "data-id": "5", "data-progress": "70", class: "progress" }))), h("div", { key: 'f412de5a36c52cbdfa3a29fd85b2a709bdd5cdbc', class: "flex w-full flex-col gap-2" }, h("h6", { key: 'd7ff35ab57e82787e1731f96e6a311139281ffd6' }, "Love"), h("div", { key: '10dbf07a620b6773234b9a9ab3fad8fdfb201ab4', class: "progress-bar love" }, h("div", { key: '51966afe65fb72fc562d574ecb76fa7499b924cc', "data-id": "5", "data-progress": "100", class: "progress" })))), h("article", { key: '49367193b88d9120cc2c59f090b9688dc5907e89', "data-id": "6", class: "tab-item w-full flex gap-6 items-center" }, h("div", { key: '8616b5425ecb19093ea89138835ad94dacbde03f', class: "item-title flex flex-col" }, h("h5", { key: '033989e49bb67d6559b5067f0f05c67e5068251f' }, "TailwindCSS"), " ", h("span", { key: '637a2ffd7c92f0b19fb407ce6986aba07922f894' }, "3 YEARS")), h("div", { key: '24d7fdb8357df675bc8d9549e1dc04bb39e60361', class: "flex w-full flex-col gap-2" }, h("h6", { key: '46a803e9263cc9e9d0a96208245eafa7ca25f0d5' }, "Knowledge"), h("div", { key: '1dd2baeceeedda09ca3645bcf733a6ad657a6978', class: "progress-bar knowledge" }, h("div", { key: 'a58e1dd066578512d7b6f66b972ecf7bf2f1583e', "data-id": "6", "data-progress": "90", class: "progress" }))), h("div", { key: '5c7c957bb4f6c730ddb0f7d830777bd9107426b9', class: "flex w-full flex-col gap-2" }, h("h6", { key: '21e817cc51d69ee0c9229b1efa257066384c0e60' }, "Love"), h("div", { key: '7f2298c2f233ea70b7b157a7709af91dd3d40f2c', class: "progress-bar love" }, h("div", { key: '97e91ffbc5ba9ec84935a9951715027a2ae14d73', "data-id": "6", "data-progress": "90", class: "progress" })))), h("article", { key: '4f5148af1bb64a65f52c01d0a602250560cc6c5d', "data-id": "7", class: "tab-item w-full flex gap-6 items-center" }, h("div", { key: 'ff458edf2eb095dccd863dba95ba43cb6abf2a3c', class: "item-title flex flex-col" }, h("h5", { key: 'dee2f6a04905d54cd12bdf0b2e59260f214e2d02' }, "CSS"), " ", h("span", { key: '1e5d2a3d554b012f5e5407a1ebb65ae5fa6d1294' }, "15 YEARS")), h("div", { key: '5d1898f49a002d078d567ced9451f52ebc742726', class: "flex w-full flex-col gap-2" }, h("h6", { key: 'd92519be124acf53933991e13e11387760301512' }, "Knowledge"), h("div", { key: '1df21c84d8e303698dc9d8a67cc28e66fa2c82f4', class: "progress-bar knowledge" }, h("div", { key: '8b5997473ba4660cbdd546c334a300c728726ed6', "data-id": "7", "data-progress": "100", class: "progress" }))), h("div", { key: '58f5310ec142f8ae3cc086f9f04832e85251105e', class: "flex w-full flex-col gap-2" }, h("h6", { key: '1d8347154160773d5509fa5e16bc0b3ec230175d' }, "Love"), h("div", { key: 'bc302d112d4ff3698c9f5199aa7a076bd1cf49a5', class: "progress-bar love" }, h("div", { key: 'f4439a72ac45476b08724eceb30a3ca271b1b6c9', "data-id": "7", "data-progress": "100", class: "progress" })))), h("article", { key: '4c92d7d334f31d02a5d6a7c04fe4176842deeed3', "data-id": "8", class: "tab-item w-full flex gap-6 items-center" }, h("div", { key: '1a6e2797bebefb40848c0e9e985a1c6e4d7e55a8', class: "item-title flex flex-col" }, h("h5", { key: '27ea266f97bcc551ff55eaa2dd00b1b0ec45836c' }, "Git"), " ", h("span", { key: '5ba1d8695baa9bf92e9ff6739210c3c7abed2f54' }, "15 YEARS")), h("div", { key: 'a8adf280e6672b1cd073b1157494ad1d38481fd7', class: "flex w-full flex-col gap-2" }, h("h6", { key: 'ae648c926adc20d4cf1123b9bcbdf5a1eddfff99' }, "Knowledge"), h("div", { key: '3277836e14577bd0a1873d0b962d5b624661aef1', class: "progress-bar knowledge" }, h("div", { key: '8144d683d6696003bb938df6c76c2e970fde0f70', "data-id": "8", "data-progress": "80", class: "progress" }))), h("div", { key: '720cd3d0fd92c4c9757aa5f402c88f82edd14e75', class: "flex w-full flex-col gap-2" }, h("h6", { key: '8b6b00a77a9a924094234294c67fb040755dae48' }, "Love"), h("div", { key: '43644be5e133621718bf3bd0bbff4a730505a9d8', class: "progress-bar love" }, h("div", { key: 'c8babfbcf9ebd1180ccde45f8fe24615179cb1db', "data-id": "8", "data-progress": "100", class: "progress" }))))), h("main", { key: '71e1e45b4ccdbf3751cd353cb3342e0deb0aea1e', id: "future", class: "tab-content" }, h("article", { key: 'd3628f4f33cd4f6473a955dc33e815434987539c', class: "tab-item" }, h("p", { key: 'af87e534a1e3d88c75e26183b76105dd06446b0b', "data-id": "1" }, "I would not neccessarily say I am open to all offers when it comes to employment, I simultaneuosly enjoy what I do and where I am doing it which seems to be a rare thing these days, and therefore I have that wonderful luxury in being able to choose comfortably what comes next."), h("p", { key: '1fbc77d6bb090c4c2ebb0da37fbd0f9a9fe0cac6', "data-id": "2" }, "With that being said, my mind does wander to what may lie for me out there, to what challenges await, perhaps an exciting endeavor, perhaps amazing people with enough passion about what they do that one can hardly pass up the offer."), h("p", { key: '76babc43f9b44099b3df74f25a5afdc6c57618e4', "data-id": "3" }, "I believe in brands and business built on the love of the game, numbers are a conversation of course, but that love, that love for what you do and who you do it with... that makes one dream of waking up to the work ahead."), h("p", { key: '694ae92d9276d130cce9971e906bd63e21b8e40c', "data-id": "4" }, "Please feel free to contact me to discuss your passion and vision."), h("p", { key: 'a8cf6bf7daabb181bb0c2e21f36684ede218dcd2', "data-id": "5" }, "Mail me ", h("a", { key: 'd213c6439a3b261ed6f55e22ffa315d00cc1bf79', href: "mailto: craigtoit@gmail.com", class: "text-indigo-700" }, "craigtoit@gmail.com"), "."))))), h("div", { key: '1d45eb26726729feac8b0ed782ed61856e5a7eed', id: "logo", class: "logo opacity-0 absolute w-full z-0" }, h("img", { key: '04880a3e118409abbfbefb7cf23f7fb98b511533', class: "absolute -left-[278px]", src: "./assets/logo.png", alt: "" })), h("div", { key: '38af6b41bf0c5ead98a5f5d899171d483af7189a', id: "circles", class: "concentric w-full h-screen absolute z-0" }, h("div", { key: '77a8a943dd31c7f833f8014c1cb14f0849f1b096', id: "circle-1" }), h("div", { key: '69812718381c80bfb7a42a2a3a54bb4f5ae85502', id: "circle-2" }), h("div", { key: '2bb5d0a056c039326f96a05faebb4feef05c7f59', id: "circle-3" }), h("div", { key: '9063ec0ad3b454b320a7b13d1ca75096b4903f78', id: "circle-4" })), h("article", { key: '0d4574218ec07a1e0fcd4daca58320605a7e2a61', id: "intro", class: "intro-actions flex flex-col absolute m-auto" }, h("p", { key: 'dd7bdfeaeafd669dc9c725f24eff4b301b51100f', class: "intro-text", id: "intro-1" }, "Well, what do we have here.... I don't recognize you, how did you get here?"), h("p", { key: '63603d943d5620ef359d6c62bb59e69c9b20cd32', class: "intro-text", id: "intro-2" }, "I suppose the creator wanted you to be here, as far as I know he doesn't tell people about this place."), h("p", { key: '1a859405b524da75c04d166b9f6f880b070b5f5f', class: "intro-text", id: "intro-3" }, "Whatever the case may be, the creator wanted you to be here. I guess we should have a look around."), h("div", { key: 'b84410da74331b9cb17578ab991df0d30b252d56', id: "look", class: "look w-full", onClick: () => this.launchCV() }, h("svg", { key: 'ebf8aa4f1779ce16bfed347fbba54ef6d5c14156', class: "mx-auto mt-8", xmlns: "http://www.w3.org/2000/svg", width: "112", height: "112", viewBox: "0 0 32 32" }, h("g", { key: '15ad53f295e2ab88db096a215d98673dfda4e60c', fill: "#ececec" }, h("path", { key: 'fd9db414bb132efc1dc5c36ecda0a7285d614cb5', d: "M21 16a5 5 0 1 1-9.643-1.86a2 2 0 1 0 2.784-2.784A5 5 0 0 1 21 16" }), h("path", { key: 'bee6de324117d96acdf8a6f689f47193f8946dba', d: "M15.984 24.969a8.984 8.984 0 1 0 0-17.97a8.984 8.984 0 0 0 0 17.97m0-2a6.984 6.984 0 1 1 0-13.97a6.984 6.984 0 0 1 0 13.97" }), h("path", { key: '52b81547b55b217e83cb4756b3ace9405116c62d', d: "M16.156 30.313c7.819 0 14.157-6.338 14.157-14.157C30.313 8.338 23.975 2 16.156 2C8.338 2 2 8.338 2 16.156s6.338 14.157 14.156 14.157m0-2C9.443 28.313 4 22.87 4 16.156C4 9.443 9.443 4 16.156 4s12.157 5.443 12.157 12.156s-5.443 12.157-12.157 12.157" }))))), h("p", { key: '5b241e7bad6a3c9cf3e4b4eec808028f9018210e', id: "footer", class: "footer absolute text-lg mx-auto w-fit h-fit font-sans" }, "Hand built with StencilJS + GSAP + Tailwind CSS \u00A0 [ ", h("span", { key: '06571accc575e596a001de67d3cbf28ff7a025e6', onClick: () => this.resetThisPlace() }, "Restart the journey"), " ]")));
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
