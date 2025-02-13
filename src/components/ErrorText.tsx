const ErrorText = ({ errorText }: { errorText: string }) => {
  return <p className="error">No {errorText} data :(</p>;
};

export default ErrorText;
