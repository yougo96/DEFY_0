// import React from 'react';
import UserBadge from '../../components/app/userBadge';
import { useParams } from 'react-router';

export default function User () {
    const {id} = useParams()
    
    return (
        <>
            <h1>Profile</h1>
            <UserBadge id={id} />
        </>
    )
}