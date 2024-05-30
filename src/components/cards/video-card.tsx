import videoFile from "../../assets/video.mp4";
export default function VideoCard() {
  return (
    <div className="md:w-[278px] md:h-[157px] ">
      <video width="100%" controls className="rounded-16">
        <source src={videoFile} type="video/mp4" />
      </video>
    </div>
  );
}
