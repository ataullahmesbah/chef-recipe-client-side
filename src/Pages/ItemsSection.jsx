import React from 'react';

const ItemsSection = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://c0.wallpaperflare.com/preview/335/274/559/cuisine-delicious-dinner-epicure.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Discover Our Most Popular Recipes </h1>
      <p className="mb-5">Here are our top-rated recipes that are sure to please. From savory main dishes to sweet treats, these recipes have
        been tried and tested by our community of home cooks and received high ratings. Give them a try and let us know
        what you think!</p>
      <button className="btn btn-primary">Get Order</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ItemsSection;