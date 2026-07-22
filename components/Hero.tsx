export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/image.png')",
      }}
    >
      {/* 어둡게 */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 가운데 내용 */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">

        <h1 className="text-7xl md:text-8xl font-bold tracking-wider">
          啓成ON
        </h1>

        <p className="mt-6 text-2xl md:text-3xl font-light">
          성공이 시작을 만나다
        </p>

      </div>

      {/* 아래 화살표 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-5xl animate-bounce">
        ↓
      </div>

    </section>
  );
}