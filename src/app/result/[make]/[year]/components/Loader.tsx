const Loader = () => (
  <div className="flex items-center justify-center">
    <div className="loader"></div>
    <style jsx>{`
      .loader {
        border: 4px solid rgba(255, 255, 255, 0.1);
        border-left-color: #ffffff;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

export default Loader;
