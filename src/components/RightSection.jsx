import './RightSection.css'
import { useState, useEffect } from "react";
import Select from 'react-select'

const options = [
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'JS', label: 'JS' },
    { value: "NODE", label: "NODE" },
    { value: "REACT", label: "REACT" }
]




function RightSection() {

    const [formValues, setFromValues] = useState({ "name": "", "email": "", "password": "" })
    const [select, setSelect] = useState([])
    const [selectPlaceHolder, setSelectPlaceHolder] = useState("Choose Skills")
    const [active, setActive] = useState(false)
    const [header, setHeader] = useState("Try it free 7 days then ₹180/mo. thereafter")

    function handleChange(e) {
        setFromValues({ ...formValues, [e.target.name]: e.target.value })
    }

    function handleSelect(e) {
        setSelect([...e])
        console.log(e)  // imp
        console.log(select) //imp
    }

    const claimTrial = (e) => {
        // console.log(e);
        e.preventDefault();
        setHeader("You have successfully subscribed to our plan ✓")
        setFromValues({ "name": "", "email": "", "password": "" })
        setSelect([])
        setActive(false)
        setSelectPlaceHolder((prev) => prev)
        setTimeout(() => {
            setHeader("Try it free 7 days then ₹180/mo. thereafter");
        }, 5000);
    }

    const isFromSubmit = () => {
        for (const value in formValues) {
            if (formValues[value].length == 0) {
                return false
            }
        }
        return true
    }

    useEffect(() => {
        if (select.length > 0 && isFromSubmit()) {
            setActive(true)
        }
    }, [select, formValues])

    return (
        <div className="right col-md-6">

            <div className="alert">

                <p> {header} </p>

            </div>

            <div className='form'>

                <div className="inside-form">

                    <form>

                        <input className="input first" name='name' onChange={handleChange} type="text" placeholder="Name" value={formValues.name} /><br /><br />

                        <input className="input" onChange={handleChange} placeholder="Email Address" type="email" id="email" name="email" value={formValues.email} /><br /><br />

                        <input className="input" onChange={handleChange} placeholder=" Password" type="password" name='password' value={formValues.password} /><br /><br />

                        <Select className="select" options={options} placeholder={selectPlaceHolder} onChange={handleSelect} isMulti isClearable={true} hideSelectedOptions={true} id="skills" name="skills" /><br /><br />

                        {active ? <button onClick={claimTrial} className="input last">CLAIM YOUR FREE TRAIL</button> : <button onClick={claimTrial} className="input form-btn">CLAIM YOUR FREE TRIAL</button>}

                        <div className="last_div">
                            <p> By clicking the button you are agreeing to our  <span> <strong>   Terms and Services  </strong></span>  </p>
                        </div>


                    </form>
                </div>


            </div>

        </div>

    )



}

export default RightSection