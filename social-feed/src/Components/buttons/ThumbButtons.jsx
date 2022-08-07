import { useState } from "react"

const ThumbButtons = (props) => {
    const [thumbUpButton, setThumbUpButton] = useState('inactive')
    const [thumbDownButton, setThumbDownButton] = useState('inactive')
    const [upImg, setUpImg] = useState(require('./thumbup1.png'))
    const [downImg, setDownImg] = useState(require('./thumbdown1.png'))

    function thumbUp(){
        if(thumbUpButton === 'inactive'){
            setThumbUpButton(thumb-up)
            setUpImg(require('./thumbup2.png'))
            setThumbDownButton('inactive')
            setDownImg(require('./thumbdown1.png'))
        }
        else{
            setThumbUpButton('inactive')
            setUpImg(require('./thumbup1.png'))
        }
    }
    
    function thumbDown(){
        if(thumbDownButton === 'inactive'){
            setThumbDownButton('thumb-down')
            setDownImg(require('./thumbdown2.png'))
            setThumbUpButton('inactive')
            setUpImg(require('./thumbup1.png'))
        }
        else{
            setThumbDownButton('inactive')
            setDownImg(require('./thumbdown1.png'))
        }
    
    }
    return (
        <div class="button">
            <img className={thumbUpButton} src={upImg} onClick={thumbUp} alt=''/>
            <img className={thumbDownButton} src={downImg} onClick={thumbDown} alt=''/>
        </div>
    );




}
export default ThumbButtons;
