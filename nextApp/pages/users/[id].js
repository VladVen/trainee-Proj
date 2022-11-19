import styles from '../../styles/user.module.scss'
import MainContainer from "../../components/MainContainer";

export default function ({user}) {

    return <MainContainer>
    <div className={styles.user}>
        <h1>
            User with id {user.id}
        </h1>
        <div>User's name - {user.name}</div>
    </div>
    </MainContainer>
}

export async function getServerSideProps({params}) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()


    return {
        props: {user,}
    }
}