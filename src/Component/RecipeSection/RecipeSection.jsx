import React from 'react';



const RecipeSection = () => {

   
      
    return (


        <div className="">
            <h1 className='text-6xl text-center font-bold mb-14'>Check Our All Flavours <br /> Summer Promo</h1>
        
        <div className="flex flex-col lg:flex-row lg:items-center mb-10 bg-stone-200 p-20">

            
        <div className="lg:w-1/2 flex gap-3">
        <img className='w-1/2 mx-auto' src='https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/promotion-2.jpg' alt="" style={{marginBottom: '-90px', }} />
  <img className='w-1/2 mx-auto' src='https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/promotion-1.jpg' alt="" style={{marginTop: '-80px', marginLeft: '-200px'}} />
  
</div>


            <div className="lg:w-1/2 lg:pl-8">
                <h3 className='text-4xl font-bold mb-4'>Over <span className='text-orange-300'>250</span> Delicious & Tasty <br /> Recipes</h3>
                <h4 className='text-orange-500 text-4xl font-bold mb-4 '>Get 25% Off</h4>
                <p className='mb-4 text-xl'>The phrase emphasizes the quality and variety of recipes that are included in the collection, suggesting that there are enough recipes to choose from to satisfy anyone's taste buds. The use of the word "delicious" highlights the enjoyment that can be derived from these recipes, while the word "tasty" emphasizes the flavors and aromas that make them so appealing. Overall, this phrase is a catchy and enticing way to promote a collection of recipes and encourage people to try them out.</p>
                <button className='bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-600'>Let's Order Now</button>
            </div>

            
        </div>
        </div>
    );
};

export default RecipeSection;
