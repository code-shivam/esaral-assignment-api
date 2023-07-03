import './loading.css'
const Loading = ({ className, title = 'Getting Data... Please Wait' }) => {
    return (
      <div className={className}>
        <div className="loadingSpinner"></div>
        <p className="title">{title}</p>
      </div>
    );
  };
  
  export default Loading;