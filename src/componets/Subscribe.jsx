import React from 'react';

export const Subscribe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    console.log(`Submitted email: ${email}`);
  };

  return (
    <section className="subscribe" id="suscribe">
      <div className="container">
        <div className="subcribe-wrapper">
          <h3>Subscribe</h3>
          <p>subscribe</p>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="your email" name="email" />
            <button className="btn" type="submit">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
