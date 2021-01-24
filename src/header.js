import styled from 'styled-components'

const HeaderDiv = styled.div`
    color: #fff9f9;
    background-color: #182b44;
    border-bottom: 3px solid slategray;
`

export default function Header(param){
    const {nasaData} = param;
    console.log(nasaData);

    return(
<HeaderDiv>
    <h1>NASA Photo of The Day</h1>

</HeaderDiv>
    )
}