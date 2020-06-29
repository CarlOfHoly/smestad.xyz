import React, { useState, useEffect } from 'react'

interface Props {

}

const APIUrl = "https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1"

export const Reddit: React.FC<Props> = () => {
    const [joke, setJoke] = useState<{title: String, selftext: String}>({title: "", selftext: ""})

    const getJoke = () => {
        fetch(APIUrl)
        .then((res) => res.json())
        .then((json) => setJoke(json.data.children[0].data))
        .catch((err) => console.error(err));
    }

    useEffect(() => {
        getJoke();
    }, []);

    return joke ? (

            <div className="reddit" style={{textAlign: "center"}}>
                <p>{joke?.title}</p>
                <p>{joke.selftext}</p>
            </div> 
    ) : (
        <></>
    )
}
