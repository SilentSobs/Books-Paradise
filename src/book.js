import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import defaultBook from "./img/defaultBook.png";
import "../src/sass/style.css";
import { motion } from "framer-motion";

const Book = ({ id, volumeInfo }) => {
  let isbn10, isbn13;
  const imageVariants = {
    hover: {
      scale: 1.7,
      boxShadow: "0px 0px 8px #000",
      transition: {
        duration: 0.5,
        type: "spring",
        delay: 0.15,
      },
    },
  };
  console.log(volumeInfo);
  let { title, authors, publisher, previewLink, imageLinks ,industryIdentifiers} = volumeInfo;
  for (let i = 0; i < industryIdentifiers.length; i++) {
    let identifier = industryIdentifiers[i];
    if (identifier.type === 'ISBN_10') {
        isbn10 = identifier.identifier;
    } else if (identifier.type === 'ISBN_13') {
        isbn13 = identifier.identifier;
    }
  }

  //setting up default values for volume info data
  title = title || "Title is not available";
  authors = authors || "Author(s) name not available";
  publisher = publisher || "Publisher company not available";
  previewLink = previewLink || "https://books.google.co.in/";

  return (
    <section key={id} className="loading-card">
      <div>
        <div>
          <motion.img
            src={imageLinks ? imageLinks.thumbnail : defaultBook}
            width="100px"
            alt="Book-cover"
            variants={imageVariants}
            whileHover="hover"
          />
        </div>
        <div>
          {title && (
            <div>
              <h3 className="inline">{title}</h3>
            </div>
          )}
        </div>

        <div>
          {authors && (
            <h4 style={{ paddingBottom: "1rem", color: "black" }}>
              {" "}
              Author:{" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: "#3B3B3B",
                }}
              >
                {" "}
                {authors}{" "}
              </span>
            </h4>
          )}
        </div>

        <div>
          {publisher && (
            <h5 style={{ paddingBottom: "1rem", color: "black" }}>
              {" "}
              Published by:{" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: "#3B3B3B",
                }}
              >
                {" "}
                {publisher}{" "}
              </span>
            </h5>
          )}
        </div>

        <div>
          {previewLink && (
            <h5
              style={{
                fontWeight: "bold",
                color: "black",
                paddingBottom: "1rem",
              }}
            >
              Read more :{" "}
              <a href={previewLink} target="_blank" rel="noreferrer">
                {" "}
                Google Books <BiLinkExternal></BiLinkExternal>{" "}
                
              </a>
              <br/>
              Buy Hard Copy From Amazon  :{" "}
              <a href={`https://www.amazon.in/s?k=${title}${authors}` } target="_blank" rel="noreferrer">
                {" "}
                Amazon  Search
                
              </a>
              <p>INBN:{isbn13}</p>
            </h5>
            
          )}
        </div>

        {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "1rem",
              }}
            > {language && }
              <p>
                {" "}
                <span style={{ fontWeight: "bold", color: "black" }}>
                  {" "}
                  Language :{" "}
                </span>{" "}
                {language}{" "}
              </p>
              <p>
                {" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginLeft: "1rem",
                  }}
                >
                  {" "}
                  Average Rating :{" "}
                </span>{" "}
                {averageRating}
              </p>
            </div> */}
      </div>
    </section>
  );
};

export default Book;
