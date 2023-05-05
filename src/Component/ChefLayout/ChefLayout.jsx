import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefInformationDetails from '../../Shared/ChefInformationDetails/ChefInformationDetails';

const ChefLayout = () => {

    const [chefInfo, setChefInfo] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-side-ataullahmesbah.vercel.app/allData')
            .then(res => res.json())
            .then(data => setChefInfo(data))
    }, []);

    return (
        <div className='mb-12'>
            <div class="bg-gray-100 py-12">
                <div class="container mx-auto">
                    <div class="text-center mb-8">
                        <h4 class="text-3xl font-bold text-gray-800">Famous Chef Recipe</h4>
                    </div>
                    <div class="max-w-3xl mx-auto text-center">
                        <p class="text-xl text-gray-700">Indulge in our kitchen zen, crafted by our renowned chef using only the freshest and finest ingredients. This dish is sure to take your taste buds on a journey to the heart of the culinary arts.</p>
                    </div>
                </div>

                <div className="flex flex-wrap mt-10 mb-10 grid-cols-2 gap-6 sm:grid-cols-1 justify-center lg:mx-36">
                    {chefInfo.map(chefInformation => (
                        <ChefInformationDetails
                            key={chefInformation.id}
                            chefInformation={chefInformation}
                        />
                    ))}
                </div>



            </div>

        </div>
    );
};

export default ChefLayout;