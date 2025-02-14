import { ClipLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="loader-backdrop">
      <div className="loader-wrapper">
        <ClipLoader
          color="ad7709"
          loading={true}
          size={100}
          aria-label="Loading Spinner"
          cssOverride={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
