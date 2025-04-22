import Image from "next/image";
import starSky from "../../public/starSky.jpg";

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-60">
      <Image
        src={starSky}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};

export default Background;
