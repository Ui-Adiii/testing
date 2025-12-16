import StatsSection from "@/components/StatsSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const features = [
  {
    title: "Trusted & Transparent",
    description:
      "Our platform is committed to being trusted and transparent, offering users secure transactions and immutable records through blockchain technology.",
    image: "/wh-img-1.png",
  },
  {
    title: "Realtime Settlement",
    description:
      "Enable instant and reliable settlements with decentralized infrastructure ensuring speed and accuracy.",
    image: "/realtime.webp",
  },
  {
    title: "Unmatched Safety",
    description:
      "Advanced cryptography and decentralized validation keep your data and assets fully secure.",
    image: "/safety.webp",
  },
];

export default function WhatWeDoSection() {
  return (
    <>
    <section className="relative w-full py-24 bg-[#F1F5F9] ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
          What We Do
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold max-w-4xl mx-auto mb-16 leading-relaxed">
          We specialize in harnessing blockchain technology to create secure and
          transparent solutions for diverse industries, empowering businesses
          with efficiency and trust.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => (
            <Card
              key={item.title}
              className="rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <CardHeader className="flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-auto"
                />
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <CardTitle className="text-lg font-semibold">
                  {item.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </section>
      <StatsSection/>
    </>
  );
}
