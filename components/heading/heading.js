import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  weight: "400",
});

const Heading = ({ tag, text }) => {
  const Tag = tag || "h1";
  return <Tag className={montserrat.className}>{text}</Tag>;
};

export default Heading;
