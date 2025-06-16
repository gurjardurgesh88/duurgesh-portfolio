import React, { useState } from "react";

const ProfileImage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail with hover zoom */}
      <div
        onClick={() => setIsOpen(true)}
        className="group w-64 h-64 mx-auto cursor-pointer neon-border-pink dark:border-gray-300 rounded-full overflow-hidden shadow-lg relative z-10"
        title="Click to enlarge"
      >
        <img
          src="/profile.jpg"
          alt="Durgesh"
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999] animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-full max-h-full p-4"
            onClick={(e) => e.stopPropagation()} // prevent modal from closing if img clicked
          >
            <img
              src="/profile.jpg"
              alt="Durgesh Full"
              className="w-auto max-h-[90vh] rounded-lg shadow-xl touch-none"
              style={{ touchAction: "none" }}
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-cyan-400 transition"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileImage;
