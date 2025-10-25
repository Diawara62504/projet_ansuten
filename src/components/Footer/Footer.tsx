import React from "react";

export default function Footer() {
  return (
    <div>
      
      <div className="card">
        <div className="card-header">Quote</div>
        <div className="card-body">
          <figure>
            <blockquote className="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
        </div>
      </div>

        <div className="col-md-4">
           <img src="src\assets\img-footer.jpg" className="img-fluid" alt="" /> 
        </div>

    </div>
  );
}
