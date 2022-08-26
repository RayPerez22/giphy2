import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'


const Lab = () => {
    //useState is a React hook
    const [gifUrl, setGifUrl] = useState('')
    const [isToggled, setToggled] = UsedState(false)
    const url = 'https://api.giphy.com/v1/gifs/random?api_key=IcRAfC33HiWmnEiDfycjIKlAcgRA2Gfs&tag=&rating=g'

    // Create a function that grabs a random Gif from Giphy API
    // Async/Await => newer syntax of thennables
    // https://javascript.info/async-await


   useEffect(() => {
     getGif()
    
   }, [])
   
    
   const getGif = async () => {

        try {

            const res = await axios.get(url)
            console.log(res)
            setGifUrl(res.data.data.images.original.url)
        } catch (error) {
            console.log(error)
        }

        return (
            <div>

                <button onClick={getGif}>Click Me</button> <br />
                <img src={gifUrl} alt='' />
            </div>

        )
    }
}

export default Lab