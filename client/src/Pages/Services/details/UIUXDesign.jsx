import { useState } from "react";
import { PencilRuler, Eye, Palette, Shapes, Ruler, Sparkles } from "lucide-react";
import ReusableAccordion from "../../reusable-accordion";
import Navbar from "../../../components/Navbar";
import Footer from "../../../Footer";
import ServiceSidebar from "./Service-Sidebar";

export default function UIUXDesign() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(1);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? -1 : id);
  };

  const steps = [
    {
      id: 1,
      title: "User Research & Strategy",
      description: "Understand your users' needs through personas, journeys, and analytics.",
      defaultIcon: <Eye className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <Ruler className="w-8 h-8 text-accent" />,
    },
    {
      id: 2,
      title: "Wireframing & Prototyping",
      description: "Create low to high fidelity wireframes and interactive prototypes.",
      defaultIcon: <PencilRuler className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <Shapes className="w-8 h-8 text-accent" />,
    },
    {
      id: 3,
      title: "Visual Design & Handoff",
      description: "Design beautiful, consistent UIs and handoff smoothly to developers.",
      defaultIcon: <Palette className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <Sparkles className="w-8 h-8 text-accent" />,
    },
  ];

  const faqs = [
    {
      id: 0,
      question: "What is UI/UX Design and why is it important?",
      answer:
        "UI/UX Design enhances the usability, accessibility, and aesthetic of digital experiences. It's vital for increasing user satisfaction and conversion rates.",
    },
    {
      id: 1,
      question: "How long does a typical UI/UX project take?",
      answer:
        "Depending on the project's scope, a UI/UX design process can take 2–8 weeks from research to final mockups.",
    },
    {
      id: 2,
      question: "Do you provide design systems or style guides?",
      answer:
        "Yes. We build scalable design systems with reusable components, typography, color palettes, and documentation.",
    },
    {
      id: 3,
      question: "Can you collaborate with our dev team?",
      answer:
        "Absolutely. We ensure a smooth handoff via Figma, Zeplin, or other tools, and work closely with developers throughout.",
    },
    {
      id: 4,
      question: "What industries do you design for?",
      answer:
        "We work with SaaS platforms, e-commerce, fintech, healthtech, edtech, and more—delivering tailored UI/UX for diverse audiences.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className=" py-40 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <ServiceSidebar />
            <div className="lg:col-span-8">
              <div className="rounded-3xl overflow-hidden mb-8">
                <img
                  src="https://html.awaikenthemes.com/firevall/images/service-single-img.jpg"
                  alt="UI/UX Design Process"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="space-y-6">
                <p className="text-secondaryText text-lg leading-relaxed">
                  UI/UX Design is about crafting intuitive and enjoyable digital experiences. It balances user needs with business goals to create products that are both functional and aesthetically pleasing.
                </p>

                <p className="text-secondaryText text-lg leading-relaxed">
                  Whether you're building a new product or improving an existing one, thoughtful design can enhance user satisfaction, reduce friction, and ultimately boost engagement and retention.
                </p>
              </div>

              <section className="text-primaryText pt-16 px-4">
                <div className="mb-16">
                  <h2 className="text-2xl lg:text-[40px] font-bold text-primaryText leading-tight mb-6">
                    Step-by-step UI/UX solutions built for{" "}
                    <span className="text-accent">
                      seamless experiences
                    </span>
                  </h2>
                  <p className="text-secondaryText text-lg leading-relaxed max-w-4xl mx-auto">
                    Our process ensures users have an engaging journey from start to finish. Through research, wireframes, prototypes, and visual polish—we deliver experiences that users remember.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className="border border-slate-700/50 rounded-2xl p-6 relative transition duration-300 hover:shadow-2xl hover:scale-[1.02]"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="absolute top-0 right-0 bg-accent text-primaryText text-sm font-bold px-4 py-2 rounded-bl-2xl">
                        {`0${step.id}`}
                      </div>

                      <div className="mb-4">
                        {hoveredIndex === index ? step.hoverIcon : step.defaultIcon}
                      </div>
                      <h3 className="text-xl text-primaryText font-semibold mb-2">{step.title}</h3>
                      <p className="text-secondaryText">{step.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="text-primaryText py-16 px-4">
                <div className="space-y-10">
                  <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
                    Experienced designers focused on<br />
                    <span className="text-accent">
                      elevating user experience
                    </span>
                  </h2>

                  <p className="text-secondaryText text-lg leading-relaxed max-w-3xl">
                    Our UI/UX experts blend design thinking, user psychology, and the latest tools to craft products users love. We make sure your interface is functional, beautiful, and impactful.
                  </p>

                  <div className="rounded-3xl overflow-hidden shadow-lg max-w-4xl">
                    <img
                      src="https://html.awaikenthemes.com/firevall/images/case-study-image-6.jpg"
                      alt="UI/UX Workshop Session"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </section>

              <div className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold text-primaryText leading-tight mb-6">
                      Frequently Asked Questions About <br />
                      <span className="text-accent">
                        UI/UX Design
                      </span>
                    </h1>
                    <p className="text-secondaryText text-lg leading-relaxed">
                      Curious about our design approach? Here are answers to common questions we get about our UI/UX design services.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <div
                        key={faq.id}
                        className="border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-amber-100"
                      >
                        <button
                          onClick={() => toggleQuestion(faq.id)}
                          className="w-full flex items-center justify-between p-6 text-left group"
                        >
                          <h3 className="text-primaryText text-lg font-medium pr-4 group-hover:text-accent transition-colors duration-300">
                            {faq.question}
                          </h3>
                          <div className="flex-shrink-0">
                            {openQuestion === faq.id ? (
                              <svg
                                className="w-6 h-6 text-primaryText group-hover:text-accent transition-colors duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            ) : (
                              <svg
                                className="w-6 h-6 text-primaryText group-hover:text-accent transition-colors duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            )}
                          </div>
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openQuestion === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 pb-6">
                            <div className="h-px bg-slate-700/50 mb-4"></div>
                            <p className="text-secondaryText leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
