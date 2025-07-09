import videoBg from '../videos/video_web.mp4'

const Home = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={videoBg}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 max-w-2xl px-4">
        <h2 className="text-5xl font-extrabold mb-4 animate-fade-in">
          Votre Développeur Web
        </h2>
        <p className="text-lg mb-6 animate-slide-up">
          Bienvenue sur mon portfolio 👨‍💻<br />
          Je suis <strong>passionné</strong>, <strong>curieux</strong> et <strong>motivé</strong> !
        </p>
        <a
          href="/pdf/CV.pdf"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full transition"
        >
          Télécharger mon CV
        </a>
      </div>
    </section>
  )
}

export default Home
