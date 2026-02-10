import { motion } from "framer-motion";
type CoffeeCardProps = {
  image: string;
  title: string;
  description: string;
  link?: string;
};

export default function CoffeeCard({
  image,
  title,
  description,
  link = "#",
}:CoffeeCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
        bg-[#FFF9F3]
        rounded-2xl
        overflow-hidden
        shadow-md
        hover:shadow-xl
        transition-shadow
        duration-300
        max-w-sm
      "
    >
    
        <div className="w-full h-56 flex justify-center items-center">
        
        <div className="relative w-70 h-full overflow-hidden ">
            <img
            src={image}
            alt={title}
            className="
                w-full h-full
                object-cover
                transition-transform
                duration-500
                hover:scale-105
            "
            />

          
            <span
            className="
                absolute inset-0
            bg-[#50321f]/40
                
                pointer-events-none
            "
            />
        </div>

        </div>


      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-[#4A2C1A]">
          {title}
        </h3>

        <p className="text-[#6B4F3A] text-sm leading-relaxed">
          {description}
        </p>

        <a
          href={link}
          className="
            mt-2
            font-medium
            text-[#8B5E3C]
            hover:text-[#50321f]
            transition-colors
            duration-300
            inline-flex
            items-center
            gap-1
          "
        >
          See more →
        </a>
      </div>
    </motion.div>
  );
}
