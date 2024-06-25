import Image from "next/image";
import { Layout } from "@/components/component/layout";

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-gray-50 shadow">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            대표 작품
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            프로젝트
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            연락처
          </Link>
        </nav>
      </header>
      <main className="flex-1">
      <section className="relative w-full pt-12 md:pt-24 lg:pt-32 lg:pb-32 bg-black text-gray-50 flex justify-center">
  <div className="absolute inset-0 w-full h-full flex justify-start">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="object-cover"
      style={{ width: '1080px', height: '650px' }}
    >
      <source src="/img/4439-178898286.mp4" type="video/mp4" />
    </video>
    <div className="absolute bottom-0 left-0 right-0" style={{ height: '20rem', background: 'linear-gradient(to top, black, rgba(0, 0, 0, 0))' }}></div>
    <div className="absolute top-0 bottom-0" style={{ left: 'calc(100% * 5 / 9)', width: '10rem', height: '100%', filter: 'blur(10px)', background: 'black', opacity: 1 }}></div>
  </div>
  <div className="container relative px-4 md:px-6 space-y-10 xl:space-y-16">
    <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16 items-center">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
          3D Art
        </h1>
        <h2 className="text-xl font-medium text-100">김동우</h2>
        <p className="mt-4 max-w-[700px] text-gray-300 md:text-xl">
          3D Art 포트폴리오
        </p>
        <a
  href="https://www.artstation.com/user-4854839"
  className="mt-6 inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 transition-colors duration-300 bg-gray-500 hover:bg-gray-200 active:bg-navy-blue"
>
  아트스테이션
</a>
      </div>
      <img
        alt="Hero"
        className="mx-auto aspect-[5/3] overflow-hidden rounded-xl object-cover object-center"
        height="300"
        src="/img/rander02.jpg"
        width="1200"
      />
    </div>
  </div>
</section>  
<section className="relative w-full py-12 md:py-24 lg:py-32 lg:pb-32 bg-black from-gray-700 to-gray-900 flex justify-center" id="about">
  <div className="container relative grid items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
    <div className="space-y-2">
    <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl md:tracking-tight">3D Artist 김동우</h2>
<div className="mt-4 text-gray-300 md:text-xl">
  <span className="text-lg md:text-2xl">사용가능 툴</span><br />
  <p className="text-base md:text-lg text-grey-300 ">
  3D MAX를 주로 사용하고 Zbrush를 서브로 사용하고 있습니다. <br />
    텍스처는 Substance 3D Painter를 이용해 실사 텍스쳐를 지향하며<br /> 
    PhotoShop으로 알파맵이나 텍스처들을 수정하기도 합니다.<br />
    3D MAX와 MAYA를 이용해서 간단한 애니메이션도 제작하고있습니다.<br />
    Unity엔진안에서 간단한 작업도 가능합니다.
  </p>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-4">
      <div>
        <img
          alt="Portfolio Image 1"
          className="mx-auto overflow-hidden rounded-xl object-cover object-center"
          height="100"
          src="/img/max.ico"
          width="100"
        />
        <div className="text-center text-white">3D MAX</div>
      </div>
      <div>
        <img
          alt="Portfolio Image 2"
          className="mx-auto overflow-hidden rounded-xl object-cover object-center"
          height="100"
          src="/img/maya.ico"
          width="100"
        />
        <div className="text-center text-white">MAYA</div>
      </div>
      <div>
        <img
          alt="Portfolio Image 3"
          className="mx-auto overflow-hidden rounded-xl object-cover object-center"
          height="100"
          src="/img/ZLogo.ico"
          width="100"
        />
        <div className="text-center text-white">ZBrush</div>
      </div>
      <div>
        <img
          alt="Portfolio Image 4"
          className="mx-auto overflow-hidden rounded-xl object-cover object-center"
          height="100"
          src="/img/adobe-photoshop.png"
          width="100"
        />
        <div className="text-center text-white">PhotoShop</div>
      </div>
      <div>
        <img
          alt="Portfolio Image 5"
          className="mx-auto overflow-hidden rounded-xl object-cover object-center"
          height="100"
          src="/img/substance3dpainter.png"
          width="100"
        />
        <div className="text-center text-white">Substance 3D Painter</div>
      </div>
      <div>
        <img
          alt="Portfolio Image 6"
          className="mx-auto overflow-hidden rounded-xl object-cover object-center"
          height="100"
          src="/img/unityicon.jpg"
          width="100"
        />
        <div className="text-center text-white">Unity</div>
      </div>
    </div>
  </div>
</section>
<section className="w-full py-12 md:py-24 lg:py-32 lg:pb-32 bg-gradient-to-b flex justify-center" id="about">
  <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
    <div className="space-y-2">
      <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl md:tracking-tight">대표 작업물</h2>
      <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-800">
        배경 모델링 작업중 - 더미
      </p>
    </div>
    <img
      alt="About"
      className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
      height="720"
      src="/img/rander.jpg"
      width="1280"
    />
  </div>
</section>

