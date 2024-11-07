import Autolinker from "autolinker";

const AutolinkerComponent = () => {
  const linkedText = Autolinker.link("Check out google.com");

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: linkedText }} />
    </div>
  );
};

export default AutolinkerComponent;
