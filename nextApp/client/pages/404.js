import MainContainer from "../components/MainContainer/MainContainer";

export default function Error() {
    return <MainContainer>
        <div style={{display: "flex", flex: 1, alignItems: "center", justifyContent: "center", marginTop: '50px'}}>
            <h1>
                Unfortunately this is incorrect path
            </h1>
        </div>
    </MainContainer>
}