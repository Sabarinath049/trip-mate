import React from 'react';
import { Link } from 'react-router-dom';
import { Trip } from './Trip';
export const TripsList = ({match, days, onStatusChange}) => { 
    let trips
    const filter = match.params.filter;
    switch(filter){
        case "Pending":
            trips = days.filter( trip => trip.status === "Pending")
            break
        case "Completed":
            trips = days.filter(trip => trip.status === "Completed")
            break
        default:
            trips = filter ? days.filter( trip => trip.type === filter) : days;
    }
    return (
        <div className="trips-list">
            <h3>{filter ? filter : 'All'} Trips</h3>            
            <table class="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Place</th>
                        <th>Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trips.map((trip, i) => 
                            <Trip
                                key={i}
                                {...trip}
                                onStatusChange={onStatusChange}
                            />
                        )
                    }
                </tbody>
            </table>
            <div className="filters">
                Filter by:
                <Link to="/list">
                    All
				</Link>
                &#9679;
                <Link to="/list/Trek">
                    Treks
				</Link>
                &#9679;
                <Link to="/list/Club">
                    Clubs
				</Link>
                &#9679;
                <Link to="/list/Tropic">
                    Tropics
				</Link>
                &#9679;
                <Link to="/list/Pending">Pending</Link>
                &#9679;
                <Link to="/list/Completed">Completed</Link>
            </div>            
        </div>
    )
}