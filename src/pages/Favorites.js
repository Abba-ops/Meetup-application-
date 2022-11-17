import { useContext } from 'react'

import FavoritesContext from '../store/favorites-context'
import MeetupList from '../components/meetups/MeetupList'

function FavoritesPage() {
    const favoriteCtx = useContext(FavoritesContext)
    let content

    if (favoriteCtx.totalFavorites === 0) {
        content = <h4>You have no favorites yet!</h4>
    }
    else {
        content = <MeetupList meetups={ favoriteCtx.favorites } />
    }
    
    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default FavoritesPage