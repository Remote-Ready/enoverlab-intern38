import video from "../assets/WhatsApp Video 2024-03-03 at 5.56.13 PM.mp4";

const Vid = () => {
  return (
    <div className="container rounded-lg items-center">
      <video width="1200" height="500" controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Vid;
