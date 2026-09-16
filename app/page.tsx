const helpCards = [
  {
    title: "Adults",
    image:
      "images/adult.png.png",
    text: "Therapy for adults navigating anxiety, panic, trauma, burnout, perfectionism, and the pressures of everyday life. Sessions provide a supportive space to understand your experiences and develop healthier ways of coping.",
  },
  {
    title: "Couples",
    image:
      "images/couples.png.png",
    text: "Reconnect, communicate with greater understanding, and develop healthier patterns that strengthen your relationship.",
  },
  {
    title: "Children & Teens",
    image:
      "images/child.png.png",
    text: "A supportive space for children and teens experiencing anxiety, emotional challenges, stress, or difficulties navigating relationships, school, and personal growth.",
  },
];

const specialties = [
  {
    title: "Trauma & Safety",
    text: "Explore the effects of past experiences while building safety, stability, and a stronger sense of regulation.",
  },
  {
    title: "Anxiety & Panic",
    text: "Understand patterns of worry, fear, and physical tension while developing tools to respond differently.",
  },
  {
    title: "Burnout & Perfectionism",
    text: "Move beyond constant pressure, self-criticism, and the belief that you must always do more.",
  },
  {
    title: "Mind-Body Connection",
    text: "Build awareness of how stress lives in the body and learn ways to reconnect with yourself.",
  },
];

const expertise = [
 "Anxiety",
"Panic",
"Trauma",
"Complex Trauma",
"Professional Burnout",
"Perfectionism",
"Chronic Stress",
"Emotional Regulation",
"Self-Worth",
"Relationship Patterns",
];

