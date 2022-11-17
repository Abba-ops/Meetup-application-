import { useState, useEffect } from 'react'

import MeetupList from "../components/meetups/MeetupList"

function AllMeetupsPage() { 
    const [isLoading, setIsLoading] = useState(true)
    const [loadedMeetups, setLoadedMeetups] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch(
            'http://localhost:8000/meetups'
        ).then(response => {
            return response.json()
        }).then(data => {
            const meetups = []
            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                }
                meetups.push(meetup)
            }
            setIsLoading(false)
            setLoadedMeetups(meetups)
        })
    }, [])


    if (isLoading) {
        return (
            <section>
                <div className='loader'></div>
            </section>
        )
    }
    
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    )
}

export default AllMeetupsPage