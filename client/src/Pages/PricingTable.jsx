// Pricing.jsx
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./PricingTable.css";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Launch",
    oldPrice: 129,
    price: 89,
    users: "—",
    visits: "100,000",
    landingPages: "50",
    domains: "5",
    integrations: "3",
    workspaces: "3",
    abTesting: false,
    exportCsv: false,
    freeCleaning: 0,
    successManager: false,
    customImpl: false,
    importUrl: true,
    downloadLandingPages: false,
    support: "Email",
    extraVisit: "$0.001/visit",
    extraDomain: "$5/domain",
    features: [
      "Drag & Drop Builder",
      "AI (Translation, Text & Image Generation, Background Removal)",
      "Built-in Code Editor",
      "100s Ready To Use Templates",
      "Leads",
      "Webhooks",
      "Direct Leads Integrations",
      "Import from ZIP",
      "Import from (Adplexity, Anstrex)",
      "SSL & CDN Hosting",
      "File Manager",
      "Images, Icons & Unsplash Gallery",
      "Unsplash Images",
      "Dynamic Text Replacement",
      "Clicks Tracking",
      "Advanced Analytics & Conversions Tracking",
      "Conversions",
    ],
  },
  {
    name: "Grow",
    oldPrice: 219,
    price: 149,
    users: "3",
    visits: "500,000",
    landingPages: "125",
    domains: "15",
    integrations: "15",
    workspaces: "10",
    abTesting: true,
    exportCsv: true,
    freeCleaning: 2,
    successManager: false,
    customImpl: false,
    importUrl: true,
    downloadLandingPages: true,
    support: "Chat & Email",
    extraVisit: "$0.0007/visit",
    extraDomain: "$5/domain",
    features: [
      "Drag & Drop Builder",
      "AI (Translation, Text & Image Generation, Background Removal)",
      "Built-in Code Editor",
      "100s Ready To Use Templates",
      "Leads",
      "Webhooks",
      "Direct Leads Integrations",
      "Import from ZIP",
      "Import from (Adplexity, Anstrex)",
      "SSL & CDN Hosting",
      "File Manager",
      "Images, Icons & Unsplash Gallery",
      "Unsplash Images",
      "Dynamic Text Replacement",
      "Clicks Tracking",
      "Advanced Analytics & Conversions Tracking",
      "Conversions",
    ],
  },
  {
    name: "Scale",
    oldPrice: 429,
    price: 299,
    users: "10",
    visits: "2,000,000",
    landingPages: "350",
    domains: "50",
    integrations: "50",
    workspaces: "25",
    abTesting: true,
    exportCsv: true,
    freeCleaning: 5,
    successManager: true,
    customImpl: false,
    importUrl: true,
    downloadLandingPages: true,
    support: "Telegram & Chat",
    extraVisit: "$0.0003/visit",
    extraDomain: "$5/domain",
    features: [
      "Drag & Drop Builder",
      "AI (Translation, Text & Image Generation, Background Removal)",
      "Built-in Code Editor",
      "100s Ready To Use Templates",
      "Leads",
      "Webhooks",
      "Direct Leads Integrations",
      "Import from ZIP",
      "Import from (Adplexity, Anstrex)",
      "SSL & CDN Hosting",
      "File Manager",
      "Images, Icons & Unsplash Gallery",
      "Unsplash Images",
      "Dynamic Text Replacement",
      "Clicks Tracking",
      "Advanced Analytics & Conversions Tracking",
      "Conversions",
    ],
  },
  {
    name: "Enterprise",
    oldPrice: 1199,
    price: 799,
    users: "30",
    visits: "10,000,000",
    landingPages: "1,000",
    domains: "125",
    integrations: "150",
    workspaces: "100",
    abTesting: true,
    exportCsv: true,
    freeCleaning: 10,
    successManager: true,
    customImpl: true,
    importUrl: true,
    downloadLandingPages: true,
    support: "Slack & Video Call",
    extraVisit: "$0.0001/visit",
    extraDomain: "$5/domain",
    features: [
      "Drag & Drop Builder",
      "AI (Translation, Text & Image Generation, Background Removal)",
      "Built-in Code Editor",
      "100s Ready To Use Templates",
      "Leads",
      "Webhooks",
      "Direct Leads Integrations",
      "Import from ZIP",
      "Import from (Adplexity, Anstrex)",
      "SSL & CDN Hosting",
      "File Manager",
      "Images, Icons & Unsplash Gallery",
      "Unsplash Images",
      "Dynamic Text Replacement",
      "Clicks Tracking",
      "Advanced Analytics & Conversions Tracking",
      "Conversions",
    ],
  },
];

const featureRows = [
  { label: "Users", key: "users" },
  { label: "Visits", key: "visits" },
  { label: "Landing Pages", key: "landingPages" },
  { label: "Custom Domains", key: "domains" },
  { label: "Lead/Webhook Integrations", key: "integrations" },
  { label: "Workspaces", key: "workspaces" },
  { label: "Import from URL", key: "importUrl", type: "bool" },
  { label: "Download Landing Pages", key: "downloadLandingPages", type: "bool" },
  { label: "A/B Testing", key: "abTesting", type: "bool" },
  { label: "Export Leads as CSV", key: "exportCsv", type: "bool" },
  { label: "Free Cleaning Requests", key: "freeCleaning", type: "count" },
  { label: "Dedicated Success Manager", key: "successManager", type: "bool" },
  { label: "Custom Implementation", key: "customImpl", type: "bool" },
  { label: "Support", key: "support" },
  { label: "Extra Visits", key: "extraVisit" },
  { label: "Extra Domain", key: "extraDomain" },
];

