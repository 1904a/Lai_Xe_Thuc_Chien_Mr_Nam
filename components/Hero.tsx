interface HeroProps {
  imageSrc: string;
  height?: string; // Cho phép tùy chỉnh chiều cao nếu muốn
}

const Hero = ({ imageSrc, height = "h-[400px]" }: HeroProps) => {
  return (
    <section 
      style={{ height: height }} // Dùng style trực tiếp để nhận biến height
      className="bg-blue-500 mt-[50px] mx-4 md:mx-[200px] rounded-2xl overflow-hidden"
    >
      <img 
        src={imageSrc} 
        className="w-full h-full object-cover filter blur-2xl" 
      />
    </section>
  );
};

export default Hero;