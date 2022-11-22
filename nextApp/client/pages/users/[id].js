import styles from '../../styles/user.module.scss'
import MainContainer from "../../components/MainContainer/MainContainer";
import {useQuery} from "@apollo/client";
import {GET_USER} from "../../client/query/users";


export default function ({id}) {

    const {data, loading} = useQuery(GET_USER, {
        variables: {
            id: +id
        }
    })

    if (loading) return <h1>Loading...</h1>

    const user = data.getUser


    return <MainContainer>
        <div className={styles.user}>
            <div className={styles.card}>
                <h1>
                    User with id {user.id}
                </h1>
                <div>User's name - {user.username}</div>
                <div>User's age - {user.age}</div>
                <div>About user - {user.aboutMe}</div>
            </div>
        </div>
    </MainContainer>
}

export async function getServerSideProps({params}) {

    return {
        props: {id: params.id}
    }
}