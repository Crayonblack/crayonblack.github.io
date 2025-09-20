import { Component, Element, State, h } from '@stencil/core';

import { gsap } from "gsap";
    
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(MotionPathHelper,MotionPathPlugin,MorphSVGPlugin,ScrambleTextPlugin,ScrollTrigger,ScrollToPlugin,SplitText);

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})

export class AppRoot {
  private timeline = gsap.timeline();
  private intro: HTMLElement;
  private circles: HTMLElement;

  private look: HTMLElement;
  private logo: HTMLElement;
  private line1: HTMLElement;
  private line2: HTMLElement;
  private line3: HTMLElement;
  private circle1: HTMLElement;
  private circle2: HTMLElement;
  private circle3: HTMLElement;
  private circle4: HTMLElement;
  private cvbg: HTMLElement;
  private about: HTMLElement;
  private skills: HTMLElement;
  private history: HTMLElement;
  private historyh3: HTMLElement;
  private historyh5: HTMLElement;
  private historyh6: HTMLElement;
  private historyDivider: HTMLElement;
  private future: HTMLElement;
  private socials: HTMLElement;
  private skillstab1: HTMLElement;
  private skillstab2: HTMLElement;
  private skillstab3: HTMLElement;
  private footer: HTMLElement;
  @Element() el: HTMLDivElement;
  @State() journeyViewed: string = 'false';

  fadeLine(number){
    if(number === 1){
      this.timeline.to(this.line1, { duration: 1, delay: 2, opacity: 0.3, scale: 0.8, translateY: -30, ease:  "expoScale", onComplete: () => this.hideLine(1) });
    } else {
      this.timeline.to(this.line2, { duration: 1, delay: 0, opacity: 0.6, scale: 0.9, translateY: -15, ease:  "expoScale", onComplete: () => this.hideLine(2) });
    }
  }

  hideLine(number){
    if(number === 1){
      gsap.to(this.line1, { duration: 1, delay: 7, opacity: 0, ease:  "expoScale" });
    } else {
      gsap.to(this.line2, { duration: 1, delay: 3, opacity: 0, });
    }
  }

  hideJourney(){
    this.intro.remove();
    this.circles.remove();
  }

  resetThisPlace(){
    this.journeyViewed = localStorage.set('journeyViewed', 'false');
    window.location.reload();
  }

  launchCV(){
    localStorage.setItem('journeyViewed', 'true');
    gsap.to(this.line3, { duration: 2, delay: 0.2, y: -100, opacity: 0, scale: 0,  ease:  "expoScale"});
    gsap.to(this.look, { duration: 2, delay: 0.5, opacity: 0, y: 100, ease:  "expoScale" });
    gsap.to(this.circle1, { duration: 4, delay: 1, scale: 6, opacity: 0, ease:  "expoScale",});
    gsap.to(this.circle2, { duration: 4, delay: 0.9, scale: 5, opacity: 0, ease:  "expoScale",});
    gsap.to(this.circle3, { duration: 4, delay: 0.8, scale: 4, opacity: 0, ease:  "expoScale",});
    gsap.to(this.circle4, { duration: 4, delay: 0.7, scale: 3, opacity: 0, ease:  "expoScale", onComplete: () => this.hideJourney() });
    gsap.to(this.logo, { duration: 2, delay: 1, opacity: 1, ease:  "slow"});
    gsap.to(this.cvbg, { duration: 2, delay: 2, opacity: 1, ease:  "slow"});
    gsap.to(this.about, { duration: 2, delay: 3, y: 0, opacity: 1, ease:  "expoScale"});
    gsap.to(this.about, { duration: 2, delay: 5, borderRadius: 30, boxShadow: "20px 20px 60px #9e9e9e, -20px -20px 60px #bebebe", border: "0px solid transparent", backgroundColor: "rgba(255,255,255,0.5)", backdropFilter: "blur(4px)", ease: "expoScale", onComplete: () => this.playBiography()});
    gsap.to(this.skills, { duration: 2, delay: 3, y: 0, opacity: 1, ease:  "expoScale"});
    gsap.to(this.skills, { duration: 2, delay: 5, borderRadius: 30, boxShadow: "20px 20px 60px #9e9e9e, -20px -20px 60px #bebebe", border: "0px solid transparent", backgroundColor: "rgba(255,255,255,0.5)", backdropFilter: "blur(4px)", ease: "expoScale"});
    gsap.to(this.history, { duration: 1.2, delay: 6.4, y: 0, opacity: 1, ease:  "expoScale", onComplete: () => this.playResponsibilities()})
    gsap.to(this.socials, { duration: 1.4, delay: 7.4, y: 0, ease:  "elastic"});
    gsap.to(this.skillstab1, { duration: 1.4, delay: 9, y: 0, ease:  "elastic"});
    gsap.to(this.skillstab2, { duration: 1.4, delay: 9.2, y: 0, ease:  "elastic"});
    gsap.to(this.skillstab3, { duration: 1.4, delay: 9.4, y: 0, ease:  "elastic"});
    gsap.to(this.footer, { duration: 2, delay: 1, color: "#141414", ease:  "slow"});
  }
  
