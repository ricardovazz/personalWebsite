import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} loading="lazy" />
);

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({children, className, onClick }) => (
  <button className={`box-border relative shrink-0 p-3 text-center rounded appearance-none cursor-pointer ${className}`} onClick={onClick}>
    {children}
  </button>
);

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => (
  <header className="flex relative flex-row gap-5 justify-between items-center self-stretch my-3 w-full">
    <Image src="https://cdn.builder.io/api/v1/image/assets%2F58b7270f8f1f4ad39b41f09304ba68d5%2F54dcc48553824460b387dada070203e5" alt="Company Logo" className="object-contain overflow-hidden shrink-0 mr-auto w-full max-h-12 aspect-[1.27] max-w-[80px] min-h-[20px] min-w-[20px] max-md:grow max-md:mr-auto max-md:w-auto max-sm:mr-auto max-sm:max-h-[42px] max-sm:max-w-[53px] max-sm:min-w-[42px]" />
    <div className="flex relative flex-row mt-px ml-auto w-auto grow-0 max-md:hidden max-sm:hidden">
      <Button className="mr-4 ml-auto text-black">Start /&gt;</Button>
      <div className="box-border flex relative flex-col shrink-0 my-auto w-0.5 h-8 bg-stone-300" />
      <div className="flex relative flex-row gap-4 ml-4">
        <Button>About /&gt;</Button>
        <Button className="bg-zinc-800 text-white">Contact</Button>
      </div>
    </div>
  </header>
);
interface PersonalInfoProps {
    title: string;
    content: string;
  }
  
  const PersonalInfo: React.FC<PersonalInfoProps> = ({ title, content }) => (
    <section>
      <header className="text-4xl tracking-wide leading-10 text-left">{title}</header>
      <p className="mt-8 text-xl tracking-normal leading-8">{content}</p>
    </section>
  );
  
  const ProfileImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <img loading="lazy" src={src} alt={alt} className="object-contain my-5 w-full aspect-square" />
  );
  
  const IntroCard: React.FC = () => {
   return (
      <div className="flex flex-col px-5 mx-auto max-w-full w-[1040px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <PersonalInfo
              title="👋 Hello, my name is Ricardo"
              content="I am a Software Engineer with 3+ years experience focusing in backend and cloud development for the financial services industry. A blockchain and DLT enthusiast, constantly exploring new technologies."
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <ProfileImage
              src="https://cdn.builder.io/api/v1/image/assets%2F58b7270f8f1f4ad39b41f09304ba68d5%2F3b578a3635b444f2913d5d8dc0ded856"
              alt="Ricardo standing with a smile in professional attire"
            />
          </div>
        </div>
      </div>
    );
  };

  function MyComponent2() {
    return (
      <div className="flex flex-col px-5 mx-auto max-w-full w-[1040px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col m-auto max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl leading-10 max-md:max-w-full">👋</div>
              <div className="mt-2.5 text-4xl tracking-wide leading-10 text-left max-md:max-w-full">
                Hello, my name is Ricardo
              </div>
              <div className="mt-8 text-xl tracking-normal leading-8 max-md:mb-5 max-md:max-w-full">
                I am a Software Engineer with 4+ years experience, focusing in
                backend and cloud development for the financial services industry.
                A blockchain and DLT enthusiast, constantly exploring new
                technologies.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets%2F58b7270f8f1f4ad39b41f09304ba68d5%2F3b578a3635b444f2913d5d8dc0ded856?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F58b7270f8f1f4ad39b41f09304ba68d5%2F3b578a3635b444f2913d5d8dc0ded856?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F58b7270f8f1f4ad39b41f09304ba68d5%2F3b578a3635b444f2913d5d8dc0ded856?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F58b7270f8f1f4ad39b41f09304ba68d5%2F3b578a3635b444f2913d5d8dc0ded856?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F58b7270f8f1f4ad39b41f09304ba68d5%2F3b578a3635b444f2913d5d8dc0ded856?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F58b7270f8f1f4ad39b41f09304ba68d5%2F3b578a3635b444f2913d5d8dc0ded856?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F58b7270f8f1f4ad39b41f09304ba68d5%2F3b578a3635b444f2913d5d8dc0ded856?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F58b7270f8f1f4ad39b41f09304ba68d5%2F3b578a3635b444f2913d5d8dc0ded856"
              className="object-contain my-5 w-full aspect-square max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    );
}

function MyComponent() {
    return (
      <div className="flex flex-col gap-5 justify-between px-32 pt-16 text-base text-lime-700 bg-zinc-800 max-md:pl-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
            <div className="flex flex-col flex-1 items-start m-auto text-white max-md:max-w-full">
              <div className="flex-auto gap-5 mb-5 text-lg font-light leading-7 text-zinc-400">
                About /&gt;
              </div>
              <div className="flex gap-5 justify-between mt-2.5 text-white">
                <div className="text-white leading-[160%]">01</div>
                <div className="leading-6 text-white">
                  <span className="text-stone-50">class&nbsp;</span>
                  <span color="#f7ce5c" className="">
                    Ricardo Vaz
                  </span>
                  <span className="text-stone-50">&nbsp;&#123;</span>
                  <br />
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-2.5 text-white">
                <div className="text-white leading-[160%]">02</div>
                <div className="leading-6 text-white">
                  <span className="text-stone-50">··//</span>
                  <br />
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-2.5 text-white">
                <div className="text-white leading-[160%]">03</div>
                <div className="leading-6 text-white">
                  <span className="text-stone-50">··//</span>
                  <br />
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-2.5 text-white">
                <div className="text-white leading-[160%]">04</div>
                <div className="leading-6 text-white">
                  <span className="text-stone-50">··</span>
                  <span color="#f7ce5c" className="">
                    constructor
                  </span>
                  <span color="#ffffff" className="">
                    ()
                  </span>
                  <span className="text-stone-50">&nbsp;&#123;</span>
                  <br />
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-2.5 text-white">
                <div className="text-white leading-[160%]">05</div>
                <div className="leading-6 text-white">
                  <span color="#ffffff" className="">
                    ····this
                  </span>
                  <span className="text-stone-50">.</span>
                  <span color="#50e3c2" className="">
                    name
                  </span>
                  <span className="text-green-500">&nbsp;</span>
                  <span color="#ffffff" className="">
                    =
                  </span>
                  <span className="text-green-500">&nbsp;</span>
                  <span color="#b8e986" className="">
                    <span className="">&apos;</span>
                    <span className="">
                      <span className="">Ricardo Vaz</span>
                    </span>
                    <span className="">&apos;</span>
                  </span>
                  <br />
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-2.5 text-white">
                <div className="text-white leading-[160%]">06</div>
                <div className="leading-6 text-white">
                  <span color="#ffffff" className="">
                    ····this
                  </span>
                  <span className="text-stone-50">.</span>
                  <span color="#50e3c2" className="">
                    dayOfBirthTimestamp
                  </span>
                  <span className="text-amber-500">&nbsp;</span>
                  <span className="text-amber-500">
                    <span color="#ffffff" className="">
                      =
                    </span>
                  </span>
                  <span className="text-amber-500">&nbsp;</span>
                  <span className="text-amber-500">602745592</span>
                  <br />
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-2.5 text-white">
                <div className="text-white leading-[160%]">07</div>
                <div className="leading-6 text-white">
                  <span color="#ffffff" className="">
                    ····this
                  </span>
                  <span className="text-stone-50">.</span>
                  <span color="#50e3c2" className="">
                    email
                  </span>
                  <span className="text-green-500">&nbsp;</span>
                  <span color="#ffffff" className="">
                    =
                  </span>
                  <span className="text-green-500">&nbsp;</span>
                  <span className="text-green-500">
                    <span color="#b8e986" className="">
                      &apos;ricardodaniel.vaz&#125;gmail.com&apos;
                    </span>
                  </span>
                  <br />
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-2.5 text-white">
                <div className="text-white leading-[160%]">08</div>
                <div className="leading-6 text-white">
                  ··<span color="#f9f9f9">&#125;</span>
                </div>
              </div>
              <div className="flex flex-row gap-5 justify-between mt-3 max-md:flex max-md:flex-row">
                <div className="text-white leading-[160%]">09</div>
                <div className="flex-auto leading-6 text-green-500 max-md:max-w-full">
                  <span className="text-stone-50">··</span>
                  <span className="text-amber-300">
                    workExperience
                  </span>
                  <span className="text-stone-50">() &#123;</span>
                  <br />
                </div>
              </div>
              <div className="flex flex-row gap-5 justify-between mt-3 max-md:flex max-md:flex-row">
                <div className="text-white leading-[160%]">10</div>
                <div className="flex-auto leading-6 text-green-500 max-md:max-w-full">
                  <span className="text-stone-50">····</span>
                  <span className="text-stone-50">
                    <span color="#ffffff" className="">
                      return
                    </span>
                  </span>
                  <span className="text-stone-50">&nbsp;[</span>
                  <br />
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-3 max-md:flex max-md:flex-row">
                <div className="text-white leading-[160%]">11</div>
                <div className="flex-auto leading-6 text-green-500 max-md:max-w-full">
                  <span color="#ffffff">······</span>
                  <span color="#ffffff">&#123;</span>
                  <span className="text-stone-50">&nbsp;</span>
                  <span color="#b8e986">&apos;2021-now&apos;</span>
                  <span className="text-stone-50"> :</span>
                  <span className="text-green-500"> </span>
                  <span color="#b8e986">
                    &apos;Application Engineer at GFT Technologies&apos;
                  </span>
                  <span className="text-stone-50"> &#125;</span>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-2.5 max-md:flex max-md:flex-row">
                <div className="text-white leading-[160%]">12</div>
                <div className="flex-auto leading-6 text-green-500 max-md:max-w-full">
                  <span color="#ffffff">······&#123;</span>
                  <span className="text-stone-50">&nbsp;</span>
                  <span color="#b8e986">&apos;2021-2021&apos;</span>
                  <span className="text-stone-50"> :</span>
                  <span className="text-green-500"> </span>
                  <span color="#b8e986">
                    &apos;Software Engineer at IQUAD Acellerated Development &apos;
                  </span>
                  <span className="text-stone-50">&nbsp;&#125;</span>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-2.5 max-md:flex max-md:flex-row">
                <div className="text-white leading-[160%]">13</div>
                <div className="flex-auto leading-6 text-green-500 max-md:max-w-full">
                  <span color="#ffffff">······&#123;</span>
                  <span className="text-stone-50">&nbsp;</span>
                  <span color="#b8e986">&apos;2020-2021&apos; </span>
                  <span className="text-stone-50">:</span>
                  <span className="text-green-500"> </span>
                  <span color="#b8e986">&apos;Software Engineer at Formaspot&apos;</span>
                  <span className="text-stone-50"> &#125;</span>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-2.5 max-md:flex-wrap">
                <div className="text-white leading-[160%]">14</div>
                <div className="flex-auto leading-6 text-green-500 max-md:max-w-full">
                  <span className="text-white">····]</span>
                  <br />
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-2.5 max-md:flex-wrap">
                <div className="my-auto text-white leading-[160%]">15</div>
                <div className="flex-auto leading-6 text-green-500 max-md:max-w-full">
                  <span className="text-white">··&#125;</span>
                  <br />
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-2.5">
                <div className="my-auto text-white leading-[160%]">16</div>
                <div className="flex-auto leading-6 text-green-500 max-md:max-w-full">
                  <span className="text-white">··</span>
                  <span className="text-amber-300">education</span>
                  <span>
                    <span className="text-stone-50">() &#123;</span>
                  </span>
                  <br />
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-3">
                <div className="text-white leading-[160%]">17</div>
                <div>
                  ····
                  <span>
                    <span color="#ffffff">return</span>
                  </span>
                  <span className="text-stone-50"> [</span>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-3">
                <div className="text-white leading-[160%]">17</div>
                <div className="flex-auto leading-6 text-green-500 max-md:max-w-full">
                  <span color="#ffffff">······&#123;</span>
                  <span className="text-stone-50">&nbsp;</span>
                  <span color="#b8e986">&apos;2020-2021&apos;</span>
                  <span className="text-stone-50"> :</span>
                  <span className="text-green-500"> </span>
                  <span color="#b8e986">
                    &apos;Alliance Manchester Business School, University of Manchester
                    - MsC, Business Management, Disctinction&apos;
                  </span>
                  <span className="text-stone-50"> &#125;</span>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-3">
                <div className="text-white leading-[160%]">17</div>
                <div className="flex-auto leading-6 text-green-500 max-md:max-w-full">
                  <span color="#ffffff">······&#123;</span>
                  <span className="text-stone-50">&nbsp;</span>
                  <span color="#b8e986">&apos;2017-2020&apos;</span>
                  <span className="text-stone-50"> :</span>
                  <span className="text-green-500"> </span>
                  <span color="#b8e986">
                    &apos;Instituto Superior Técnico, University of Lisbon - BsC,
                    Computer Science Engineering, 2:1&apos;
                  </span>
                  <span className="text-stone-50"> &#125;</span>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-3">
                <div className="text-white leading-[160%]">18</div>
                <div className="flex-auto leading-6 text-green-500 max-md:max-w-full">
                  <span className="text-white">····]</span>
                  <br />
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-2.5">
                <div className="my-auto text-white leading-[160%]">19</div>
                <div className="flex-auto leading-6 text-green-500 max-md:max-w-full">
                  <span className="text-white">··</span>
                  <span className="text-amber-300">skills</span>
                  <span>
                    <span className="text-stone-50">() &#123;</span>
                  </span>
                  <br />
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-3">
                <div className="text-white leading-[160%]">20</div>
                <div className="text-white">
                  ····
                  <span>
                    <span color="#ffffff">return</span>
                  </span>
                  <span className="text-stone-50"> [&nbsp;</span>
                  <span color="#b8e986">
                    &apos;Java&apos;, &apos;Python&apos;, &apos;HTML&apos;, &apos;JavaScript&apos;, &apos;SQL&apos;, &apos;Spring Boot&apos;,
                    &apos;Git&apos;, &apos;Jenkins&apos; , &apos;Docker&apos;, &apos;Terraform&apos;, &apos;Helm&apos;, &apos;Oracle&apos;,
                    &apos;Splunk&apos;, &apos;GCP&apos;, &apos;Azure&apos;, &apos;AWS&apos;, &apos;DAML&apos;, &apos;SAFe 6&apos;&nbsp;
                  </span>
                  ]
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-3">
                <div className="text-white leading-[160%]">21</div>
                <div className="flex-auto leading-6 text-green-500 max-md:max-w-full">
                  <span className="text-white">··&#125;</span>
                  <br />
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-3">
                <div className="text-white leading-[160%]">22</div>
                <div className="flex-auto leading-6 text-green-500 max-md:max-w-full">
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  const App: React.FC = () => (
  <main>
    <section className="px-5 py-2 mx-0 mb-4 w-full shadow-sm ">
      <Navbar />
    </section>
    <MyComponent2/>
    <MyComponent/>
  </main>
);

export default App;