<section className="w-full py-12 md:py-24 lg:py-32 lg:pb-32 flex justify-center" id="projects" style={{ background: "linear-gradient(#303C4C, #1D232C)" }}>
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl md:tracking-tight">3D 작업물</h2>
        <p className="max-w-[900px] text-gray-300 mb-2.5 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          프랍, 캐릭터, 애니메이션
        </p>
      </div>
    </div>

{/* 첫 번째 큰 박스 */}
<div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:max-w-5xl mt-32">
      <div className="col-span-full text-center">
        <h3 className="text-2xl font-bold text-white">배경 프랍</h3>
      </div>
      <div className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all dark:bg-gray-800">
        <img alt="Project" className="aspect-[4/3] w-full object-cover object-center transition-all" src="/img/pp.jpg" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 transition-all">
          <h3 className="text-lg font-bold text-gray-50">환풍기</h3>
          <p className="mt-1 text-sm text-gray-400">대표작 오브젝트</p>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all dark:bg-gray-800">
        <img alt="Project" className="aspect-[4/3] w-full object-cover object-center transition-all" src="/img/x.jpg" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 transition-all">
          <h3 className="text-lg font-bold text-gray-50">쓰레기봉투</h3>
          <p className="mt-1 text-sm text-gray-400">대표작 오브젝트</p>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all dark:bg-gray-800">
        <img alt="Project" className="aspect-[4/3] w-full object-cover object-center transition-all" src="/img/pen.png" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 transition-all">
          <h3 className="text-lg font-bold text-gray-50">강판</h3>
          <p className="mt-1 text-sm text-gray-400">대표작 오브젝트</p>
        </div>
      </div>
    </div>

    {/* 두 번째 큰 박스 */}
    <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:max-w-5xl mt-32">
      <div className="col-span-full text-center">
        <h3 className="text-2xl font-bold text-white">캐릭터</h3>
      </div>
      <div className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all dark:bg-gray-800">
        <img alt="Project" className="aspect-[4/3] w-full object-cover object-center transition-all" src="/img/snow.jpg" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 transition-all">
          <h3 className="text-lg font-bold text-gray-50">스노우 맨</h3>
          <p className="mt-1 text-sm text-gray-400">크레용 신짱</p>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all dark:bg-gray-800">
        <img alt="Project" className="aspect-[4/3] w-full object-cover object-center transition-all" src="/img/buri.jpg" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 transition-all">
          <h3 className="text-lg font-bold text-gray-50">부리부리몬</h3>
          <p className="mt-1 text-sm text-gray-400">크레용 신짱</p>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all dark:bg-gray-800">
        <img alt="Project" className="aspect-[4/3] w-full object-cover object-center transition-all" src="/img/forg.jpg" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 transition-all">
          <h3 className="text-lg font-bold text-gray-50">개구리</h3>
          <p className="mt-1 text-sm text-gray-400">창작</p>
        </div>
      </div>
    </div>

    {/* 세 번째 큰 박스 */}
    <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:max-w-5xl mt-32">
      <div className="col-span-full text-center">
        <h3 className="text-2xl font-bold text-white">애니메이션</h3>
      </div>
      <div className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all dark:bg-gray-800">
        <img alt="Project" className="aspect-[4/3] w-full object-cover object-center transition-all" src="/img/cfa8a795282e4f81.gif" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 transition-all">
          <h3 className="text-lg font-bold text-gray-50">리프트</h3>
          <p className="mt-1 text-sm text-gray-400">그렌파 플젝</p>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all dark:bg-gray-800">
        <img alt="Project" className="aspect-[4/3] w-full object-cover object-center transition-all" src="/img/ezgif.com-video-to-gif1.gif" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 transition-all">
          <h3 className="text-lg font-bold text-gray-50">집게</h3>
          <p className="mt-1 text-sm text-gray-400">그렌파 플젝</p>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all dark:bg-gray-800">
        <img alt="Project" className="aspect-[4/3] w-full object-cover object-center transition-all" src="/img/ani.gif.gif" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 transition-all">
          <h3 className="text-lg font-bold text-gray-50">검 공격 모션</h3>
          <p className="mt-1 text-sm text-gray-400">캐릭터 애니메이션</p>
        </div>
      </div>
    </div>
  </div>
</section>
        <section className="w-full py-12 md:py-24 lg:py-32 lg:pb-32 bg-gray-100 dark:bg-gray-800 flex justify-center" id="contact" style={{ background: "linear-gradient(#1D232C, #000000)" }}>
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white text-center">문의</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
                답장이 느립니다.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col space-y-2">
                <Input className="max-w-lg flex-1" placeholder="이름" type="Name" />
                <Input className="max-w-lg flex-1" placeholder="이메일" type="Email" />
                <Textarea className="max-w-lg flex-1" placeholder="메시지" />
                <Button type="submit">메시지 보내기</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-gray-50 p-6 md:py-12 w-full">
  <Link id="scrollToTopLink" className="scroll-to-top flex items-center justify-center" href="#">
    <span className="sr-only">Top</span>
    맨 위로 가기
  </Link>
</footer>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