const getTickOrCross = (val) => (val ? "✔" : "✖");

export default function PricingTable() {
  const [hovered, setHovered] = useState(null);
  const cardsRef = useRef([]);
  const featuresRef = useRef([]);
  const lightsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 1,
        y: 20,
        duration: 0.6,
        delay: i * 0.15,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    });
    featuresRef.current.forEach((row, i) => {
      gsap.from(row, {
        opacity: 1,
        y: 15,
        duration: 0.45,
        delay: 0.3 + i * 0.1,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: row,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  // Animate glowing lights around table border
  useEffect(() => {
    const table = document.querySelector(".plan-table-outer");
    const wrapper = document.querySelector(".plan-table-light-outer");
    if (!table || !wrapper || lightsRef.current.length === 0) return;

    function animateLights() {
      const tableBox = table.getBoundingClientRect();
      const parentBox = wrapper.getBoundingClientRect();

      const cx = tableBox.left - parentBox.left + tableBox.width / 2;
      const cy = tableBox.top - parentBox.top + tableBox.height / 2;
      const rx = tableBox.width / 2 + 32;
      const ry = tableBox.height / 2 + 22;
      const N = lightsRef.current.length;

      lightsRef.current.forEach((el, i) => {
        const duration = 9 + Math.random() * 4;
        const delay = (duration / N) * i;

        gsap.to(el, {
          motionPath: {
            path: Array.from({ length: 36 }, (_, step) => {
              const t = (2 * Math.PI * (step / 36)) + ((i / N) * 2 * Math.PI);
              return {
                x: cx + rx * Math.cos(t) - 9,
                y: cy + ry * Math.sin(t) - 9,
              };
            }),
            autoRotate: false,
          },
          repeat: -1,
          ease: "linear",
          duration: duration,
          delay: delay,
          immediateRender: false,
        });
      });
    }

    animateLights();
    window.addEventListener("resize", animateLights);
    return () => window.removeEventListener("resize", animateLights);
  }, []);

  const handleCardHover = (idx, isEntering) => {
    const el = cardsRef.current[idx];
    if (!el) return;
    gsap.to(el, {
      scale: isEntering ? 1.03 : 1,
      y: isEntering ? -8 : 0,
      boxShadow: isEntering
        ? "0 0 16px 3px #29ff98, 0 2px 10px 0 rgba(41,255,152,0.13)"
        : "0 4px 32px 0 rgba(41,255,152,0.07)",
      background: isEntering ? "#1c232d" : "#171a23",
      duration: 0.3,
      ease: "power2.out",
      zIndex: isEntering ? 3 : 1,
    });
  };

  return (
    <div className="pricing-table-container">
      <div className="plan-table-light-outer">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (lightsRef.current[i] = el)}
            className="plan-light"
          />
        ))}

        <div className="plan-table-outer">
          {/* Header row */}
          <div className="plan-table-header-row">
            <div className="plan-table-first-col"><h1>Plans</h1></div>
            {plans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`plan-table-header-col plan-card-animated ${
                  hovered === idx ? "plan-hovered" : ""
                }`}
                ref={(el) => (cardsRef.current[idx] = el)}
                onMouseEnter={() => {
                  setHovered(idx);
                  handleCardHover(idx, true);
                }}
                onMouseLeave={() => {
                  handleCardHover(idx, false);
                  setHovered(null);
                }}
              >
                <div className="plan-name-main">{plan.name}</div>
                <div className="plan-old-price-main">${plan.oldPrice}</div>
                <div className="plan-price-main">${plan.price}</div>
                <div className="plan-desc-main">
                  {plan.name === "Launch" && "Essentials for solo marketers starting out with landing pages."}
                  {plan.name === "Grow" && "Built for growing teams with tools for optimization."}
                  {plan.name === "Scale" && "For teams that want to scale and drive more results."}
                  {plan.name === "Enterprise" && "Enterprise level, high-volume and large-scale campaigns."}
                </div>
                <button className="trial-btn-main">Start 7 Days Free Trial</button>
              </div>
            ))}
          </div>

          {/* Feature rows */}
          <div className="plan-table-feature-rows">
            {featureRows.map((row, idx) => (
              <div
                key={row.key}
                className={`plan-table-feature-row ${
                  hovered !== null ? "feature-col-hovered" : ""
                }`}
                ref={(el) => (featuresRef.current[idx] = el)}
              >
                <div className="plan-table-first-col">{row.label}</div>
                {plans.map((plan) => {
                  let val = plan[row.key];
                  if (row.type === "bool")
                    val = (
                    <span className={`tick-cross ${val ? "tick" : "cross"}`}>
                      {getTickOrCross(val)}
                    </span>
                );

                  if (row.type === "count" && val === 0) val = "—";
                  return (
                    <div key={plan.name} className="plan-table-plan-col">
                      {val}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
