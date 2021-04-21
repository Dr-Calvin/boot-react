/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Badge } from 'react-bootstrap';

const Post = () => {
  const [ipsum, setIpsum] = useState([]);
  useEffect(() => {
    axios
      .get('https://baconipsum.com/api/?type=meat-and-filler&paras=4&format=text')
      .then((response) => {
        setIpsum(response.data);
      });
  }, []);
  return (
    <div>
      {ipsum && (
        <div className="position-relative">
          <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
            Editor&apos;s Pick
            <Badge
              pill
              variant="success"
              className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle"
              style={{ fontSize: '0.75rem' }}
            >
              New
            </Badge>
          </span>

          <span className="d-block pb-4 h2 text-dark border-bottom border-gray">
            React-Bootstrap
          </span>

          <article
            className="pt-5 text-secondary text-justify"
            style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}
          >
            {ipsum}
          </article>
        </div>
      )}
    </div>
  );
};

export default Post;
