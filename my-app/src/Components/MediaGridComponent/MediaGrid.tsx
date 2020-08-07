import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCardComponent/MediaCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';


interface IState {
    url: any[];
    explanation: any[];
}

interface PhotoState {
    photo: string | undefined;
}

interface ExplanationState {
    explanation: string | undefined;
}

interface TitleState {
    title: string | undefined;
}

interface IMediaGridProps {
    SetDate: (Date | null);
}

function MediaGrid(props: IMediaGridProps) {
    const [Photo, setPhoto] = useState<PhotoState> ();
    const [Explanation, setExplanation] = useState<ExplanationState> ();
    const [Title, setTitle] = useState<TitleState> ();

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=' + process.env.REACT_APP_API_KEY + '&date=' + props.SetDate?.getFullYear() + '-'+ props.SetDate?.getMonth() + '-' + props.SetDate?.getDate())
            .then(response => response.json())
            .then(response => {
                setPhoto(response.url)
                setExplanation(response.explanation)
                setTitle(response.title)
            })
            .catch(() => console.log("it didn't work")
            );

    }, [props.SetDate]);


    return (
        <div>
            <Grid container spacing={3} className="MediaGridContainer">
                <MediaCard ImageUrl={Photo} Description={Explanation} Title={Title}/>
            </Grid>
        </div>
    )
}

export default MediaGrid