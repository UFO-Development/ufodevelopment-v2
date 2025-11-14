import { useRef } from "react";
import { DoubleQuote, Star } from "./icons";
import { Translate } from "./Translate";
import { useEffect } from "react";
import { Instagram } from "./icons/Instagram"
import { Url } from "./icons/Url";;

const testimonials = [
  {
    name: "Franco Benito",
    description: "testimonialDescriptionFrancoBenito",
    span: 1,
  },
  {
    name: "Rocamix Hormigones",
    description: "testimonialDescriptionRocamixHormigones",
    span: 1,
    instagram: "https://www.instagram.com/rocamixhormigones",
    url: "https://rocamix.com.ar"
  },
  {
    name: "Electro DM",
    description: "testimonialDescriptionElectroDm",
    span: 1,
    instagram: "https://www.instagram.com/electroodm",
  },
  {
    name: 'Mármoles Milán',
    description: "testimonialDescriptionMarmoles",
    span: 1,
    instagram: "https://www.instagram.com/marmolesmilan",
    url: "https://marmolesmilan.com.ar"
  }
];

export const Testimonials = () => {
  return (
    <div className="py-24" id="testmonialsContainer">
      <h2 className="badge-pink text-center mx-auto mb-4 text-xs">
        <Translate>testimonialsBadge</Translate>
      </h2>

      <h3 className="text-5xl font-bold text-center text-background-gradient">
        <Translate>testimonialsDescriptionTitle</Translate>
      </h3>

      <p className="text-center pt-3 text-balance max-w-xl mx-auto">
        <Translate>testimonialsDescriptionText</Translate>
      </p>

      <div className="margins grid grid-cols-2 w-full pt-24 gap-8 max-md:grid-cols-1">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

const Testimonial = ({ testimonial }) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    const height = element.clientHeight;
    const width = element.clientWidth;

    const onMouseMove = (e) => {
      const { layerX, layerY } = e;
      const yRotation = ((layerX - width / 2) / width) * 20;
      const xRotation = ((layerY - height / 2) / height) * 20;

      const styles = `
        perspective(500px)
        scale(1.07)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
      `;

      element.style.transform = styles;
      element.style.transition = "none";
    };

    const onMouseLeave = (e) => {
      element.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0deg)
        rotateY(0deg)
      `;
      element.style.transition = "transform 0.3s ease";
    };

    element.addEventListener("mousemove", onMouseMove);
    element.addEventListener("mouseleave", onMouseLeave);

    return () => {
      element.removeEventListener("mousemove", onMouseMove);
      element.removeEventListener("mouseleave", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`overflow-hidden relative flex flex-col gap-3 p-6 bg-ufopink bg-opacity-5 rounded-xl border border-ufopink border-opacity-15 hover:border-opacity-40 hover:shadow-ufopink/30 shadow-lg backdrop-blur hover:z-50 ${
        testimonial.span === 1 ? "" : "col-span-2"
      }`}
    >
      <Star
        width={128}
        height={128}
        strokeWidth={0.5}
        color="#ff66c4"
        className="absolute -bottom-10 -right-10 opacity-15"
      />
      <div className="flex items-center gap-2 justify-between">
        <div className="p-2 bg-ufopink w-fit rounded-xl bg-opacity-20 pointer-events-none">
          <DoubleQuote width={24} height={24} color="#ff66c4" />
        </div>
        <div className="flex gap-6">
          {testimonial.url && (
            <a
              className="p-2 bg-ufopink w-fit rounded-xl bg-opacity-20 cursor-pointer pointer-events-auto"
              href={testimonial.url}
              target="_blank"
            >
              <Url 
                width={24}
                height={24}
                color="#ff66c4" 
              />
            </a>
          )}
          {testimonial.instagram && (
            <a
              className="p-2 bg-ufopink w-fit rounded-xl bg-opacity-20 cursor-pointer pointer-events-auto"
              href={testimonial.instagram}
              target="_blank"
            >
              <Instagram 
                width={24} 
                height={24} 
                color="#ff66c4" 
              />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-2xl font-medium pointer-events-none">
        {testimonial.name}
      </h3>
      <p className="opacity-85 pointer-events-none">
        <Translate>{testimonial.description}</Translate>
      </p>
    </div>
  );
};
