import { useEffect, useState } from "react";
import "../styles/SinglePageElement.css";
export const SinglePageElement = () => {
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
      .then((data) => {
        console.log(data.elements.date);
        setHeading(data.elements.heading.value);
        setAuthor(data.elements.author.value);
        setBodyTitle(data.elements.body.values[0]);
        setBodyContent(data.elements.body.values[1]);
        setDate(data.elements.date.value);
        setMainUrl(data.elements.mainImage.value.leadImage.asset.resourceUri);
      });
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
    return <p dangerouslySetInnerHTML={bodyTitleToHtml()} />;
  };
  const BodyContentAsHtml = () => {
    return <p dangerouslySetInnerHTML={bodyContentToHtml()} />;
  };

  return (
    <>
      <div>
        {/* <img alt="mainImg" src={link + maingImgUrl}></img> */}
        <p>{heading}</p>
        <p>{author}</p>
        <p>{dataDisplay(date)}</p>
        <BodyTitleAsHtml />
        <BodyContentAsHtml />
        <img alt="img" src={jsonLink + mainImg}></img>
      </div>
    </>
  );
};

// const bodyTitle = data.elements.body.values[0];
// const bodyContent = data.elements.body.values[1];
// const date = data.elements.date.value;
// const maingImgUrl =
//   data.elements.mainImage.value.leadImage.asset.resourceUri;
// // const author = data.author.value;
// // const date = data.date.value;
// console.log(author, heading, bodyTitle, bodyContent, date);
// console.log(maingImgUrl);
