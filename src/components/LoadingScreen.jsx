const LoadingScreen = () => {
  return (
    <div className="d-flex justify-content-center loading-container">
      <div className="spinner-border app-spinner" role="status">
        <span className="visually-hidden ">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
