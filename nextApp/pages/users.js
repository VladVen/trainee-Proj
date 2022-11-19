import React from 'react';
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {

    return (
        <MainContainer>
            <h1>Users</h1>
            <div>
                {
                    users.map(item => <li key={item.id}>
                        <Link href={`users/${item.id}`} legacyBehavior>
                            <a>
                                {item.name}
                            </a>
                        </Link>
                    </li>)
                }
            </div>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await res.json()


    return {
        props: {users,}
    }
}






