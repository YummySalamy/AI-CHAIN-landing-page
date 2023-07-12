import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithBackground.js";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <Features
        subheading={<Subheading>Funcionalidades</Subheading>}
        heading={
          <>
            Tenemos una <HighlightedText>EXCELENTE </HighlightedText>experiencia de usuario.
          </>
        }
      />
      <FeatureWithSteps
        subheading={<Subheading>¿Como iniciar?</Subheading>}
        heading={
          <>
            Fácil de <HighlightedText>Configurar.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <MainFeature2
        subheading={<Subheading>Consideración</Subheading>}
        heading={
          <>
            ¿Por qué usar nuestro <HighlightedText>Chatbot? </HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Asequible",
            description: "Prometemos servicios de alto nivel a un muy bajo costo, con el fin de ser amigables con tu bolsillo.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Productividad",
            description: "El uso de esta poderosa herramienta permite agilziar tus tiempos de trabajo, lo que se traducre como un incremento en la productividad.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
      />
      <Pricing
        subheading={<Subheading>Planes</Subheading>}
        heading={
          <>
            Razonables y flexibles: <HighlightedText>Planes.</HighlightedText>
          </>
        }
        plans={[
          {
            name: "Personal",
            price: "$11.99",
            duration: "Mensual",
            mainFeature: "Para uso personal",
            features: ["Destacable 1", "Destacable 2", "Destacable 3"]
          },
          {
            name: "Grupal",
            price: "$31.99",
            duration: "Mensual",
            mainFeature: "Para pequeñas empresas / grupos",
            features: ["Destacable 1", "Destacable 2", "Destacable 3"],
            featured: true
          },
          {
            name: "Empresarial",
            price: "$59.99",
            duration: "Mensual",
            mainFeature: "Para medianas y grandes empresas",
            features: ["Destacable 1", "Destacable 2", "Destacable 3", "xd"]
          }
        ]}
      />
      <Testimonial
        subheading={<Subheading>Opiniones</Subheading>}
        heading={
          <>
            Nuestros usuarios <HighlightedText>les encanta.</HighlightedText> "Nombre de chatbot"
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Una experiencia increíble",
            quote:
              "El chatbot me ayudó a mejorar la comprensión y efectividad de mi trabajo, ¡me encanta!.",
            customerName: "Valentina Arequipe",
            customerTitle: "Estudiante de medicina, Universidad del Norte Barranquilla."
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "No sé xd !",
            quote:
              "Lo que dice Adam... Lorem ipsum dolor siamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            customerName: "Adam Cuppy",
            customerTitle: "co-fundador de EventsDeck"
          }
        ]}
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            ¿Tienes <HighlightedText>Preguntas?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "El Chatbot me puede ayudar en... ?",
            answer:
              "Si, nuestro chatbot te brinda una amplia gama de funcionalidades que te permiten incrementar la efectividad de tu trabajo..."
          },
          {
            question: "Cuanto tiempo se tarda en activar mi chatbot ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Que tipo de metodos de pagos se aceptan ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Hay alguna suscripción que me brinde ayuda especial ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Blah Blah... ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "¡Pregunta curiosa!",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        ]}
      />
      <GetStarted/>
      <Footer />
    </AnimationRevealPage>
  );
}
