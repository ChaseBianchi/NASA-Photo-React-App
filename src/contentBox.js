import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const StyledContent = styled.div`
    color: #fff9f9;
    background-color: #182b44;
    padding: 1%;
    .contentDiv {
    }
    .infoContainer {
        width: 100%;
        // border: 1px solid white;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }
    p{
        width: 90%;
        text-align: center;
    }
`

export default function ContentBox(param){
    const {nasaData} = param
    // const [fullScreen, setFullScreen] = useState(false)
    let fullScreen = false;
    // document.querySelector('.hd').onclick = ()=>{
    //     document.querySelector('.nasaPic').setAttribute('src', `${nasaData.url}`);
    //     document.querySelector('.nasaPic').classList.toggle('hd');
    //     document.querySelector('.infoContainer').classList.remove('hide');
    // }
    // useEffect(() => {
    //     if(fullScreen===true){
    //         document.onclick=()=>{
    //             document.querySelector('.nasaPic').setAttribute('src', `${nasaData.url}`);
    //             document.querySelector('.imageContainer').classList.remove('hd');
    //             document.querySelector('.infoContainer').classList.remove('hide');
    //             setFullScreen(false);
    //         }
    //     }else{document.querySelector('.nasaPic').onclick=()=>{
    //             document.querySelector('.nasaPic').setAttribute('src', `${nasaData.hdurl}`);
    //             document.querySelector('.imageContainer').classList.add('hd');
    //             document.querySelector('.infoContainer').classList.add('hide');
    //             setFullScreen(true);
    //     }}
    //     // eslint-disable-next-line
    // },[fullScreen])
        // 
    // useEffect(()=>{
        //     document.querySelector('.nasaPic').addEventListener('click',()=>{
        //         if(fullScreen===true){
        //             document.querySelector('.nasaPic').setAttribute('src', `${nasaData.url}`);
        //             document.querySelector('.imageContainer').classList.remove('hd');
        //             document.querySelector('.infoContainer').classList.remove('hide');
        //             setFullScreen(false);
        //         }else{
        //             document.querySelector('.nasaPic').setAttribute('src', `${nasaData.hdurl}`);
        //             document.querySelector('.imageContainer').classList.add('hd');
        //             document.querySelector('.infoContainer').classList.add('hide');
        //             setFullScreen(true);
        //     }})
        //     // eslint-disable-next-line
        // },[])
    const clickPic = ()=>{
        if(fullScreen===true){
            document.querySelector('.nasaPic').setAttribute('src', `${nasaData.url}`);
            document.querySelector('.imageContainer').classList.remove('hd');
            document.querySelector('.infoContainer').classList.remove('hide');
            fullScreen=false;
          }else{
            document.querySelector('.nasaPic').setAttribute('src', `${nasaData.hdurl}`);
            document.querySelector('.imageContainer').classList.add('hd');
            document.querySelector('.infoContainer').classList.add('hide');
            fullScreen=true;
          }
    }

    


    return (
        <StyledContent className='contentDiv'>
            <h2>{nasaData.title}</h2>
            <div className='flexDiv'>
                <div className='imageContainer'>
                <img className='nasaPic' src={nasaData.url} alt={`${nasaData.media_type} of ${nasaData.title}`}
                    onClick={clickPic}/>
                </div>
                <div className='infoContainer'>
                <h4>{nasaData.date}</h4>
                <p>{nasaData.explanation}</p>
                </div>
            </div>
        </StyledContent>
        
    )
}