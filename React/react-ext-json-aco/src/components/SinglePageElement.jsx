import { useEffect, useState } from "react";
import "../styles/SinglePageElement.css";

export const SinglePageElement = () => {
  const [error, setError] = useState(null);
  const [heading, setHeading] = useState("");
  const [author, setAuthor] = useState("");
  const [bodyTitle, setBodyTitle] = useState("");
  const [bodyContent, setBodyContent] = useState("");
  const [date, setDate] = useState("");
  const [mainImg, setMainUrl] = useState("");

  const jsonLink =
    "https://content-eu-4.content-cms.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/";
  const deliverLink =
    "delivery/v1/content/db4930e9-7504-4d9d-ae6c-33facca754d1";

  useEffect(() => {
    fetch(jsonLink + deliverLink)
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => {
          setHeading(data.elements.heading.value);
          setAuthor(data.elements.author.value);
          setBodyTitle(data.elements.body.values[0]);
          setBodyContent(data.elements.body.values[1]);
          setDate(data.elements.date.value);
          setMainUrl(data.elements.mainImage.value.leadImage.asset.resourceUri);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  const dataDisplay = (date) => {
    const newDate = date.split("").slice(0, 10).join("");
    const timeDate = date.split("").slice(10, date.length).join("");
    const correctDataDisplay = `${newDate} ${timeDate}`;
    return correctDataDisplay;
  };

  const bodyTitleToHtml = () => {
    return { __html: bodyTitle };
  };
  const bodyContentToHtml = () => {
    return { __html: bodyContent };
  };

  const BodyTitleAsHtml = () => {
    return (
      <p className="body-title" dangerouslySetInnerHTML={bodyTitleToHtml()} />
    );
  };
  const BodyContentAsHtml = () => {
    return (
      <div
        className="body-content"
        dangerouslySetInnerHTML={bodyContentToHtml()}
      />
    );
  };

  return (
    <div className="single-article">
      {error ? (
        <div style={{ fontWeight: "700" }}>
          We apologize for the problem, the error will be corrected as soon as
          possible.
        </div>
      ) : (
        <>
          <p className="date">{dataDisplay(date)}</p>
          <p className="heading">{heading}</p>
          <p className="author">{author}</p>

          <BodyTitleAsHtml />
          <BodyContentAsHtml />
          <img alt="article img" src={jsonLink + mainImg}></img>
        </>
      )}
    </div>
  );
};

<div style={{ fontWeight: "700" }}>
  We apologize for the problem, the error will be corrected as soon as possible.
</div>;
