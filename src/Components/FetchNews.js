import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';





const FetchNews = () => {
    const [data, setData] = useState([]);
    const [topic, setTopic] = useState("Business");

    //console.log(data);
    useEffect(() => {
        getData();
    }, [topic]);

    const getData = async () => {

        let apiKey2 = 'c8e2adba68ff4a11aa85c538828bba5b';
        let apiKey = 'c6983ea9bf6544f8b884bfd3b46ef03a';


        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${topic}&pageSize=100&apiKey=${apiKey}`);
        const jsonData = await response.json();

        setData(jsonData.articles);

        if (jsonData.status === 'ok') {
            //setData(jsonData.articles);

        } else {
            console.log('Error fetching news');
        }
    }

    const handleChange = (event) => {
        setTopic(event.target.value)
    }


    return (
        <>
            <div className='mx-5 my-10 text-3xl dark:text-gray-400'>
                <div className='flex flex-row justify-between'>
                    <h1>Top HeadLines...</h1>
                    <div>
                        <form>
                            <select className='text-xl focus-outline:none' value={topic} onChange={handleChange}>
                                <option className='text-xl  focus-outline:none' value="Business">Business</option>
                                <option className='text-xl  focus-outline:none' value="Health">Health</option>
                                <option className='text-xl  focus-outline:none' value="Science">Science</option>
                                <option className='text-xl  focus-outline:none' value="Sports">Sports</option>
                                <option className='text-xl  focus-outline:none' value="Technology">Technology</option>
                                <option className='text-xl  focus-outline:none' value="Entertainment">Entertainment</option>
                                <option className='text-xl  focus-outline:none' value="General">General</option>
                            </select>
                        </form>
                    </div>

                </div>

                {//for direct article shows

                    data && data.map((p) => {
                        //console.log(p.id);
                        return (<>
                            <React.Fragment key={p.url}>
                                <div className="bg-white px-2 my-2 rounded lg:hidden sm:hidden hover:bg-gray-120 Montserrat dark:text-gray-400">
                                    <div className="flex flex-row">
                                        <img className="object-cover w-1/3 h-30"
                                            src={p.urlToImage} alt="" />
                                        <div className="mx-2">
                                            <div>
                                                <p className="text-purple-800">{p.id}</p>
                                                <a href={p.url} target="_blank">
                                                    <h5 className="text-2xl text-gray-900 dark:text-black Montserrat">
                                                        {p.title ? p.title.substring(0, 60) : null}
                                                    </h5>
                                                </a>
                                            </div>

                                        </div>

                                    </div>
                                </div>



                                <div className="hover:bg-gray-100 flex flex-row items-center bg-white my-2 rounded hidden sm:flex Montserrat lg:mx-60 dark:text-gray-400">
                                    <img className=" object-cover w-1/3 h-52 md:w-1/3  md:h-52 lg:h-52 lg:w-1/3 "
                                        src={p.urlToImage} alt="" />
                                    <div className="mr-6">
                                        <a href={p.url} target="_blank">

                                            <h5 className="mb-2 text-2xl font-bold Montserrat tracking-tight text-gray-900 px-2">
                                                {p.title ? p.title.substring(0, 60) : null}
                                            </h5>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>

                                            <div className="flex justify-between">
                                                <div className="font-medium text-black dark:text-black px-2 text-xl">
                                                    {p.description ? p.description.substring(0, 120) : null
                                                /*p.description*/}
                                                    ...
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </React.Fragment>
                        </>)
                    })
                }
            </div >

        </>
    )
}



export default FetchNews;