export default function Home() {
  return (
    <main className="bg-[#f7f5f0] text-[#1d2526]">
      {/* HEADER */}
      <header className="border-b border-[#dedbd3] bg-[#f7f5f0]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-7 md:px-12 lg:px-16">
          <a href="#" className="group" >
            <div className="font-serif text-3xl tracking-tight md:text-4xl">
              Maya Reynolds
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.35em] text-[#679da0] md:text-xs">
              Counseling & Wellness
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] md:flex">
            <a href="#about" className="transition hover:text-[#679da0]">
              About
            </a>
            <a href="#Our Team" className="transition hover:text-[#679da0]">
              Our Team
            </a>
            <a href="#specialties" className="transition hover:text-[#679da0]">
              Specialties
            </a>
            <a href="#methods" className="transition hover:text-[#679da0]">
              Methods
            </a>
            <a href="#FAQS" className="transition hover:text-[#679da0]">
              Our office
            </a>
            
            <a
  href="#contact"
  className="inline-flex items-center justify-center rounded-[50%] border border-[#1d2526] px-10 py-4 tracking-[0.2em] transition hover:bg-[#1d2526] hover:text-white"
>
  CONTACT
</a>
          </nav>

          <button className="rounded-full border border-[#1d2526] px-4 py-2 text-xs uppercase tracking-widest md:hidden">
            Menu
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="grid min-h-[680px] lg:grid-cols-2">
        <div
          className="min-h-[440px] bg-cover bg-center lg:min-h-full"
          style={{
            backgroundImage:
              "url('images/family.png.png')",
          }}
        />

        <div className="flex items-center bg-[#f7f5f0] px-8 py-20 md:px-16 lg:px-24">
          <div className="max-w-2xl">
            <p className="mb-8 text-xs uppercase tracking-[0.2em] text-[#000000]">
              ONLINE & IN-PERSON THERAPY IN SANTA MONICA & ACROSS CALIFORNIA
            </p>

            <h1
            style={{ fontFamily: "Bodoni Moda, serif " }} 
            className="font-serif font-extralight text-5xl leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
              Find steadiness,
              <br />
              clarity, and room to{" "}
              <span
              style={{ fontFamily: "'Snell Roundhand', cursive",}} 
              className="text-[#679da0]">
                breathe.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#465052] md:text-lg">
             Therapy for adults navigating anxiety, trauma, burnout, and the pressure of everyday life.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-block border-b border-[#1d2526] pb-2 text-xs uppercase tracking-[0.2em] transition hover:text-[#679da0]"
            >
              Book an appointment
            </a>
          </div>
        </div>
      </section>
      {/* ABOUT / HOPE SECTION */}
      <section id="about" className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="px-8 py-20 md:px-16 lg:px-24 lg:py-32">
          <h2 className="max-w-3xl font-serif text-4xl leading-[1.15] md:text-6xl">
            A SPACE TO COME BACK TO {" "}
            <span className="font-serif italic text-[#679da0]">yourself.</span>
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase leading-7 tracking-[0.16em]">
                You don’t have to keep holding everything together.
              </p>
            </div>

            <div>
              <p className="text-base leading-8 text-[#586264]">
                You may look capable and composed on the outside while feeling overwhelmed, exhausted, or constantly on edge inside. Therapy can offer a place to slow down, understand what you are experiencing, and begin creating a more sustainable way forward.
              </p>
            </div>
          </div>
        </div>

        <div
          className="min-h-[500px] bg-cover bg-center lg:min-h-full"
          style={{
            backgroundImage:
              "url('images/quatebanner.png')",
          }}
        />
      </section>

      {/* WHO WE HELP INTRODUCTION */}
      <section id="help" className="bg-white px-6 py-20 md:px-12 lg:px-16 lg:py-28">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="font-serif text-5xl leading-tight md:text-6xl">
            Who we{" "}
            <span className="font-serif italic text-[#679da0]">help</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {helpCards.map((card) => (
            <article key={card.title}>
              <div
                className="h-[360px] bg-cover bg-center md:h-[420px]"
                style={{ backgroundImage: `url('${card.image}')` }}
              />

              <h3 className="mt-7 font-serif text-3xl">{card.title}</h3>

              <p className="mt-5 max-w-md text-base leading-8 text-[#586264]">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </section>
        {/* QUOTE BANNER */}
      <section
        className="relative flex min-h-[470px] items-center bg-cover bg-center px-8 py-24 md:px-16 lg:px-24"
        style={{
          backgroundImage:
            "url('images/quatebanner.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#1d2526]/45" />

        <h2 className="relative max-w-5xl font-serif text-4xl leading-tight text-white md:text-6xl">
          “You can be strong, capable, and still deserve support.{" "}
          <span className="italic">You do not have to carry everything alone."</span>
        </h2>
      </section>

      {/* AREAS OF EXPERTISE */}
      <section className="bg-white px-6 py-20 md:px-12 lg:px-16 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="font-serif text-5xl leading-tight md:text-6xl">
            Our areas of{" "}
            <span className="font-serif italic text-[#679da0]">
              expertise
            </span>
          </h2>

          <div className="grid md:grid-cols-2">
            {expertise.map((item) => (
              <div
                key={item}
                className="border-b border-[#dedbd3] py-7 text-sm uppercase tracking-[0.16em]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* HOW WE WORK */}
      <section id="methods" className="bg-[#e5ddcf] px-6 py-20 md:px-12 lg:px-16 lg:py-28">
        <p className="text-xs uppercase tracking-[0.2em]">How we work</p>

        <h2 className="mt-24 font-serif text-5xl leading-tight md:text-6xl">
          A thoughtful approach,grounded in both insight and action.
        </h2>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1fr_0.8fr]">
          <div>
            <p className="text-xs uppercase leading-7 tracking-[0.16em]">
             we take a warm, collaborative, and grounded approach to therapy. 
            </p>

            <p className="mt-8 text-base leading-8 text-[#586264]">
              We integrate evidence-based methods such as cognitive-behavioral therapy (CBT), 
              EMDR, mindfulness-based practices, and body-oriented techniques. 
              These approaches help us explore both the emotional and physiological sides of what you are experiencing.
            </p>
          </div>

          <div>
            <p className="text-base leading-8 text-[#586264]">
              Our work is paced carefully, especially when working with trauma.
               We focus on safety, stabilization, 
               and developing practical tools that help you feel more regulated—not only during sessions, 
               but also in everyday life.
            </p>
          </div>

          <div
            className="min-h-[360px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('images/office1.jpeg')",
            }}
          />
        </div>
      </section>
      {/* SPECIALTIES */}
      <section id="specialties" className="bg-white px-6 py-20 md:px-12 lg:px-16 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="font-serif text-5xl leading-tight md:text-6xl">
            Our{" "}
            <span className="font-serif italic text-[#679da0]">
              specialties
            </span>
            <br />
            include...
          </h2>

          <div className="grid gap-x-12 gap-y-16 md:grid-cols-2">
            {specialties.map((item) => (
              <article key={item.title}>
                <h3 className="font-serif text-3xl">{item.title}</h3>
                <p className="mt-6 text-base leading-8 text-[#586264]">
                  {item.text}
                </p>
                <a
                  href="#contact"
                  className="mt-7 inline-block border-b border-[#1d2526] pb-2 text-xs uppercase tracking-[0.18em]"
                >
                  Learn more
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT SECTION */}
      <section className="bg-[#eeebe3] px-6 py-20 md:px-12 lg:px-16 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr_0.8fr] lg:items-center">
          <div
            className="hidden h-[600px] bg-cover bg-center lg:block"
            style={{
              backgroundImage:
                "url('images/Dr. Maya Reynolds.png')",
            }}
          />

          <div className="px-0 lg:px-10">
            <p className="text-xs uppercase tracking-[0.2em]">
              Schedule an appointment
            </p>

            <h2 className="mt-12 font-serif text-4xl leading-[1.15] md:text-5xl">
              Find a space where you can feel heard, supported, and
              understood.
            </h2>

            <p className="mt-8 text-base leading-8 text-[#586264]">
              Beginning therapy is a courageous decision. I offer a warm,
              collaborative environment where you can explore your experiences
              without judgment and take steps toward lasting change.
            </p>

            <p className="mt-6 text-base leading-8 text-[#586264]">
              In-person and virtual appointments are available.
            </p>
            <br>
            </br>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-[50%] border border-[#1d2526] px-8 py-4 tracking-[0.2em] transition hover:bg-[#1d2526] hover:text-white"
            >
              Book now
            </a>
          </div>

          <div
            className="h-[390px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('images/office2.jpeg')",
            }}
          />
        </div>
      </section>

      {/* OUR OFFICE - NEW ASSIGNMENT SECTION */}
      <section id="office" className="bg-[#f7f5f0] px-6 py-20 md:px-12 lg:px-16 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em]">Our office</p>

            <h2 className="mt-12 font-serif text-5xl leading-tight md:text-6xl">
              A calm place to begin your next chapter.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#586264]">
              Our office is designed to feel welcoming, private, and
              comfortable. Whether you visit in person or connect virtually,
              you will have a space where your experiences can be met with
              care and attention.
            </p>

            <div className="mt-10 space-y-3 text-sm leading-7 text-[#586264]">
              <p>
                <strong className="text-[#1d2526]">Location:</strong> 123th Street 45 W Santa Monica, CA 90401
              </p>
              <p>
                <strong className="text-[#1d2526]">Appointments:</strong>{" "}
                Take the first steptoward feeling better.
              </p>
              <p>
                <strong className="text-[#1d2526]">Availability:</strong> In-person therapy in Santa Monica
                Secure telehealth throughout California
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div
              className="h-[300px] bg-cover bg-center md:h-[430px]"
              style={{
                backgroundImage:
                  "url('images/office1.jpeg')",
              }}
            />

            <div
              className="h-[300px] bg-cover bg-center md:mt-16 md:h-[430px]"
              style={{
                backgroundImage:
                  "url('images/office2.jpeg')",
              }}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#f7f5f0] px-8 py-16 md:px-16 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_1fr]">
          <div>
            <div className="font-serif text-4xl">Maya Reynolds</div>
            <div className="mt-2 text-xs uppercase tracking-[0.3em] text-[#679da0]">
              Licensed Clinical Psychologist
            </div>

            <p className="mt-8 max-w-md text-base leading-8 text-[#586264]">
              Compassionate counseling for adults, couples, children, and
              teens. In-person and virtual appointments available.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em]">Navigate</h3>
            <div className="mt-7 space-y-4 text-sm text-[#586264]">
              <a className="block hover:text-[#679da0]" href="#about">
                About
              </a>
              <a className="block hover:text-[#679da0]" href="#help">
                Who I Help
              </a>
              <a className="block hover:text-[#679da0]" href="#specialties">
                Specialties
              </a>
              <a className="block hover:text-[#679da0]" href="#office">
                Our Office
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em]">Contact</h3>
            <div className="mt-7 space-y-3 text-sm leading-7 text-[#586264]">
              <p>123th Street 45 W Santa Monica, CA 90401</p>
              <p>hello@mayareynoldscounseling.com</p>
              <p>+1 (310) 555-0145</p>
              <p>In-person & virtual sessions</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[#dedbd3] pt-7 text-xs text-[#586264]">
          © 2026 Dr. Maya Reynolds, PsyD. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
