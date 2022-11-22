import React, {useState} from 'react';
import Link from "next/link";
import MainContainer from "../components/MainContainer/MainContainer";
import style from '../styles/usersPage.module.scss'
import {useMutation, useQuery} from "@apollo/client";
import {GET_ALL_USERS} from "../client/query/users";
import {CREATE_USER} from "../client/mutation/users";

const Users = () => {

    const [username, setUsername] = useState('')
    const [age, setAge] = useState(0)
    const [aboutMe, setAboutMe] = useState('')
    const {data, loading, error, refetch} = useQuery(GET_ALL_USERS)
    const [newUser] = useMutation(CREATE_USER)

    if (loading) return <h1>Loading...</h1>


    const addUser = (e) => {
        e.preventDefault()
        if (username && age && aboutMe) {
            newUser({
                variables: {
                    input: {
                        username, age: +age, aboutMe
                    }
                }
            }).then(resp => {
                console.log(resp.data)
                setUsername('')
                setAge(0)
                setAboutMe('')
                refetch()
            })
        }
    }

    return (
        <MainContainer>
            <div className={style.container}>
                <h1>Users</h1>
                <form className={style.form}>
                    <input placeholder={'Name'} value={username} onChange={(e) => setUsername(e.currentTarget.value)}/>
                    <input placeholder={'Age'} value={age} onChange={(e) => setAge(e.currentTarget.value)}
                           type={"number"}/>
                    <input placeholder={'About Me'} value={aboutMe}
                           onChange={(e) => setAboutMe(e.currentTarget.value)}/>
                    <button onClick={(e) => addUser(e)} disabled={!username || !age || !aboutMe}>Create</button>
                </form>
                <div className={style.users}>
                    {
                        data.getAllUsers.map(item => <Link href={`users/${item.id}`} legacyBehavior>
                            <div key={item.id}>
                                <a>
                                    {item.username}
                                </a>
                            </div>
                        </Link>)

                    }
                </div>
            </div>
        </MainContainer>
    );
};

export default Users;








