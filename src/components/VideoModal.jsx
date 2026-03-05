import { useEffect } from 'react';
import { FiX, FiPlay } from 'react-icons/fi';
import './VideoModal.css';

const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="video-modal-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div 
        className="video-modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="video-modal-header">
          <h3 id="video-modal-title" className="video-modal-title">
            <FiPlay className="video-modal-icon" />
            {title}
          </h3>
          <button 
            onClick={onClose} 
            className="video-modal-close"
            aria-label="Close video"
          >
            <FiX size={24} />
          </button>
        </div>
        
        <div className="video-modal-body">
          <video 
            controls 
            autoPlay
            className="video-player"
            controlsList="nodownload"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
