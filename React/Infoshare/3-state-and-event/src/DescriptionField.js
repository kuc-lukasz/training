const DescriptionField = ({ label, value }) => {
  return (
    <div className="descriptionField">
      <h4>{label}</h4>
      <p className="describe">{value}</p>
    </div>
  );
};

const DescriptionField3 = (props) => {
  const { label, value } = props;

  return (
    <div>
      <h4>{label}</h4>
      <p className="describe">{value}</p>
    </div>
  );
};

const DescriptionField2 = (props) => {
  return (
    <div>
      <h4>{props.label}</h4>
      <p className="describe">{props.value}</p>
    </div>
  );
};

export default DescriptionField;
