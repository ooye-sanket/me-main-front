import "./clientsay.css";

interface Testimonial {
  title: string;
  body: string[];
  avatar: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    title: "Bringing Clear Results",
    body: [
      "Working with Sahil is amazing – he is a wiz in what he does. Everything he has done for us has got us clear results from Paid Media.",
      "I can highly recommend him as a forward-thinking, detail-oriented, fast-working colleague with an ever-growing skillset and a creative approach to any challenge. It's always a joy to work together!"
    ],
    avatar: "/media/felix.jpg",          // ← replace with your image paths
    name: "Felix Zeltner",
    role: "Founder at Remote Daily"
  },
  {
    title: "Growth You Can Measure",
    body: [
      "Since partnering with Sahil, our paid campaigns have consistently beaten KPIs.",
      "He turns complex data into clear actions, which lets our team move fast and confidently."
    ],
    avatar: "/media/alex.jpg",
    name: "Alex Johnson",
    role: "Marketing Director, FinEdge"
  },
  {
    title: "Exactly What We Needed",
    body: [
      "Sahil’s strategic mindset and attention to detail transformed our funnel performance.",
      "He integrates seamlessly with our internal team and always delivers on time."
    ],
    avatar: "/media/sara.jpg",
    name: "Sara Kim",
    role: "Head of Growth, Velo"
  },
  {
    title: "A True Partner",
    body: [
      "From day one, Sahil felt like part of the company. His insights drove a 40 % lift in ROAS within eight weeks.",
      "We trust his recommendations without hesitation."
    ],
    avatar: "/media/daniel.jpg",
    name: "Daniel Green",
    role: "Co-Founder, Streamly"
  }
];

const Feedback = () => (
  <section className="feedback-dibba">
    <h2 className="feedback-label">What Clients Say</h2>

    <div className="feedback-grid">
      {testimonials.map((t, i) => (
        <article className="feedback-card" key={i}>
          <h3 className="card-title">“{t.title}”</h3>

          {t.body.map((p, idx) => (
            <p className="card-body" key={idx}>{p}</p>
          ))}

          <hr className="card-divider" />

          <div className="card-author">
            <img src={t.avatar} alt={t.name} />
            <div className="author-info">
              <span className="author-name">{t.name}</span>
              <span className="author-role">{t.role}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Feedback;
