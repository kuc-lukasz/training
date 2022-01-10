const DescriptionField = (props) => {
    const {label, value} = props;

    return (
      <div className="description-field">
        <span className="label">{label}</span>
        <p>{value}</p>
      </div>
    )
  }

  export default DescriptionField;
