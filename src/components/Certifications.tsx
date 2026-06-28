export default function Certifications() {
  const certs = [
    "AWS Certified Cloud Practitioner",
    "Google AI Essentials",
    "IBM Generative AI Essentials",
  ];

  return (
    <section
      id="certifications"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <h2 className="mb-6 text-center text-5xl font-bold">
          Certifications
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {certs.map((cert) => (
            <div
              key={cert}
              className="rounded-2xl border border-slate-700 bg-slate-950 p-8 text-center"
            >
              <h3 className="text-xl font-semibold">
                {cert}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}