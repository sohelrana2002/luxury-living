const VideoGalary = () => {
  return (
    <section className="bg-gray-100 section-padding" id="video-tour">
      {/* title */}
      <h2 className="text-4xl text-center font-bold mb-10">
        Experience 5-Bed Detached Luxury - Video Gallery
      </h2>

      {/* youtube video */}
      <iframe
        src="https://www.youtube.com/embed/DdkOTaCe8KM?si=O_YuIUMlh83uzxmu"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-[90vh] rounded"
      ></iframe>
    </section>
  );
};

export default VideoGalary;
