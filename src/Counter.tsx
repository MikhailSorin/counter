import {ChangeEvent, useState} from "react";
import {InputText} from "./components/Input/InputText";
import {Button} from "./components/Button/Button";
import s from './Counter.module.css'
import {InputNumbers} from "./components/Input/InputNumbers";

type CounterPropsType = {
    count: number
    setCounter: (count: number) => void
    minValue: string
    setMinValue: (min: string) => void
    maxValue: string
    setMaxValue: (max: string) => void
    untilSet: boolean
    setUntilSet: (untilSet: boolean) => void
}


export const Counter = (props: CounterPropsType) => {
    let lowLimit = +props.minValue
    let hiLimit = +props.maxValue


    let plusButtonClass = s.buttonplus
    let resetButClass = s.buttonreset
    let plusButtonDes = (props.count === hiLimit) || !props.untilSet ? true : false
    let resetButtonDes = (props.count === lowLimit) || !props.untilSet ? true : false
    let inputMinClass = (+props.minValue < 0) || (+props.minValue >= +props.maxValue) ? s.minInputA : s.minInput
    let inputMaxClass = (+props.minValue >= +props.maxValue) ? s.maxInputA : s.maxInput
    let setButtonDes = (+props.minValue < 0) || (+props.minValue >= +props.maxValue) ? true : false


    let textAreaClass
    if(((props.count >= hiLimit)&&props.untilSet)||(+props.minValue < 0) || (+props.minValue >= +props.maxValue)) {
        textAreaClass= s.textarealimd
    }else if(!props.untilSet){
        textAreaClass=s.textarea
    } else{
        textAreaClass=s.textarea
    }/*(props.count < hiLimit)*/

    let textAreaText
    if ((+props.minValue < 0) || (+props.minValue >= +props.maxValue)) {
        textAreaText = 'incorrect limits'
    } else if (!props.untilSet) {
        textAreaText = 'enter limits and push "set"'
    } else {
        textAreaText = props.count
    }


    const CounterSetter = () => {
        if (props.count < hiLimit) props.setCounter(props.count + 1)
    }

    const onChangeInput1Handler = (v: string) => {
        props.setUntilSet(false)
        props.setMinValue(v)
    }
    const onChangeInput2Handler = (v: string) => {
        props.setUntilSet(false)
        props.setMaxValue(v)
    }
    const setButtonHandler = () => {
        props.setUntilSet(true)

        props.setCounter(+props.minValue)

    }

    return (
        <div className={s.box}>
            <div className={s.counterBox}>
                <div className={s.textareaBox}>
                    <div className={textAreaClass}>{textAreaText}</div>
                </div>
                <div className={s.buttonsBox}>
                    {<Button title={'+1'} onClick={CounterSetter} classname={plusButtonClass} desable={plusButtonDes}/>}
                    {<Button
                        title={'Reset'}
                        classname={resetButClass}
                        onClick={() => props.setCounter(0)}
                        desable={resetButtonDes}
                    />}

                </div>
            </div>
            <div className={s.counterSettingBox}>
                <div className={s.settigsBox}>
                    <div>
                        <div>нижняя<br/>граница</div>
                        <InputNumbers
                            value={props.minValue}
                            onChange={onChangeInput1Handler}
                            className={inputMinClass}/>
                    </div>
                    <div>
                        <div>верхняя<br/>граница</div>
                        <InputNumbers
                            value={props.maxValue}
                            onChange={onChangeInput2Handler}
                            className={inputMaxClass}/>
                    </div>

                </div>
                <div className={s.buttonsBox2}>
                    <Button title={"set"} onClick={setButtonHandler} desable={setButtonDes}
                            classname={s.setButtotClass}/>

                </div>

            </div>
        </div>

    )

}