  playBiography(){
    let aboutitem = this.el.shadowRoot.querySelectorAll('#about p');
    console.log(aboutitem);
    aboutitem.forEach(item => {
      gsap.to(item, { duration: 1.2, delay: (item.attributes['data-id'].nodeValue as unknown as number / 4), x: 0, opacity: 1, ease:  "expoScale"});
    });
  }

  playResponsibilities(){
    let descriptionitem = this.el.shadowRoot.querySelectorAll('#description p');
    descriptionitem.forEach(item => {
      gsap.to(item, { duration: 1.2, delay: (item.attributes['data-id'].nodeValue as unknown as number / 4), y: 0, opacity: 1, ease:  "expoScale"});
    });
    let responsibilityitem = this.el.shadowRoot.querySelectorAll('#responsibilities  p');
    responsibilityitem.forEach(item => {
      gsap.to(item, { duration: 0.8, delay: (item.attributes['data-id'].nodeValue as unknown as number / 3), scale: 1, ease:  "elastic.out(1,0.6)"});
    });

    gsap.to(this.historyh3, { duration: 1.2, delay: 0.6, opacity: 1, ease:  "expoScale"});
    gsap.to(this.historyh5, { duration: 1.2, delay: 1, opacity: 1, ease:  "expoScale"});
    gsap.to(this.historyh6, { duration: 1.2, delay: 1.4, opacity: 1, ease:  "expoScale"});
    gsap.to(this.historyDivider, { duration: 1.2, delay: 1.6, x: 0, opacity: 1, ease:  "expoScale"});    
  }

  playStack(){
    let skillsitem = this.el.shadowRoot.querySelectorAll('#stack .tab-item');
    skillsitem.forEach(item => {
      gsap.to(item, { duration: 1.2, delay: (item.attributes['data-id'].nodeValue as unknown as number / 4), y: 0, opacity: 1, stagger: 1, ease:  "expoScale"});
    });
    let knowledgeprogress = this.el.shadowRoot.querySelectorAll('.knowledge .progress');
    knowledgeprogress.forEach(item => {
      gsap.to(item, { duration: 2, delay: (item.attributes['data-id'].nodeValue as unknown as number / 2), scaleX: (item.attributes['data-progress'].nodeValue as unknown as number / 100), ease:  "expoScale"});
    });
    let loveprogress = this.el.shadowRoot.querySelectorAll('.love .progress');
    loveprogress.forEach(item => {
      gsap.to(item, { duration: 2, delay: (item.attributes['data-id'].nodeValue as unknown as number / 2), scaleX: (item.attributes['data-progress'].nodeValue as unknown as number / 100), ease:  "expoScale"});
    });
  }

  playFuture(){
    gsap.to(this.future, { duration: 1.2, delay: 0.5, y: 0, opacity: 1, ease:  "expoScale"});
    let futureitem = this.el.shadowRoot.querySelectorAll('#future p');
    futureitem.forEach(item => {
      gsap.to(item, { duration: 1.2, delay: (item.attributes['data-id'].nodeValue as unknown as number / 4), y: 0, opacity: 1, ease:  "expoScale"});
    });    
  }

  dateHandler(past){
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
    console.log(`Difference: ${years} years, ${months} months, ${days} days`); 
    return `${years} years, ${months} months, ${days} days`;
  }

  componentWillLoad() {
    this.journeyViewed = localStorage.getItem('journeyViewed');
  }

  render() {
    return (
      <section id="wrapper" class="wrapper relative overflow-hidden w-screen h-screen" style={{"background-image": "url('./assets/texture.jpg')"}}>
        <section id="cvbg" class="opacity-0 cvbg absolute w-screen h-screen flex items-end gap-[2%]" style={{"background-image": "url('./assets/cvbg.jpg')"}}>
          {/* Biography */}
          <section id="about" class="about relative z-10">           
            <article>            
              <p data-id="1">
                Hello there, my name is Craig du Toit and I am a Front-End Engineer and as you can clearly see, I have a passion for animation and interactivity on the web. 
              </p>
              <p data-id="2">
                I have been working in the industry for 15 years and this serves as not only a demonstration of my craft but also a detailed breakdown of my recent work history, skills, tech stack and hobbies.
              </p>
              <p data-id="3">
                I aspire to be a dependable and ever eager colleague, a loving husband, a good father to my son - a 2 and half year old toddler with anger issues and my "hopefully daughter" newborn due in May 2026.
              </p>
              <p data-id="4">
                My hobbies include running, playing padel with good friends and enjoying some seriously good food. I am a social and well spoken person and I don't have a hard time making lifelong friends.
              </p>
              <div id="socials" class="socials flex gap-2">
                <a href="https://www.linkedin.com/in/craigddutoit/" target="_blank"><svg id="linkedin" class="translate-y-100" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 256 256"><path fill="#480eff" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"/></svg></a>
              </div>
            </article>
          </section>
          <section id="skills" class="skills tabbed">
            <input type="radio" id="tab1" name="css-tabs" checked/>
            <input type="radio" id="tab2" name="css-tabs"/>
            <input type="radio" id="tab3" name="css-tabs"/>
            
            <ul class="tabs">
              <li id="skillstab1" class="tab -translate-y-28"><label htmlFor="tab1">Position Held</label></li>
              <li id="skillstab2" class="tab -translate-y-28" onClick={() => this.playStack()}><label htmlFor="tab2">Stack</label></li>
              <li id="skillstab3" class="tab -translate-y-28" onClick={() => this.playFuture()}><label htmlFor="tab3">The Future</label></li>
            </ul>
            
            <main id="history" class="tab-content">            
              <article class="tab-item h-[458px]">
                <h3 class="opacity-0">Software Developer - Team Lead | Promotions & Retention Marketing</h3>
                <h5 class="opacity-0">Osiris Trading · Full-time</h5>
                <h6 class="opacity-0">Nov 2021 - Present · {this.dateHandler('2021-11-01T10:00:00Z')} </h6>
                <div class="mt-4 mb-3 divider bg-gradient-to-r from-indigo-700 via-40% via-transparent to-transparent -translate-[120%]"></div>
                <div class="flex flex-col h-full justify-between">
                  <div id="description" class="description">
                    <p data-id="1">
                      Building bespoke promotions focused on delivering engaging experiences for the global Betway Brand. Utilizing the latest technology to deliver fast, data efficient and visually stunning UI and UX projects. Working with a team of dedicated back-end and front-end engineers catering to both business and customer needs.
                    </p>
                    <p data-id="2">
                      I am in charge of project planning, understanding business requirements and delivering above expected quility on project delivery whilst standardizing team understanding to deliver similar results.
                    </p>
                    <p data-id="3">
                      Feel free to visit my <a class="text-indigo-700" href="https://www.linkedin.com/in/craigddutoit/" target="_blank">LinkedIn Profile</a> for broader career experience.
                    </p>
                  </div>
                  <div class="requirements">
                    <h5>Responsibilities:</h5>
                    <div id="responsibilities" class="flex gap-1 flex-wrap">
                      <p data-id="1">Defining design</p>
                      <p data-id="2">Developing Front-End</p>
                      <p data-id="3">Collaboration on Design Refinement</p>
                      <p data-id="4">Collaboration on Back-end Data structures</p>
                      <p data-id="5">Project Planning</p>
                      <p data-id="6">Team Planning</p>
                      <p data-id="7">Project Feedback sessions</p>
                      <p data-id="8">Ongoing support of live software</p>
                      <p data-id="9">Future Proofing Project Structures</p>
                      <p data-id="10">Creation & Maintenance of Front-End Brand UI</p>
                      <p data-id="11">Mentorship & Training</p>
                    </div>
                  </div>
                </div>
              </article>
            </main>
            <main id="stack" class="tab-content flex flex-col gap-4 h-[458px]">            
              <article data-id="1" class="tab-item w-full flex gap-6 items-center">
                <div class="item-title flex flex-col">
                  <h5>StencilJS</h5> <span>4 YEARS</span>
                </div>
                <div class="flex w-full flex-col gap-2">
                  <h6>Knowledge</h6>
                  <div class="progress-bar knowledge">
                    <div data-id="1" data-progress="90" class="progress"></div>
                  </div>                  
                </div>
                <div class="flex w-full flex-col gap-2">
                  <h6>Love</h6>
                  <div class="progress-bar love">
                    <div data-id="1" data-progress="100" class="progress"></div>
                  </div>                  
                </div>
              </article>
              <article data-id="2" class="tab-item w-full flex gap-6 items-center">
                <div class="item-title flex flex-col">
                  <h5>React</h5> <span>2 YEARS</span>
                </div>
                <div class="flex w-full flex-col gap-2">
                  <h6>Knowledge</h6>
                  <div class="progress-bar knowledge">
                    <div data-id="2" data-progress="70" class="progress"></div>
                  </div>                  
                </div>
                <div class="flex w-full flex-col gap-2">
                  <h6>Love</h6>
                  <div class="progress-bar love">
                    <div data-id="2" data-progress="90" class="progress"></div>
                  </div>                  
                </div>
              </article>
              <article data-id="3" class="tab-item w-full flex gap-6 items-center">
                <div class="item-title flex flex-col">
                  <h5>Angular</h5> <span>2 YEARS</span>
                </div>
                <div class="flex w-full flex-col gap-2">
                  <h6>Knowledge</h6>
                  <div class="progress-bar knowledge">
                    <div data-id="3" data-progress="70" class="progress"></div>
                  </div>                  
                </div>
                <div class="flex w-full flex-col gap-2">
                  <h6>Love</h6>
                  <div class="progress-bar love">
                    <div data-id="3" data-progress="70" class="progress"></div>
                  </div>                  
                </div>
              </article>
              <article data-id="4" class="tab-item w-full flex gap-6 items-center">
                <div class="item-title flex flex-col">
                  <h5>TypeScript</h5> <span>5 YEARS</span>
                </div>
                <div class="flex w-full flex-col gap-2">
                  <h6>Knowledge</h6>
                  <div class="progress-bar knowledge">
                    <div data-id="4" data-progress="80" class="progress"></div>
                  </div>                  
                </div>
                <div class="flex w-full flex-col gap-2">
                  <h6>Love</h6>
                  <div class="progress-bar love">
                    <div data-id="4" data-progress="90" class="progress"></div>
                  </div>                  
                </div>
              </article>
              <article data-id="5" class="tab-item w-full flex gap-6 items-center">
                <div class="item-title flex flex-col">
                  <h5>GSAP</h5> <span>2 YEARS</span>
                </div>
                <div class="flex w-full flex-col gap-2">
                  <h6>Knowledge</h6>
                  <div class="progress-bar knowledge">
                    <div data-id="5" data-progress="70" class="progress"></div>
                  </div>                  
                </div>
                <div class="flex w-full flex-col gap-2">
                  <h6>Love</h6>
                  <div class="progress-bar love">
                    <div data-id="5" data-progress="100" class="progress"></div>
                  </div>                  
                </div>
              </article>
              <article data-id="6" class="tab-item w-full flex gap-6 items-center">
                <div class="item-title flex flex-col">
                  <h5>TailwindCSS</h5> <span>3 YEARS</span>
                </div>
                <div class="flex w-full flex-col gap-2">
                  <h6>Knowledge</h6>
                  <div class="progress-bar knowledge">
                    <div data-id="6" data-progress="90" class="progress"></div>
                  </div>                  
                </div>
                <div class="flex w-full flex-col gap-2">
                  <h6>Love</h6>
                  <div class="progress-bar love">
                    <div data-id="6" data-progress="90" class="progress"></div>
                  </div>                  
                </div>
              </article>
              <article data-id="7" class="tab-item w-full flex gap-6 items-center">
                <div class="item-title flex flex-col">
                  <h5>CSS</h5> <span>15 YEARS</span>
                </div>
                <div class="flex w-full flex-col gap-2">
                  <h6>Knowledge</h6>
                  <div class="progress-bar knowledge">
                    <div data-id="7" data-progress="100" class="progress"></div>
                  </div>                  
                </div>
                <div class="flex w-full flex-col gap-2">
                  <h6>Love</h6>
                  <div class="progress-bar love">
                    <div data-id="7" data-progress="100" class="progress"></div>
                  </div>                  
                </div>
              </article>
              <article data-id="8" class="tab-item w-full flex gap-6 items-center">
                <div class="item-title flex flex-col">
                  <h5>Git</h5> <span>15 YEARS</span>
                </div>
                <div class="flex w-full flex-col gap-2">
                  <h6>Knowledge</h6>
                  <div class="progress-bar knowledge">
                    <div data-id="8" data-progress="80" class="progress"></div>
                  </div>                  
                </div>
                <div class="flex w-full flex-col gap-2">
                  <h6>Love</h6>
                  <div class="progress-bar love">
                    <div data-id="8" data-progress="100" class="progress"></div>
                  </div>                  
                </div>
              </article>
            </main>
            <main id="future" class="tab-content">            
              <article class="tab-item">
                <p data-id="1">
                  I would not neccessarily say I am open to all offers when it comes to employment, I simultaneuosly enjoy what I do and where I am doing it which seems to be a rare thing these days, and therefore I have that wonderful luxury in being able to choose comfortably what comes next.
                </p>
                <p data-id="2">
                  With that being said, my mind does wander to what may lie for me out there, to what challenges await, perhaps an exciting endeavor, perhaps amazing people with enough passion about what they do that one can hardly pass up the offer.
                </p>
                <p data-id="3">
                  I believe in brands and business built on the love of the game, numbers are a conversation of course, but that love, that love for what you do and who you do it with... that makes one dream of waking up to the work ahead. 
                </p>
                <p data-id="4">
                  Please feel free to contact me to discuss your passion and vision.
                </p>
                <p data-id="5">
                  Mail me <a href="mailto: craigtoit@gmail.com" class="text-indigo-700">craigtoit@gmail.com</a>.
                </p>
              </article>
            </main>
          </section>
        </section>
        <div id="logo" class="logo opacity-0 absolute w-full z-0">
          <img class="absolute -left-[278px]" src="./assets/logo.png" alt="" />
        </div>
        <div id="circles" class="concentric w-full h-screen absolute z-0">
          <div id="circle-1"></div>
          <div id="circle-2"></div>
          <div id="circle-3"></div>
          <div id="circle-4"></div>
        </div>
        <article id="intro" class="intro-actions flex flex-col absolute m-auto">
          <p class="intro-text" id="intro-1">Well, what do we have here.... I don't recognize you, how did you get here?</p>
          <p class="intro-text" id="intro-2">I suppose the creator wanted you to be here, as far as I know he doesn't tell people about this place.</p>
          <p class="intro-text" id="intro-3">Whatever the case may be, the creator wanted you to be here. I guess we should have a look around.</p>
          <div id="look" class="look w-full" onClick={() => this.launchCV()}>
            <svg class="mx-auto mt-8" xmlns="http://www.w3.org/2000/svg" width="112" height="112" viewBox="0 0 32 32"><g fill="#ececec"><path d="M21 16a5 5 0 1 1-9.643-1.86a2 2 0 1 0 2.784-2.784A5 5 0 0 1 21 16"/><path d="M15.984 24.969a8.984 8.984 0 1 0 0-17.97a8.984 8.984 0 0 0 0 17.97m0-2a6.984 6.984 0 1 1 0-13.97a6.984 6.984 0 0 1 0 13.97"/><path d="M16.156 30.313c7.819 0 14.157-6.338 14.157-14.157C30.313 8.338 23.975 2 16.156 2C8.338 2 2 8.338 2 16.156s6.338 14.157 14.156 14.157m0-2C9.443 28.313 4 22.87 4 16.156C4 9.443 9.443 4 16.156 4s12.157 5.443 12.157 12.156s-5.443 12.157-12.157 12.157"/></g></svg>
          </div>
        </article>
        <p id="footer" class="footer absolute text-lg mx-auto w-fit h-fit font-sans">
          Hand built with StencilJS + GSAP + Tailwind CSS &nbsp; [ <span class="text-indigo-700" onClick={() => this.resetThisPlace()}>Restart the journey</span> ]
        </p>
      </section>
    );
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

    console.log('this.journeyViewed: ', this.journeyViewed);
    if(this.journeyViewed === 'true'){
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
    gsap.fromTo(
      this.look,
      {opacity: 0, y: 140},
      {opacity: 1, y:0, duration: 2, delay: 14, ease: "expoScale"}
    )
    // end
    gsap.fromTo(
      this.circle1,
      {scale: 0.9},
      {scale: 1.1, duration: 2, yoyo: true, ease: "ease", delay: 2, repeat: -1, repeatDelay: 6}
    )
    gsap.fromTo(
      this.circle2,
      {scale: 0.9},
      {scale: 1.1, duration: 2, yoyo: true, ease: "ease", delay: 2.5, repeat: -1, repeatDelay: 6}
    )
    gsap.fromTo(
      this.circle3,
      {scale: 0.9},
      {scale: 1.1, duration: 2, yoyo: true, ease: "ease", delay: 3, repeat: -1, repeatDelay: 6}
    )
    gsap.fromTo(
      this.circle4,
      {scale: 0.9},
      {scale: 1.1, duration: 2, yoyo: true, ease: "ease", delay: 3.5, repeat: -1, repeatDelay: 6}
    )
  }

}
