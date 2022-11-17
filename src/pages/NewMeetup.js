import { useNavigate } from 'react-router-dom'

import NewMeetupForm from "../components/meetups/NewMeetupForm"

function NewMeetupPage() {
    const history = useNavigate()
    
    function addMeetupHandler(meetupData) {
        fetch(
            'http://localhost:8000/meetups',
            {
                method: 'POST',
                body: JSON.satringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        ).then(() => {
            history('/')
        })
    }

    return (
        <section>
            <h1>Create Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupPage