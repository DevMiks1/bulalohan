

const VideoModal = ({ videoUrl, onClose }) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="border border-white bg-white rounded-lg p-6 max-w-md w-full z-40 overflow-y-auto max-h-[80vh]" style={{boxShadow: "0 0 15px -5px rgba(0, 0, 0, 0.5)"}}>
        {/* close button or x button */}
        <div className="flex justify-end">
            <button className="p-2  text-red-500 " onClick={onClose}><i className="fa-solid fa-x"></i>
            </button>
        </div>
        <video width="100%" controls>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoModal;
