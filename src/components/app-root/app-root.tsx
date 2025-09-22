import { Component, Element, h } from '@stencil/core';

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
  private intro: HTMLElement;
  private circles: HTMLElement;

  private logo: HTMLElement;
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

  hideJourney(){
    this.intro.remove();
    this.circles.remove();
  }

  launchCV(){
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
    return `${years} years, ${months} months, ${days} days`;
  }

  render() {
    return (
      <section id="wrapper" class="wrapper relative w-screen min-h-screen h-fit" style={{"background-image": "url('./assets/texture.jpg')"}}>
        <section id="cvbg" class="opacity-0 cvbg pt-[70px] px-5 2xl:px-10 2xl:pt-0 absolute w-screen h-screen flex flex-col 2xl:flex-row justify-end 2xl:items-end 2xl:justify-center gap-[2%]" style={{"background-image": "url('./assets/cvbg.jpg')"}}>
          {/* Biography */}
          <section id="about" class="about w-full h-[38%] 2xl:w-[30%] 2xl:h-[666px] relative z-10">           
            <article class="h-full pr-3 2xl:pr-0">            
              <p data-id="1">
                Hello there, my name is Craig du Toit and I am a Front-End Engineer and as you can clearly see, I have a passion for animation and interactivity on the web. 
              </p>
              <p data-id="2">
                I have been working in the industry for 15 years and this serves as not only a demonstration of my craft but also a breakdown of my recent work history, responsibilities, tech stack and hobbies.
              </p>
              <p data-id="3">
                I aspire to be a dependable and ever eager colleague, a loving husband, a good father to my son - a 2 and half year sweetheart in the hieght of the terrible twos and our newborn due in May 2026.
              </p>
              <p data-id="4">
                My hobbies include running, playing padel with good friends and enjoying some seriously good food. I am a social and well-spoken person and that doesn't have a hard time making lifelong friends.
              </p>
              <div id="socials" class="socials flex gap-2">
                <a href="https://www.linkedin.com/in/craigddutoit/" target="_blank"><svg id="linkedin" class="translate-y-100" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 256 256"><path fill="#480eff" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"/></svg></a>
              </div>
            </article>
          </section>
          <section id="skills" class="skills w-full h-[60%] 2xl:w-[68%] 2xl:h-[666px] tabbed relative z-10">
            <input type="radio" id="tab1" name="css-tabs" checked/>
            <input type="radio" id="tab2" name="css-tabs"/>
            <input type="radio" id="tab3" name="css-tabs"/>
            
            <ul class="tabs">
              <li id="skillstab1" class="tab -translate-y-28"><label htmlFor="tab1">Position Held</label></li>
              <li id="skillstab2" class="tab -translate-y-28" onClick={() => this.playStack()}><label htmlFor="tab2">Stack</label></li>
              <li id="skillstab3" class="tab -translate-y-28" onClick={() => this.playFuture()}><label htmlFor="tab3">The Future</label></li>
            </ul>
            
            <main id="history" class="tab-content h-full">            
              <article class="tab-item h-full 2xl:h-[458px] pr-3 2xl:pr-0">
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
                      I am in charge of project planning, understanding business requirements and delivering above expected quality on project delivery whilst standardizing team's understanding to deliver similar results.
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
            <main id="stack" class="tab-content h-full 2xl:h-[458px]">
              <div class="content w-full h-full flex flex-col gap-4 pr-3 2xl:pr-0">
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
              </div>            
            </main>
            <main id="future" class="tab-content h-full">            
              <article class="tab-item h-full pr-3 2xl:pr-0">
                <p data-id="1">
                  I would not neccessarily say I am open to all offers when it comes to employment, I simultaneuosly enjoy what I do and where I am doing it which seems to be a rare thing these days, and therefore I have that wonderful luxury in being able to choose comfortably what comes next.
                </p>
                <p data-id="2">
                  With that being said, my mind does wander to what may lie for me out there, to what challenges await, perhaps an exciting endeavor, perhaps amazing people with enough passion about what they do that one can hardly pass up the offer.
                </p>
                <p data-id="3">
                  I believe in brands and business built on the love of the game, numbers are a conversation of course, but that passion for what you do and who you do it with... that makes one dream of waking up to the work ahead. 
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
        <p id="footer" class="footer absolute text-lg mx-auto w-fit h-fit font-sans">
          Hand built with StencilJS + GSAP + Tailwind CSS
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

    this.logo = this.el.shadowRoot.getElementById('logo');
    this.cvbg = this.el.shadowRoot.getElementById('cvbg');

    this.launchCV();

  
  }

}
