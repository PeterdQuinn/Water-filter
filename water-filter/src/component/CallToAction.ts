import React from 'react';

function CallToAction(): JSX.Element {
  const handlePurchaseClick = () => {
    // Redirect to purchase page
    window.location.href = 'https://www.example.com/purchase';
  };

  return (
    <div className="CallToAction">
      <button className="cta-button" onClick={handlePurchaseClick}>Purchase Now</button>
    </div>
  );
}

export default CallToAction;
