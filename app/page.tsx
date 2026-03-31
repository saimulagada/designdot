"use client";
import React, { useState, useEffect } from "react";

export default function Page() {
  const [activeInsight, setActiveInsight] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return (
    <div className="font-sans text-gray-900 bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/demo-icon.svg" alt="" className="w-10 h-10" />
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-gray-700">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Who We Serve
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Solutions
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Resources
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              About Us
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Contact Us
            </a>
          </nav>
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase text-gray-700">
            <button className="p-1 hover:text-orange-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                />
              </svg>
            </button>
            <span className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors">
              <span className="w-5 h-3.5 bg-orange-500 rounded-sm inline-block" />
              IND
            </span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors">
              English
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-sm sticky top-16 z-40">
          <nav className="flex flex-col px-6 py-4 gap-1 text-xs font-semibold tracking-widest uppercase text-gray-700">
            {["Who We Serve", "Solutions", "Resources", "About Us", "Contact Us"].map((item) => (
              <a key={item} href="#" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 transition-colors py-2 border-b border-gray-100 last:border-0">
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}

      <section
        className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden"
        style={{ backgroundColor: "#00338D" }}
      >
        <div
          className="absolute hidden md:block w-[62%] rounded-3xl overflow-hidden"
          style={{
            top: "-310px",
            bottom: "212px",
            right: "-96px",
            transform: "rotate(317deg)",
          }}
        >
          <img
            src="/office_image.png"
            alt="Office"
            className="w-full h-full object-cover rounded-tl-[100px] rounded-[50px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 flex-1 flex flex-col justify-center py-16">
          <p className="text-blue-200 text-xs font-semibold tracking-widest uppercase mb-5">
            Accountants and Global Business Advisors
          </p>
          <h1 className="text-white font-black text-4xl sm:text-5xl md:text-6xl uppercase leading-tight mb-5 md:max-w-xs">
            Empowered
            <br />
            Workplaces
          </h1>
          <div className="w-12 h-0.5 bg-white mb-5" />
          <p className="text-blue-200 text-sm md:max-w-xs leading-relaxed mb-8">
            by fostering inclusivity, encouraging growth, promoting
            collaboration, valuing diversity, supporting innovation, and
            building trust for shared success.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded transition-colors w-fit"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            Lets Connect
          </a>
        </div>

        <div className="relative z-10 w-full px-6 md:px-10 py-5 hidden sm:flex items-center justify-between">
          <p className="text-white/70 text-xs tracking-widest uppercase font-medium">
            Accounting, Taxation, &amp; Business Advisory Between India, Japan
            and the World
          </p>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-gray-400"
                >
                  <img
                    src={`https://picsum.photos/seed/person${i}/50/50`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white text-[10px] font-bold">
              MORE
            </div>
            <div className="ml-1">
              <p className="text-white font-black text-xl leading-none">
                250 +
              </p>
              <p className="text-white/60 text-xs mt-0.5">
                Enjoy Working with us
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white mt-5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row sm:items-stretch gap-y-3 sm:gap-y-0">
          <div
            className="shrink-0 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest flex items-center px-6 sm:mr-6 h-8 w-fit"
            style={{ clipPath: "polygon(0 0, 92% 0, 100% 100%, 0 100%)" }}
          >
            Hot Topics
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Parliament Introduces Income Tax Bill to Reshape India's Direct Tax Landscape",
              "Indian Export Earnings at Risk as U.S. Tariffs Double to 50%",
              "India Eases Select BIS Norms While Tightening Overall Standards Enforcement",
              "India Modernizes Maritime Law with Carriage of Goods by Sea Bill, 2025",
            ].map((item, i) => (
              <a
                key={i}
                href="#"
                className="flex flex-col justify-between px-4 pt-2 pb-2 group"
              >
                <div>
                  <div className="border-t border-gray-900 mb-2" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {item}
                  </p>
                </div>
                <div className="flex justify-end mt-2">
                  <svg
                    className="w-6 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 12h16m-4-4 4 4-4 4"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-14 bg-white"
        style={{
          backgroundImage: "url('/map-with-white-grey 1.svg')",
          backgroundSize: "contain",
          backgroundPosition: "100px 43px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex gap-8 items-start">
          <div
            className="hidden lg:flex shrink-0 items-center justify-center"
            style={{ width: 224, height: 224, backgroundColor: "#EEEEEE" }}
          >
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              About Firm
            </span>
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5">
                HLS Global Group
              </h2>
              <p className="text-gray-500 text-xs leading-relaxed mb-8">
                is an international accounting and business advisory firm with a
                focus on providing superior services in the areas of accounting,
                tax, audit, advisory, and consulting. Founded in 1990 we pride
                ourselves in delivering the highest levels of quality and
                customer service while remaining cost-effective. We have grown
                to more than 250 professionals serving clients in the United
                States, Japan, Mexico, India, Germany, and UAE. While catering
                to the business requirements of Japanese subsidiaries operating
                in the United States, Mexico, India, Germany, and UAE, we also
                provide comprehensive solutions to non-Japanese multinational
                companies operating in Japan.
              </p>
              <div className="grid grid-cols-2 gap-0 border-t border-gray-200">
                {[
                  {
                    value: "250+",
                    label: "Professional Staff Members Globally",
                  },
                  {
                    value: "1000+",
                    label: "Clients in the HLS Global Network",
                  },
                  {
                    value: "35+",
                    label: "Years of Experience Connecting Japan and the World",
                  },
                  {
                    value: "15+",
                    label: "Countries Covered With Our Alliance Network",
                  },
                ].map((s, i) => (
                  <div
                    key={i}
                    className={`py-5 ${i % 2 === 0 ? "pr-6 border-r border-gray-200" : "pl-6"} ${i < 2 ? "border-b border-gray-200" : ""}`}
                  >
                    <p className="text-3xl font-black text-gray-900">
                      {s.value}
                    </p>
                    <p className="text-[11px] text-gray-500 leading-snug mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex justify-end">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-orange-500 text-black px-3 py-1.5 flex items-center gap-2">
                  We Are Located
                  <span className="border-l border-white/40 pl-2 flex items-center gap-1">
                    INDIA
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </span>
              </div>
              <div
                className="rounded-xl overflow-hidden flex-1"
                style={{ height: 350 }}
              >
                <img
                  src="/buildings.svg"
                  alt="HLS Global office building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-0 border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex gap-8 items-start">
          <div
            className="hidden lg:flex shrink-0 items-center justify-center"
            style={{ width: 224, height: 224, backgroundColor: "#EEEEEE" }}
          >
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 text-center"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Inspiration &amp; Insights
            </span>
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            <div className="border-t border-gray-200">
              {[
                {
                  title: "Pre-market Entry",
                  desc: "Pre-market entry means trading securities before regular market hours to react to overnight news, with lower liquidity and wider spreads.",
                },
                {
                  title: "Market Entry",
                  desc: "Research demand, assess competition, choose mode, localize offering, comply regulations, price strategically, partner locally, iterate learning.",
                },
                {
                  title: "Operations",
                  desc: "Planning, organizing, and managing processes to efficiently produce goods or services, ensuring quality, cost-effectiveness, and customer satisfaction.",
                },
                {
                  title: "Growth & Expansion",
                  desc: "Increasing business size, market reach, revenue, and resources to achieve long-term sustainability and competitive advantage.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  onClick={() => setActiveInsight(i)}
                  className="py-5 border-b border-gray-900 cursor-pointer"
                >
                  <h4 className="text-sm font-bold mb-1 text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-gray-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row gap-3 lg:h-105">
              {[
                {
                  title: "Pre-Market",
                  subtitle:
                    "Evaluating Supply Chain Readiness Before Committing Capital in Emerging Markets",
                  src: "https://picsum.photos/seed/coins1/600/500",
                },
                {
                  title: "Operations",
                  subtitle:
                    "Planning, organizing, and managing processes to efficiently produce goods or services.",
                  src: "https://picsum.photos/seed/office2/300/500",
                },
                {
                  title: "Growth & Expansion",
                  subtitle:
                    "Increasing business size, market reach, revenue, and resources to achieve long-term sustainability.",
                  src: "https://picsum.photos/seed/growth3/300/500",
                },
              ].map((card, i) => {
                const isActive = activeInsight === i;
                return (
                  <div
                    key={i}
                    onClick={() => setActiveInsight(i)}
                    className="insight-card relative rounded-xl overflow-hidden cursor-pointer lg:shrink-0 w-full lg:w-auto h-55 lg:h-auto"
                    style={
                      isMobile
                        ? undefined
                        : {
                            width: isActive ? "55%" : "22.5%",
                            height: "100%",
                          }
                    }
                  >
                    <img
                      src={card.src}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                    <div className={`absolute bottom-0 left-0 p-4 ${!isActive ? "lg:hidden" : ""}`}>
                      <p className="text-white text-sm font-bold">
                        {card.title}
                      </p>
                      {card.subtitle && (
                        <p className="text-white/70 text-[10px] mt-1 leading-snug">
                          {card.subtitle}
                        </p>
                      )}
                    </div>
                    {!isActive && (
                      <p
                        className="hidden lg:block absolute text-white text-[10px] font-bold"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                          bottom: 12,
                          left: "50%",
                          marginLeft: "-0.5rem",
                        }}
                      >
                        {card.title}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/demo-icon.svg" alt="" className="w-10 h-10" />
            <span className="text-sm text-gray-400">
              © {new Date().getFullYear()} HLS Global Group. All rights
              reserved.
            </span>
          </div>
          <div className="flex gap-6 text-xs font-semibold tracking-widest uppercase text-gray-400">
            <a href="#" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
